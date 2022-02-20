// @ts-nocheck
import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { BiSend } from 'react-icons/bi'
import linear from './assets/team-shape.svg'
import emoji from './assets/emoji.svg'



const ChatApp = ({clickViewController}) => {


  const [message,setMessage] =  React.useState('') ; 


  return (
   <div className='main animate__animated animate__backInRight'>
        <button className='send-button'>
          <BiSend />
        </button>
        <div className="chat-header">
            <div className="profile-container">
              <div className="profile"></div>
              <h2>TWC</h2>
            </div>
                <MdOutlineKeyboardArrowDown onClick={clickViewController} className='icon-font-size-lg' />
        </div>
        <div className="betweener">
          <p>Bir neçə dəqiqə ərzində sizə geri dönüş olunacaq</p>
        </div>
        
        <div className="conversation-group">
            <img src={linear} alt="" />
            <p className="message-operator">
                Salam, mən TWC-nin onlayn dəstəyiyəm. Sizə necə kömək edə bilərəm?
            </p>
        </div>
        <div className="input-group">
          <hr />
            <form action="">
                <textarea name="" id="" placeholder='Mesajınızı daxil edin...'></textarea>
                 <img src={emoji} alt="" />
            </form>
                   
        </div>
    </div>
  )
}

export default ChatApp