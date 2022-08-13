import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./AddMovie.css";

function AddMovie({ addMovies }) {
  const [show, setShow] = useState(false);
  const [newMovie, setnewMovie] = useState({
    title: "",
    description: "",
    poster: "",
    rating: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const finalAdd = () => {
    addMovies(newMovie);
    handleClose();
    setnewMovie({
      title: "",
      description: "",
      poster: "",
      rating: "",
    });
  };

  return (
    <>
      <div className="add-btn">
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>

      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            placeholder="title"
            onChange={(e) =>
              setnewMovie({ ...newMovie, title: e.target.value })
            }
          />
          <input
            placeholder="desc"
            onChange={(e) =>
              setnewMovie({ ...newMovie, description: e.target.value })
            }
          />
          <input
            placeholder="url"
            onChange={(e) =>
              setnewMovie({ ...newMovie, poster: e.target.value })
            }
          />
          <input
            placeholder="rate"
            onChange={(e) =>
              setnewMovie({ ...newMovie, rating: e.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={finalAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
