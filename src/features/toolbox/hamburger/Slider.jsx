// @ts-nocheck
import React, { useState } from 'react';
import RoundedButton from './../buttons/RoundedButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllLinks } from './../../navigation/navigationSlice';
import { selectFooterLinkById } from './../../footer/footerSlice';
import styles from './hamburger.module.css';
import icon from './assets/img/menu-x-icon.svg';
import sliderTwc from './../../components/common/assets/svg/navigation-slider.svg';
import { SiAnalogue } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const Slider = ({ classData, handleSliderClick, conditionView }) => {
  const contactData = useSelector((state) => selectFooterLinkById(state, 'id4'));
  const allLinks = useSelector(selectAllLinks);
  let naviMainData = allLinks.map((item) => {
    return { link: item.link, name: item.name, id: item.id, hasSubmenu: item.hasSubmenu };
  });
  const [toggle, setToggle] = useState(false);
  const [finded,setFinded] = useState([]);

  const navigate = useNavigate()


  const handleNaviAnimation = (paramsNaviItem) => {
    if (paramsNaviItem.hasSubmenu) {
      setToggle(!toggle);
      setFinded(paramsNaviItem);
    }

    navigate(paramsNaviItem.link.length > 1 ? paramsNaviItem.link : 0);
  }

  const mainMenu =!toggle ? naviMainData.map((item) => {
    return (
      <li onClick={() => handleNaviAnimation(item)} className={`${styles.animate_character} mb-mb-20`} key={item.id}>
        {item.name}
      </li>
    );
  }):finded.map(item => {
    return (
      <li className={`${styles.animate_character} mb-mb-20`} key={item.id}>
     {item.name}
      </li>
    );
  })

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

      <ul className={`${styles.menu_centerer}`} st>
        {mainMenu}
      </ul>

      <p className={`mobile-display-none text-upper text-white ${styles.slider_paragraph}`}>
        BİZNESİNİZİ TWC İLƏ YÜKSƏLDİN
      </p>
      <h2 className={`mobile-display-none ${styles.header_text}`}>Think Wise Consulting</h2>
      <p className={`mobile-display-none ${styles.twc_difference}`}>
        Peşəkar komandamızla TWC sizə uğurlu biznesinizi qurmağa <br /> və inkişaf etdirməyə imkan verir.
      </p>
    </div>
  );
};

export default Slider;
