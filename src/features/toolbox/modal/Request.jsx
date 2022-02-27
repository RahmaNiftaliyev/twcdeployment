// @ts-nocheck
import React, { useState } from 'react';
import alertify from 'alertifyjs';
import styles from './request.module.css';
import arrow from './assets/arrow.svg';

const Request = ({ classData, classRemover }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setMNumber] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const isDisabled = [fullName, email, number, content, message].every(Boolean);

  const handleErrorView = () => {
    const isSaving = [fullName, email, number, content.message].some((content) => Boolean(content));

    if (isSaving) {
      alertify.confirm(
        'TWC.AZ',
        'Şəxsi Məlumatlarınız Saxlanılsın ?',
        function () {
          alertify.alert('TWC.AZ', `Hörmətli ${fullName} məlumatlarınız saxlanıldı`);
        },
        function () {
          alertify.alert('TWC.AZ', `Hörmətli ${fullName} məlumatlarınız silindi`);
          setFullName('');
          setEmail('');
          setMNumber('');
          setContent('');
          setMessage('');
        }
      );
    }
    classRemover();
  };

  const handleSubmit = (e) => {
    if (isDisabled) {
      alertify.alert('TWC.AZ', `${fullName} TWC ailəsinə xoş gəldiniz`);
      classRemover();
    }

    e.preventDefault();
  };

  return (
    <div className={`${styles.hidden_absolute_modal} ${classData}`}>
      <div className={`${styles.modal}`}>
        <form onSubmit={handleSubmit} netlify>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Ad və Soyad"
            pattern="[(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$]"
            className={`${styles.modal_input}`}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            className={`${styles.modal_input}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            name="number"
            id="number"
            placeholder="Telefon Nömrəsi"
            pattern="[(?=^.{0,40}$)^[0-9]+$]"
            className={`${styles.modal_input}`}
            value={number}
            onChange={(e) => setMNumber(e.target.value)}
            required
          />
          <input
            type="text"
            name="content"
            id="content"
            placeholder="Mövzu başlığı"
            pattern="(?=^.{0,60}$)^[a-zA-Z-]+\s[a-zA-Z-]+$"
            className={`${styles.modal_input}`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Müraciətiniz"
            className={`${styles.modal_text_area}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" disabled={!isDisabled}>
            Göndər <img src={arrow} alt="arrow svg button design" />
          </button>
          &nbsp; &nbsp;
          <button type="button" onClick={handleErrorView}>
            Geri qayıt
          </button>
        </form>
      </div>
    </div>
  );
};

export default Request;
