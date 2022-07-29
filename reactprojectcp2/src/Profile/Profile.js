import React from "react";
import FullName from "./FullName";
import Bio from "./Bio";
import Profession from "./Profession";
import Button from "./Button";
import "./Profile.css";
function Profile(props) {
  return (
    <div className="containerProfile">
      {props.children}

      <FullName name="Ghassen Gasmi">
        <Button name="Ghassen Gasmi"></Button>
      </FullName>

      <Bio name="mybio"></Bio>
      <Profession></Profession>
    </div>
  );
}

export default Profile;
