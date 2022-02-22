// @ts-nocheck
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import styles from './chat.module.css';

const EmailService = ({ setFirstMessageEmail, firstMessageEmail, clickViewController }) => {
  const [email, setEmail] = React.useState('');
  const [check, setCheck] = React.useState(false);
  const [error, setError] = React.useState('');
  const EmailSetChecker = [email, check].every(Boolean);
  const [textClass, setTextClass] = React.useState('');

  const checkController = () => {
    setTextClass('text-area-placeholder-changer');
    setEmail('');
    setError('onay qutusunu isarəliyin!');
  };

  const emailController = () => {
    setTextClass('text-area-placeholder-changer');
    setError('E-poçtunuzu daxil etməmisiniz!');
  };

  const checkAndEmailErrorController = () => {
    setTextClass('text-area-placeholder-changer');
    setError('Form qaydalarına riayət edin!');
  };

  const handleSubmit = (e) => {
    if (!EmailSetChecker) {
      !Boolean(email) && !Boolean(check)
        ? checkAndEmailErrorController()
        : check === false
        ? checkController()
        : emailController();

      setTimeout(() => {
        setError('');
        setTextClass('');
      }, 2000);
    } else {
      setFirstMessageEmail(false);
    }

    e.preventDefault();
  };

  const closeBox = (e) => {
    clickViewController(e);
    setFirstMessageEmail(false);
  };

  return (
    firstMessageEmail && (
      <div className={`main animate__animated ${firstMessageEmail ? 'animate__fadeInUp' : 'animate__fadeOutDown'}`}>
        <div className={`${styles.email_container_app}`}>
          <div className={`${styles.email_container_app_header}`}>
            <FaTimes className={`${styles.email_x_icon} pointer`} onClick={closeBox} />
          </div>
          <div className={`${styles.email_container_app_center}`}>
            <div className="profile margin-bottom-32"></div>
            <h2>Özünüzü təqdim edin:</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                className={`${textClass}`}
                placeholder={error.length > 0 ? error : 'E-poçtunuzu daxil edin'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div>
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  checked={check}
                  onChange={(e) => setCheck(e.target.checked)}
                />
                <small>Bülletenimiz üçün qeydiyyatdan keçin</small>
              </div>
              <button type="submit">Göndər</button>
            </form>
          </div>
          <div className={`${styles.email_container_app_bottom}`}>
            <button className="send-button" disabled>
              <BiSend />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default EmailService;
