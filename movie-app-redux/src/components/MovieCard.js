import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
function MovieCard({ movie }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.details}</Card.Text>
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            value={movie.rating}
            edit={false}
          />
          <Link to={"/desc/" + movie.title} state={movie}>
            <Button variant="dark">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default MovieCard;
