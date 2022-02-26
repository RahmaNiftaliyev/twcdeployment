// @ts-nocheck
import React from 'react';
import styles from './chat.module.css';
// !------------------------------------------
import chatIcon from './assets/chat.png';

const ChatBox = ({ clickViewController }) => {
  return (
    <div className=" animate__animated animate__backInRight">
      <div className={`${styles.chat_box}`} onClick={clickViewController}>
        <img src={chatIcon} alt="think wice live helper chat box icon" />
        <span className={`${styles.chat_box_span}`}>Canlı dəstək</span>
      </div>
    </div>
  );
};

export default ChatBox;
