// @ts-nocheck
import React, { useState } from 'react'
import styles from './hamburger.module.css'
import { useSelector } from 'react-redux'
import { selectAllLinks } from './../../navigation/navigationSlice'
import { selectFooterLinkById } from './../../footer/footerSlice'
import icon from './assets/img/menu-x-icon.svg'
import sliderTwc from './../../components/common/assets/svg/navigation-slider.svg'
import RoundedButton from './../buttons/RoundedButton'
import { Link } from 'react-router-dom';

const Slider = ({ classData, handleSliderClick, conditionView }) => {
  const contactData = useSelector((state) => selectFooterLinkById(state, 'id4'))
  const allLinks = useSelector(selectAllLinks) ; 




  const renderedLinks = allLinks.map(link => {
    return (
      <li  className="mb-list-item relative"  key={link.id}>
          <Link className='mb-link-none' to={`${link.link}`}>{link.name}</Link>
        {
          link.hasSubmenu && 


           <ul className='mb-none animate__animated animate__fadeInLeft'>
            {
              link.subMenus.map(item => {
                return (
                 <Link className='mb-link-none' to={`${item.link}`}>{<li className='animate__animated animate__zoomInLeft animate__slower'>{item.name}</li>}</Link>
                )
              })
            }
          </ul>
        }
        </li>
    )
  })


  return (
    <div
      className={`slider slider-mb  ${conditionView ? conditionView : classData}`}
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
          top: '150px',
        }}
      />

      <ul className="text-white mt-mb-2 display_none display-mb-flex flex-mb-column">
        {
          renderedLinks
        }
      </ul>

      <p className={`mobile-display-none text-upper text-white ${styles.slider_paragraph}`}>
        BİZNESİNİZİ TWC İLƏ YÜKSƏLDİN
      </p>
      <h2 className={`mobile-display-none ${styles.header_text}`}>Think Wise Consulting</h2>
      <p className={`mobile-display-none ${styles.twc_difference}`}>
        Peşəkar komandamızla TWC sizə uğurlu biznesinizi qurmağa <br /> və
        inkişaf etdirməyə imkan verir.
      </p>

        <div className='mb-slide-button'>
           <Link to="/about"><RoundedButton /></Link>
        </div>

      <div
        className="absolute"
        style={{
          bottom: '75px',
        }}
      >
        <h2 className={`${styles.list_item_slider_header}`}>
          {contactData.header}
        </h2>
        <ul className='mb-slider-footer-text'>
          {contactData.headerItems.map((item, index) => {
            return (
              <li className={`${styles.list_item_slider}`} key={index}>
                <a
                  href={
                    index === 0
                      ? 'mailto:info@thinkwise.az'
                      : index === 1
                      ? 'tel:+994 50 447 10 90'
                      : 'tel:+994 12 488 68 19'
                  }
                  className="text-decoration-none text-white"
                >
                  {item}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Slider
