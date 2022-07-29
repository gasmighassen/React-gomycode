import React from "react";

const Button = (props) => {
  function alertname() {
    alert(props.name);
  }
  return (
    <div>
      <button onClick={alertname}>ClickMe</button>
    </div>
  );
};

export default Button;
