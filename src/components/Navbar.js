import React from "react"
import logo from "../logo.png" 
// REACT FONTAWESOME IMPORTS
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import pdf from '../Fatih_Ozer.pdf';

const Navbar = () => {
    return (
        <nav className="bar">
        <nav className="navbar sticky navbar-expand-lg navbar-light bg-dark">
<div className="container" sticky="top">

  <a className="navbar-brand" href="#">Fatih Ozer</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#education">Education</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#experience">Professional Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={pdf}>Download Resume</a>
      </li>
      
    </ul>
    
</div>
  </div>
</nav>
</nav>
    )
}

export default Navbar
