// @ts-nocheck
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllMembers } from './../../components/about/aboutSlice';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './gallery.module.css';

const Gallery = () => {
  const allMembers = useSelector(selectAllMembers);

  const thumbItems = (allMembers, [setThumbIndex, setThumbAnimation]) => {
    return allMembers.map((item, i) => (
      <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
        <div className={`${styles.rounded_image_container}`}>
          <img src={item.img} width="100" />
        </div>
        <h3 className={`${styles.thumb_item_name}`}>{item.name}</h3>
        <p className={`${styles.thumb_item_position}`}>{item.position}</p>
      </div>
    ));
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

  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(thumbItems(allMembers, [setThumbIndex, setThumbAnimation]));

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };
  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncMainBeforeChange = (e) => {
    setMainAnimation(true);
  };

  const syncMainAfterChange = (e) => {
    setMainAnimation(false);

    if (e.type === 'action') {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

  const syncThumbs = (e) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);

    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };

  return (
    <div className={`${styles.main_container_team}`}>
      <div class={`${styles.our_team__top}`}>
        <p>Peşəkar komandamız</p>
        <h2>
          Ən son layihədə iştirak <br /> edən komanda üzvlərimiz
        </h2>
      </div>
      <AliceCarousel
        activeIndex={mainIndex}
        animationDuration={2400}
        disableDotsControls={true}
        disableButtonsControls={true}
        autoPlay={true}
        infinite={true}
        items={mainSlide}
        mouseTracking={true}
        onSlideChange={syncMainBeforeChange}
        onSlideChanged={syncMainAfterChange}
        touchTracking={true}
      />

      <div className={`${styles.main_container_team_bottom}`}>
        <div className="thumbs" style={{ width: '100%' }}>
          <AliceCarousel
            activeIndex={thumbIndex}
            autoWidth={true}
            disableDotsControls={true}
            disableButtonsControls={true}
            items={thumbs}
            mouseTracking={true}
            onSlideChanged={syncThumbs}
            touchTracking={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
