import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return ( <nav className = "navbar">
    <a href = "/" > SalonApp </a> 
    <p>
    <button className= "button-primary button-purple" id="create"> Create a New Color </button> 
    </p>
    <p>
    <button className= "button-primary button-round button-shadow" id="shadow"> Add a Shadow </button> 
    </p>
    </nav>
  );
}

export default Navbar;