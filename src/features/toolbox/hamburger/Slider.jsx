// @ts-nocheck
import React, { useState } from 'react';
import GalleryServices from './../gallery/GalleryServices';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllLinks } from './../../navigation/navigationSlice';
import { selectAllServices } from './../../components/services/servicesSlice';
import styles from './hamburger.module.css';
import icon from './assets/img/menu-x-icon.svg';
import sliderTwc from './../../components/common/assets/svg/navigation-slider.svg';
import { useNavigate } from 'react-router-dom';

const Slider = ({ classData, handleSliderClick, conditionView }) => {
  // !services from service slice
  const allServices = useSelector(selectAllServices);
  // !menu links from navigation slice
  const allLinks = useSelector(selectAllLinks);
  const [animatorController, setAnimatorController] = useState(false);

  const [toggle, setToggle] = useState(false);
  const [idData, setIdData] = useState('');
  // !clicked navigation item
  const [finded, setFinded] = useState([]);

  const navigate = useNavigate();

  const setMainMenu = (item) => {
    return (
      <li
        key={item.id}
        onClick={() => {
          setToggle(!toggle);
          setIdData(item.id);
        }}
        className={`${styles.animate_character} mb-mb-20 display_none display-mb-block`}
        style={
          item.id === idData && toggle
            ? {
                display: 'block'
              }
            : item.id !== idData && toggle
            ? { display: 'none' }
            : {
                display: 'block'
              }
        }
      >
        <Link to={item.link} className={styles.link} style={{ fontSize: '35px' }}>
          {item.name}
        </Link>
        {item.hasSubmenu && (
          <div className={styles.submenu}>
            <ul
              style={{
                background: 'rgba(255,255,255,.1)',
                marginTop: '20px',
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {toggle &&
                allLinks
                  .find((item) => item.id === idData)
                  .subMenus.map((item) => {
                    return (
                      <li
                        onClick={() => {
                          setToggle(!toggle);
                          setFinded(item.id);
                          navigate(`${item.link}`);
                        }}
                      >
                        <Link to={item.link}>{item.name}</Link>
                      </li>
                    );
                  })}
            </ul>
          </div>
        )}
      </li>
    );
  };

  const mainMenu = allLinks.map((item, index) => {
    return setMainMenu(item);
  });

  return (
    <div
      className={`slider slider-mb display-mb-flex ${conditionView ? conditionView : classData}`}
      style={{ overflowY: 'hidden', position: 'fixed!important', top: '0' }}
    >
      <img
        src={icon}
        alt="slider-menu icon"
        className={`qodef-valiance-svg-close ${styles.right}`}
        onClick={handleSliderClick}
      />
      <img
        src={sliderTwc}
        alt="think wise company slider navigation svg logo"
        width="1200px"
        style={{
          transform: 'rotate(90deg)',
          position: 'absolute',
          left: '-275px',
          top: '150px'
        }}
      />

      <ul className={`${styles.menu_centerer} display_none flex-mb-column display-mb-block`}>{mainMenu}</ul>
      <p className={`mobile-display-none text-upper text-white ${styles.slider_paragraph}`}>
        BİZNESİNİZİ TWC İLƏ YÜKSƏLDİN
      </p>
      <h2 className={`mobile-display-none ${styles.header_text}`}>Think Wise Consulting</h2>
      <p className={`mobile-display-none ${styles.twc_difference}`}>
        Peşəkar komandamızla TWC sizə uğurlu biznesinizi qurmağa <br /> və inkişaf etdirməyə imkan verir.
      </p>
      <h2 className={`${styles.header_text} ${styles.animate_character} mobile-display-none`}>
        Konsalting servislərimiz
      </h2>
      <GalleryServices
        data={allServices}
        className="alice-without-image"
        boxContainerClass={`${styles.service_logo_group} mobile-display-none d-flex  justify-between`}
        boxClass={`${styles.service_logo_box} d-flex direction-column align-center justify-center `}
        imgClass={`${styles.service_logo}`}
        spanClass={`${styles.service_logo_sub_title}`}
        isWhite={true}
        buttonSize="32px"
      />
    </div>
  );
};

export default Slider;
