// @ts-nocheck
import React from "react";
import { Typewriter } from "typewriting-react";
import styles from "./header.module.css";

const Header = ({ textColor, textData, newData }) => {
  return (
    <div className='mobile-padding normalize-padding header-height'>
      <h1 className={`${textColor} ${styles.header_head_text}`}>
        <Typewriter
          words={textData && newData && [`${textData}`, `${newData}`]}
        />
      </h1>
    </div>
  );
};

export default Header;
