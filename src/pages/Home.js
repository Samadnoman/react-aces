import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/nonveg.png";
import "../styles/Home.css";

function Home() {
  return (
  
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> ASK RESTAURANT </h1>
        <p>TASTE THAT REVIVE YOUR HAPPINESS</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;