import React, { useEffect } from "react";
import Search from "../components/Search";
import { Row, Col, Pagination, Image } from "react-bootstrap";
import Anime from "../components/Anime";
import { useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [animeList, setAnimeList] = useState([]); //Sets anime list
  const [page, setPage] = useState(1); //Sets the page
  const [search, setSearch] = useState(""); //Sets the element to be searched for
  const [searchElement, setSearchElement] = useState([]); //Sets the search element

  /* Fetching the data from the Kitsu API */
  useEffect(() => {
    const url = "https://kitsu.io/api/edge/anime";
    axios
      .get(`${url}?page%5Blimit%5D=20&page%5Boffset%5D=${(page - 1) * 20}`) //Adding pagination
      .then(function(response) {
        setAnimeList(response.data);
        console.log(response);
      });
    window.scroll(0, 0);
  }, [page]);

  /* Function to handle search */
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`https://kitsu.io/api/edge/anime?filter%5Btext%5D=${search}`)

      .then((response) => {
        setSearchElement(response.data);
        console.log(response.data);
      });
    console.log(event);
  };

  let items = [];
  for (let number = 1; number <= 15; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
  }

  return (
    <div>
      <Row>
        {/*  Search Bar to search for animes  */}
        <Search
          onSubmit={(event) => {
            handleSubmit(event);
          }}
          onChange={(event) => setSearch(event.target.value)}
        />

        {/* Maps the data of search results if found */}
        {search == "" ? (
          animeList?.data?.map((anime) => (
            <Col key={anime.id} sm={12} md={6} xl={3}>
              <Anime attributes={anime.attributes} anime={anime} />
            </Col>
          ))
        ) : (
          <>
            {" "}
            {/* Maps the data if there is no search result */}
            {searchElement?.data?.map((anime) => (
              <Col key={anime.id} sm={12} md={6} xl={3}>
                <Anime attributes={anime.attributes} anime={anime} />
              </Col>
            ))}{" "}
          </>
        )}
      </Row>

      {/* Pagination */}
      <Pagination onClick={(e) => setPage(e.target.textContent)} size="lg">
        {items}
      </Pagination>
      <br />
    </div>
  );
};

export default HomeScreen;
