import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./Navbar.css";

function NavBar({ setText, setRate }) {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <form>
            <input
              typeof="text"
              placeholder="Type movie title "
              onChange={(e) => setText(e.target.value)}
            ></input>
          </form>
        </li>
        <li>
          <ReactStars
            count={5}
            onChange={(newRating) => setRate(newRating)}
            size={24}
            activeColor="#ffd700"
          />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
