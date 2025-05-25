import React from "react";
import loveImage from "../images/love4.avif";
import styles from "./Homepage.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import backgroundImg from '../images/background2.jpg'; // from src folder


const Homepage = () => {
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/invitation");
  }

  return (
    <div className={styles.home} style={{ backgroundImage: `url(${backgroundImg})`}}>
      <Link to={"/invitation"}>
        <img src={loveImage} alt="Love" />
      </Link>
      <p>
        Our,
        <span> Beloved Guest</span>
      </p>
      <button onClick={handleClick}>OPEN INVITATION</button>
    </div>
  );
};

export default Homepage;
