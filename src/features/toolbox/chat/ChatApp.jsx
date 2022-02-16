// @ts-nocheck
import React from 'react'
import styles from './chat.module.css'
// !------------------------------------------
import xIcon from './assets/times.png'
import playIcon from './assets/play.png'
import additionIcon from './assets/addition.png'



const ChatApp = ({clickViewController}) => {

  return (
    <div className={`${styles.chat_app_container}`}>

    <div className={`${styles.container_upper}`}>
        <img src={xIcon} onClick={clickViewController} alt="think wice chat app icons" />
        <span className={`${styles.chat_box_span}`}>Canlı dəstək</span>
        <img src={playIcon} alt="think wice chat app icons" />
    </div>


    <div className={`${styles.message_box}`}>
        <div className={`${styles.message_hello}`}>
          <p>Salam, mən TWC-nin onlayn dəstəyiyəm. Sizə necə kömək edə bilərəm?</p>
        </div>
          <div className={`${styles.controllers}`}>
            <img src={additionIcon} alt="think wice chat app icons" />
            <input type="text" name="mesaj" id="mesaj" placeholder='Mesajınız' />
            <button>Göndər</button>
        </div>
    </div>
    
    </div>
  )
}

export default ChatApp