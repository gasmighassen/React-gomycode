import React from "react";

const Filter = ({ setText }) => {
  return (
    <div>
      <form>
        <input onChange={(e) => setText(e.target.value)} typeof="text"></input>
        {/* <button onClick={}></button> */}
      </form>
    </div>
  );
};

export default Filter;
