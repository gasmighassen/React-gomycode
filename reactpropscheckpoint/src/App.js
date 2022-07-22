import './App.css';
import Profile from './Profile/Profile';
import React from 'react'


function App() {
  const person = {
    Fullname: "Gasmi ghasen",
    Bio: "full stack web developer",
    Profession: "web developer",
    image: "./profilePhoto.png",
  };
  function handleName() {
    alert(person.Fullname);
  }
  return (
    <>
      <Profile person={person} clickMe={handleName} >
       
      </Profile>
      
    </>
    
  
    
  )


}

export default App;
