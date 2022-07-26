import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [show, setshow] = useState(false);

  const handleClick = () => {
    setshow(!show);
  };

  const [person] = useState({
    fullName: "duck",
    bio: " debugs so fast",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfi4XPmLixvADnNrKZYzh8VPZgnDtOzCo73WvA_j6fePfM4cL82GONTx5Mgp6TnD6oxPo&usqp=CAU",
    profession: "debugger",
  });
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="btn">
        <button onClick={handleClick}>show me</button>
      </div>
      <div className="main">
        {show ? (
          <div className="info">
            <div className="img">
              <img src={person.imgSrc} alt={person.fullName} />
            </div>
            <div className="names">
              <h1> Fullname </h1>
              <h2>{person.fullName}</h2>
            </div>
            <div className="bio">
              <h1>Bio</h1>
              <h2>{person.bio}</h2>
            </div>
            <div className="profession">
              <h1>Profession</h1>
              <h2>{person.profession}</h2>
            </div>
          </div>
        ) : null}
        <div className="count">
          <h1>
            The component has been rendered for <span>{count}</span> seconds
          </h1>
        </div>
      </div>
    </>
  );
};
export default App;
