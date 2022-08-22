import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/slices/MovieSlice";

function AddMovie() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [newMovie, setnewMovie] = useState({
    title: "",
    description: "",
    image: "",
    rating: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="add-btn">
        <Button variant="outline-primary" onClick={handleShow}>
          Add Movie
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="add-form">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter title"
                value={newMovie.title}
                onChange={(e) =>
                  setnewMovie({ ...newMovie, title: e.target.value })
                }
              />
              <label htmlFor="description">description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Enter title"
                value={newMovie.description}
                onChange={(e) =>
                  setnewMovie({ ...newMovie, description: e.target.value })
                }
              />
              <label htmlFor="poster">Poster url</label>
              <input
                type="text"
                className="form-control"
                id="poster"
                placeholder="Enter title"
                value={newMovie.poster}
                onChange={(e) =>
                  setnewMovie({ ...newMovie, image: e.target.value })
                }
              />
              <label htmlFor="rating">rating</label>
              <ReactStars
                count={5}
                onChange={(newRating) =>
                  setnewMovie({ ...newMovie, rating: newRating })
                }
                size={24}
                activeColor="#ffd700"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => dispatch(addMovie(newMovie))}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
