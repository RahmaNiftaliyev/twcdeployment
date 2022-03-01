// @ts-nocheck
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllMembers } from './../../components/about/aboutSlice';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './gallery.module.css';

const Gallery = () => {
  const allMembers = useSelector(selectAllMembers);

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
    1440: { items: 1 }
  };


  const mainSlide = allMembers.map((oneOfThem) => {
    return (
      <div className={`${styles.main_container_team_top}`}>
        <div className={`${styles.img_item} d-flex`}>
          <div className={`${styles.img_item_content}`}>
            <div className={`${styles.position_protecter}`}>
              <h2>{oneOfThem.name}</h2>
              <h3>{oneOfThem.position}</h3>
              <p>{oneOfThem.education}</p>
            </div>
          </div>
          <div className={`${styles.img_item_img}`}>
            <img src={oneOfThem.img} alt={`TWC professional team member ${oneOfThem.name}`} />
          </div>
        </div>
      </div>
    );
  });

  const thumbItems = allMembers.map((item) => {
    return (
      <div className={`thumb ${styles.botttom_image_rounded_container} ${styles.mb_styles_ul}`}>
        <div className={`${styles.rounded_image_container}`}>
          <img src={item.img} width="100" alt={`TWC professional team member ${item.name}`} />
        </div>
        <h3 className={`${styles.thumb_item_name}`}>{item.name}</h3>
        <p className={`${styles.thumb_item_position}`}>{item.position}</p>
      </div>
    );
  });

  return (
    <div className={`${styles.main_container_team} `}>
      <div className={`${styles.our_team__top}`}>
        <p>Peşəkar komandamız</p>
        <h2>
          Ən son layihədə iştirak <br /> edən komanda üzvlərimiz
        </h2>
      </div>
      <AliceCarousel
        animationDuration={4800}
        disableDotsControls={true}
        disableButtonsControls={true}
        autoPlay={true}
        infinite={true}
        items={mainSlide}
        mouseTracking={true}
        touchTracking={true}
        responsive={responsive}
      />

      <div className={`${styles.main_container_team_bottom} team-responsive`}>
        <div className="thumbs" style={{ width: '100%' }}>
          <AliceCarousel
            autoWidth={true}
            disableDotsControls={true}
            disableButtonsControls={true}
            items={thumbItems}
            mouseTracking={true}
            touchTracking={true}
            responsive={responsive} 
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
