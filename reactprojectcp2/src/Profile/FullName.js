import React from "react";

function FullName(props) {
  return (
    <>
      <h1>Welcome {props.name}</h1>
      {props.children}
    </>
  );
}

export default FullName;
