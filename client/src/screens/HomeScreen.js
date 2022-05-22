import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnimeList } from "../redux/actions/anime";
import { Row, Col } from "react-bootstrap";

import Anime from "../components/Anime";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const animeList = useSelector((state) => state.anime);

  useEffect(() => {
    dispatch(fetchAnimeList());
  }, [dispatch, animeList]);

  return (
    <div>
      <Row>
        {animeList?.data?.map((anime) => (
          <Col key={anime.id} sm={12} md={6} xl={3}>
            <Anime attributes={anime.attributes} anime={anime} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
