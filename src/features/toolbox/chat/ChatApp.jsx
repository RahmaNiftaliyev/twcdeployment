// @ts-nocheck
import React from 'react';
import SpeedDialsHooks from './../speed-dial/SpeedDialsHooks';
import { Picker } from 'emoji-mart';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BiSend } from 'react-icons/bi';
import { useFileUpload } from 'use-file-upload';
import 'emoji-mart/css/emoji-mart.css';
import styles from './chat.module.css';
import linear from './assets/team-shape.svg';
import emoji from './assets/emoji.svg';

const ChatApp = ({ clickViewController, setFirstMessageEmail, firstMessageEmail }) => {
  const [file, selectFile] = useFileUpload();
  const [docs,selectDosc] = useFileUpload();


  const [message, setMessage] = React.useState('');
  const [error, setError] = React.useState('');
  const [textClass, setTextClass] = React.useState('');

  const [showEmojiBox, setShowEmojiBox] = React.useState(false);

  const isDisabled = message.length > 0 ? true : false;

  const formValidationController = (e) => {
    if (!isDisabled) {
      e.preventDefault();
      setError('Mesaj mətni vacibdir!');
      setTextClass('text-area-placeholder-changer');
      setTimeout(() => {
        setError('');
        setTextClass('');
      }, 2500);
    } else {
      e.preventDefault();
      setFirstMessageEmail(true);
    }
    e.preventDefault();
  };

  const addEmoji = (emoji) => {
    const updatedMessage = message.concat(emoji.native);
    setMessage(updatedMessage);
  };

  return (
    !firstMessageEmail && (
      <div className={`main animate__animated animate__fadeInUp`}>
        <div className="chat-header">
          <div className="profile-container">
            <div className="profile"></div>
            <h2>TWC</h2>
          </div>
          <MdOutlineKeyboardArrowDown onClick={clickViewController} className="icon-font-size-lg pointer" />
        </div>
        <div className="betweener">
          <p>Bir neçə dəqiqə ərzində sizə geri dönüş olunacaq</p>
        </div>

        <div className="conversation-group">
          <img src={linear} alt="" />
          <p className="message-operator animate__animated animate__fadeIn animate__delay-2s">
            Salam, mən TWC-nin onlayn dəstəyiyəm. Sizə necə kömək edə bilərəm?
          </p>
          <div className={`${showEmojiBox === true ? `${styles.emoji_box}` : 'display_none'} d-flex justify-center`}>
            <Picker
              onClick={(emoji, event) => addEmoji(emoji)}
              set="apple"
              showPreview={false}
              showSkinTones={false}
              i18n={{
                search: 'Recherche',
                categories: { search: 'Axtarış edin', recent: 'Récents' }
              }}
            />
          </div>
        </div>
        <div className="input-group">
          <hr />
          <SpeedDialsHooks selectFile={selectFile} />
          <form onSubmit={formValidationController}>
            <button className="send-button">
              <BiSend />
            </button>
            <textarea
              name="message"
              id="message"
              value={message && file ? `${message} ${file.name}` : message ? message : file ? file.name : ''}
              className={`${textClass}`}
              placeholder={error.length > 0 ? error : 'Mesajınızı daxil edin...'}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <img className="pointer" src={emoji} alt="" onClick={() => setShowEmojiBox(!showEmojiBox)} />
          </form>
        </div>
      </div>
    )
  );
};

export default ChatApp;
