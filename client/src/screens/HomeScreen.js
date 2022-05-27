import React, { useEffect } from "react";
import Search from "../components/Search";

import { Row, Col, Pagination, Image } from "react-bootstrap";
import Anime from "../components/Anime";
import { useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [animeList, setAnimeList] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchElement, setSearchElement] = useState([]);

  useEffect(() => {
    const url = "https://kitsu.io/api/edge/anime";
    axios
      .get(`${url}?page%5Blimit%5D=20&page%5Boffset%5D=${(page - 1) * 20}`)
      .then(function(response) {
        setAnimeList(response.data);
        console.log(response);
      });
    window.scroll(0, 0);
  }, [page]);

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

  let active = page;
  let items = [];
  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Row>
        <Search
          onSubmit={(event) => {
            handleSubmit(event);
          }}
          onChange={(event) => setSearch(event.target.value)}
        />

        {search == "" ? (
          animeList?.data?.map((anime) => (
            <Col key={anime.id} sm={12} md={6} xl={3}>
              <Anime attributes={anime.attributes} anime={anime} />
            </Col>
          ))
        ) : (
          <>
            {searchElement?.data?.map((anime) => (
              <Col key={anime.id} sm={12} md={6} xl={3}>
                <Anime attributes={anime.attributes} anime={anime} />
              </Col>
            ))}{" "}
          </>
        )}
      </Row>
      <Pagination onClick={(e) => setPage(e.target.textContent)} size="lg">
        {items}
      </Pagination>
      <br />
    </div>
  );
};

export default HomeScreen;
