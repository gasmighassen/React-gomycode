import React from "react";

const Filter = ({ setText, setRate }) => {
  return (
    <div>
      <h1>Search</h1>
      <form>
        <input onChange={(e) => setText(e.target.value)} typeof="text" placeholder="Type movie title/rating here ..."></input>
      </form>
    </div>
  );
};

export default Filter;
