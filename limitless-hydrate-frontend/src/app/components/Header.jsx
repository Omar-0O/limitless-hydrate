// src/components/layout/Header.jsx
import React from "react";
import styles from "./styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={`${styles.leftSection} ${styles.navLinks}`}>
        <ul>
          <li><a href="#">Products</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </div>

      <div className={`${styles.centerSection} ${styles.logoContainer}`}>
        <a href="images/logo.png">
          <img src="images/logo.png" alt="Logo" height="40" />
        </a>
      </div>

      <div className={`${styles.rightSection} ${styles.ctaButton}`}>
        <button className={styles.buyNowButton}>Buy Now</button>
      </div>
    </header>


       );0
       

};

export default Header;
