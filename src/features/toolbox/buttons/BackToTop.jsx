// @ts-nocheck
import React from "react";
import styles from "./button.module.css";
// !------------------------------------------
import svgButtonView from "./svg/button.svg";

const BackToTop = ({ showMe }) => {
  return (
    <a
      href='#top'
      className={`${styles.back_to_top} ${!showMe && "visible_hidden"}`}
    >
      <img src={svgButtonView} alt='back to top button svg viewer' />
    </a>
  );
};

export default BackToTop;
