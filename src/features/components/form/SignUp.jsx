// @ts-nocheck
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'typewriting-react';
import styles from './form.module.css';
// !----------------------------------------------------------
import imageLogo from './assets/img/logo.png';
import blackThinkWiseLogo from './../common/assets/svg/navigation-black-logo.svg';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const canSubmit = [fullName, email, password, number].every(Boolean);

  return (
    <div className="d-flex">
      <section className={`${styles.form_side}`}>
        <div className={`${styles.form_logo}`}>
          <Link to="/">
            <img src={blackThinkWiseLogo} alt="" />
          </Link>
        </div>
        <div className={`${styles.form_group}`}>
          <p className={`${styles.form_title}`}>
            TWC-
            <Typewriter words={['yə xoş gəlmisiniz!', 'də qeydiyyatdan keç!']} />
          </p>
          <form action="" className={`${styles.form_input} d-flex direction-column`} netlify>
            <label className={`${styles.input_label}`} htmlFor="fullname">
              Ad və Soyad*
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Ad və soyadınızı daxil edin"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              pattern="[(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$]"
            />
            <label className={`${styles.input_label}`} htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              placeholder="Email ünvanınızı daxil edin"
              required
              name="email"
              id="email"
              value={email}
              autoComplete={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            />
            <label className={`${styles.input_label}`} htmlFor="number">
              Telefon*
            </label>
            <input
              type="text"
              placeholder="Telefon nömrənizi qeyd edin"
              name="number"
              id="number"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              pattern="[(?=^.{0,40}$)^[0-9]+$]"
            />
            <label className={`${styles.input_label}`} htmlFor="password">
              Şifrə*
            </label>
            <input
              type="password"
              placeholder="Şifrə təyin edin"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
            />
            <label className={`${styles.password_requirement_text}`} htmlFor="password">
              Minimum 8 simvoldan ibarət olmalıdır
            </label>
            <button disabled={!canSubmit} className={`${styles.form_submit_button}`}>
              Qeydiyyatdan keç
            </button>
            <div className={`${styles.form_question}`}>
              Hesabınız var?
              <Link to="/login" className={`${styles.form_switch_link}`}>
                {' '}
                Daxil ol
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
