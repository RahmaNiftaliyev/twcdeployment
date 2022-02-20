// @ts-nocheck
import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { BiSend } from 'react-icons/bi'
import linear from './assets/team-shape.svg'
import emoji from './assets/emoji.svg'



const ChatApp = ({clickViewController}) => {


  const [message,setMessage] =  React.useState('') ; 
  const [error,setError] = React.useState('') ; 

  const isDisabled = message.length > 0 ? true : false




  const formValidationController = (e) => {



    e.preventDefault() ; 
  }


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
                <MdOutlineKeyboardArrowDown onClick={clickViewController} className='icon-font-size-lg pointer' />
        </div>
        <div className="betweener">
          <p>Bir neçə dəqiqə ərzində sizə geri dönüş olunacaq</p>
        </div>
        
        <div className="conversation-group">
            <img src={linear} alt="" />
            <p className="message-operator animate__animated animate__fadeIn animate__delay-2s">
                Salam, mən TWC-nin onlayn dəstəyiyəm. Sizə necə kömək edə bilərəm?
            </p>
        </div>
        <div className="input-group">
          <hr />
            <form onSubmit={formValidationController}>
                <textarea 
                  name="message" 
                  id="message" 
                  value={message} 
                  placeholder={error.length > 0 ? error : 'Mesajınızı daxil edin...'}
                  onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
                 <img className='pointer' src={emoji} alt="" />
                     <button  className='send-button'>
                          <BiSend />
                    </button>
              </form>
                   
        </div>
    </div>
  )
}

export default ChatApp