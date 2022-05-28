import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Anime = ({ anime, attributes }) => {
  /* Anime Cards - gives basic information about an anime */
  return (
    <Card className="my-3 p-3 rounded">
      {/* Links the card to the information page of a particular anime when clicked */}
      <Link to={`/anime/${anime.id}`}>
        <Card.Img src={attributes?.posterImage.medium} />
      </Link>
      <Card.Body>
        <Card.Title as="h5">
          <strong>{attributes?.titles.en}</strong>
        </Card.Title>
        <Card.Text as="p">
          <strong>Episode Count: </strong> {attributes?.episodeCount} <br />
          {attributes?.ageRatingGuide}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Anime;
