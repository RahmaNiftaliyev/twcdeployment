// @ts-nocheck
import React, { useState } from 'react';
import NaviEnableBlock from './NaviEnableBlock';
import Hamburger from './../toolbox/hamburger/Hamburger';
import Slider from '../toolbox/hamburger/Slider';
import { useSelector } from 'react-redux';
import { selectAllLinks } from './navigationSlice';
import { GoTriangleRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = ({ logo, enable, textColor, bgColor, isArticle, isHeader, isPrivacy }) => {
  const allLinks = useSelector(selectAllLinks);
  const navigate = useNavigate();

  const [view, setView] = useState('');
  const [hidden, setHidden] = useState('');

  const handleNavigation = () => {
    navigate('/');
  };

  const clickHandler = () => {
    setView('slider-visible slider-mb-visible');
    setHidden('');
  };

  const disableSlider = () => {
    setHidden('slider-hidden slider-mb-hidden ');
  };

  const renderedLinks = allLinks.map((link) => {
    return (
      <li key={link.id}>
        <Link
          className={`${styles.font_navigation_links} text-decoration-none relative  ${textColor} link-hover`}
          to={link.link}
        >
          {link.name}
          <span className={`${styles.padding_right_icon}`}>
            <GoTriangleRight className={`${styles.vertical_middle} `} />
          </span>
          {link.hasSubmenu && (
            <div className="absolute z-index-100">
              <div
                style={{
                  width: '200px',
                  height: '30px',
                  background: 'transparent'
                }}
              />
              <ul className="hoverable animate__animated animate__fadeIn">
                {link.subMenus.map((menu) => {
                  return (
                    <li className={`${styles.link_height}`} key={menu.name}>
                      <Link className={`${styles.link_none} text-upper`} key={menu.name} to={menu.link}>
                        {menu.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </Link>
      </li>
    );
  });

  return (
    <div
      className={`mobile-padding normalize-padding navigation-height d-flex align-center justify-between ${
        styles.navigation_padding_top
      } ${isArticle || isHeader || isPrivacy ? styles.ptAndPb : ''}`}
    >
      <Slider handleSliderClick={disableSlider} classData={view} conditionView={hidden} />
      <div className="d-flex">
        <img
          src={logo}
          alt="think wise logo  specially designed for website"
          className={styles.navigation_logo_margin_right}
          onClick={handleNavigation}
        />
        <ul className="mobile-display-none d-flex navigation-container">{renderedLinks}</ul>
      </div>
      <div className="d-flex align-center">
        {enable && (
          <NaviEnableBlock
            mr_nv_btn={styles.margin_right_button_enabled}
            mr_nv_nv={styles.margin_right_hamburger_enabled}
          />
        )}
        <Hamburger bgColor={bgColor} handleClick={clickHandler} />
      </div>
    </div>
  );
};

export default Navigation;
