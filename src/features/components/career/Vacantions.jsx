// @ts-nocheck
import React, { useState } from 'react';
import VacantionHeaderDash from './VacantionHeaderDash';
import Footer from '../../footer/Footer';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectVacantionById } from './careersSlice';
import styles from './career.module.css';
// !----------------------------------------------------------
import arrow from './assets/img/arrow.png';

const Vacantions = () => {
  const { vacanciesId } = useParams();
  const selectedVacancy = useSelector((state) => selectVacantionById(state, vacanciesId));

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setMNumber] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const isDisabled = [fullName, email, number, content, message].every(Boolean);

  const handleSubmit = () => {};

  return (
    <div>
      <VacantionHeaderDash />
      <div className={`${styles.vacancy_section_main_container}`}>
        <h1 className={`${styles.vacancy_header}`}>
          {selectedVacancy.name} <br /> pozisiyasına vakansiya
        </h1>
        <div className={`${styles.vacancy_container}`}>
          <h3>Biz kimik?</h3>
          <p>
            Cənub-Şərqi Avropanın ilk erkən mərhələdə olan saf menecement konsaltinq şirkəti olan TWC gənc, dinamik və
            istedadlı komandası ilə hər çətinliyin üstəsindən gəlməyə hazırdır.
          </p>
          <h3>İş haqqında</h3>
          <p>
            Biz müştərilərimizə bizneslərini transformasiya etmək üçün intuitiv tövsiyələr verəcək &nbsp;
            {selectedVacancy.name} axtarırıq.
          </p>
          <p>
            Uğurlu {selectedVacancy.name} ilk növbədə, biznesin bir çox aspektləri barədə geniş biliklərə malik
            olmalıdır. İdeal namizəd həmçinin müştərilərin şirkət dəyərini artıracaq həllər və tövsiyələr təklif etmək
            üçün mükəmməl bacarıqlara malik olmalıdır.
          </p>
          <p>TWC-də məqsəd müştərilərin uzunmüddətli müvəffəqiyyətinə dəstək olmaqdır.</p>
          <h3>Vəzifələri</h3>
          <ul type="disc" className="non-cleared">
            {selectedVacancy.orders.map((order, index) => {
              return <li key={index}>{order}</li>;
            })}
          </ul>
          <h3>Üstünlük kvalifikasiyaları</h3>
          <ul type="disc" className="non-cleared">
            {selectedVacancy.qualifications.map((qualification, index) => {
              return <li key={index}>{qualification}</li>;
            })}
          </ul>
          <h3>Şəxsi keyfiyyət və sosial bacarıqları</h3>
          <ul type="disc" className="non-cleared">
            {selectedVacancy.personalQuality.map((quality, index) => {
              return <li key={index}>{quality}</li>;
            })}
          </ul>

          {/* vezife ustunluk wexsi muraciet */}
          <h3>Haqqımızda</h3>
          <p>
            Biz komandamızın müxtəlifliyinə inanırıq, buna görə də biz bərabər imkanlara malik işəgötürənik. Biz yaş,
            irq, din, etnik mənsubiyyət, milli mənşə, cinsi, cinsi orientasiya, ailə vəziyyəti, əlillik və
            qanunvericiliklə qorunan digər əsaslar da daxil olmaqla, lakin bununla məhdudlaşmayan, hər hansı bir əlamətə
            görə diskriminasiyaya yol vermirik.
          </p>

          {/*MURACIET ET FORM*/}
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
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vacantions;
