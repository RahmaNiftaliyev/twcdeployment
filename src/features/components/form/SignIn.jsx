// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'typewriting-react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from './usersSlice';
import styles from './form.module.css';
// !----------------------------------------------------------
import imageLogo from './assets/img/logo.png';
import blackThinkWiseLogo from './../common/assets/svg/navigation-black-logo.svg';

const SignUp = () => {
  const users = useSelector(selectAllUsers);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [checked, setChecked] = useState(false);
  const isDisable = [email, password].every(Boolean);

  const handleSubmit = () => {
    if (!email || !password) {
      setEmail('');
      setPassword('');
      setError('Please fill all fields');
    } else if (!checked) {
      setError('Please accept terms and conditions');
    } else {
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <section className={`${styles.form_side}`}>
        <div className={`${styles.form_logo}`}>
          <Link to="/">
            <img src={blackThinkWiseLogo} alt="" />
          </Link>
        </div>
        <div className={`${styles.form_group}`}>
          <p className={`${styles.form_title}`}>
            TWC-
            <Typewriter words={['yə xoş gəlmisiniz!', 'yə daxil ol!']} />
          </p>
          <form action="" onSubmit={handleSubmit} className={`${styles.form_input} d-flex direction-column`} netlify>
            <label className={`${styles.input_label}`} htmlFor="email">
              Email*
            </label>
            {/* !INPUT EMAIL VERIFICATION */}
            <input
              type="email"
              placeholder="Email ünvanınızı daxil edin"
              required
              id="email"
              name="email"
              value={email}
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className={`${styles.input_label}`} htmlFor="password">
              Şifrə*
            </label>
            {/* !INPUT PASSWORD VERIFICATION */}
            <input
              type="password"
              placeholder="Şifrənizi daxil edin"
              required
              name="password"
              id="password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className={`${styles.login_features} d-flex justify-between`}>
              <div className={`${styles.checkbox_input} d-flex align-center`}>
                <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                <p className={`${styles.checkbox_label}`}>Məni xatırla</p>
              </div>
              <p className={`${styles.forgetten_password_link}`}>Şifrəni unutdun?</p>
            </div>

            <button disabled={!isDisable} className={`${styles.form_submit_button}`}>
              Daxil ol
            </button>
            <div className={`${styles.form_question}`}>
              Hesabınız yoxdur?
              <Link to="/register" className={`${styles.form_switch_link}`}>
                {' '}
                &nbsp; Qeydiyyatdan keç
              </Link>
            </div>
          </form>
        </div>
      </section>
      <section className={`${styles.image_side} d-flex justify-center`}>
        <img src={imageLogo} alt="" />
      </section>
    </div>
  );
};

export default SignUp;
