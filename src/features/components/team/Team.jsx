import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllMembers } from '../about/aboutSlice';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './team.module.css';

const thumbItems = (members, handleThumbClick) => {
  return members.map((item, i) => (
    <div
      className="thumb"
      onClick={() => {
        handleThumbClick(i);
      }}
    >
      {item}
    </div>
  ));
};

const Team = () => {
  const defaultIntervalTime = 2400;
  const allMembers = useSelector(selectAllMembers);
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [autoPlayInterval, setAutoPlayInterval] = useState(defaultIntervalTime);

  const syncMainBeforeChange = (e) => {
    setAutoPlayInterval(defaultIntervalTime)
    if (e.item === allMembers.length - 1) {
      setThumbIndex(0);
      setThumbAnimation(true);
      setMainIndex(0);
    } else {
      setMainIndex(e.item + 1);
      setThumbIndex(e.item + 1);
    }
  };

  const handleThumbClick = (itemIndex) => {
    setThumbIndex(itemIndex);
    setThumbAnimation(true);
    setMainIndex(itemIndex);
    setAutoPlayInterval(5000);
  }

  const members = allMembers.map((member) => (
    <div key={member.id} className={`${styles.team_member_section} d-flex justify-around `}>
      <div className={`${styles.team_member_about} d-flex direction-column align-center justify-center`}>
        <h2 className={`${styles.team_member_name}`}>{member.name}</h2>
        <p className={`${styles.team_member_job_title}`}>{member.position}</p>
        <p className={`${styles.team_member_education}`}>{member.education}</p>
      </div>
      <div className={`${styles.team_member_img_container} d-flex direction-column align-center justify-center`}>
        <img className={`${styles.team_member_img}`} src={member.img} alt="image not available" />
      </div>
    </div>
  ));

  const thumbMembers = allMembers.map((member) => (
    <div key={member.id} className={`${styles.team_member_thumb_section} d-flex direction-column align-center`}>
      <div className={`${styles.team_member_thumb_img_container}`}>
        <img src={member.img} alt="image not available" className={`${styles.team_member_thumb_img}`} />
      </div>
      <div className={`${styles.team_member_thumb_about} d-flex direction-column align-center`}>
        <h2 className={`${styles.team_member_thumb_name}`}>{member.name}</h2>
        <p className={`${styles.team_member_thumb_job_title}`}>{member.position}</p>
      </div>
    </div>
  ));
  const [thumbs] = useState(thumbItems(thumbMembers, handleThumbClick));
  return (
    <div>
      <div class={`${styles.our_team_top}`}>
        <p>Peşəkar komandamız</p>
        <h2>
          Ən son layihədə iştirak <br /> edən komanda üzvlərimiz
        </h2>
      </div>
      <div className={`${styles.carousel_container} team_carousel`}>
        <AliceCarousel
          activeIndex={mainIndex}
          mouseTracking
          disableDotsControls
          disableButtonsControls
          autoPlay
          infinite={true}
          autoPlayStrategy={'none'}
          items={members}
          autoPlayInterval={autoPlayInterval}
          animationDuration={2400}
          mouseTracking={!thumbAnimation}
          onSlideChange={syncMainBeforeChange}
          touchTracking={!thumbAnimation}
        />
        <div className={`${styles.thumbs_container} thumbs`}>
          <div className={`${styles.thumbs_blured_background}`}></div>
          <AliceCarousel
            activeIndex={thumbIndex}
            disableDotsControls
            disableButtonsControls
            animationDuration={2400}
            items={thumbs}
            mouseTracking={false}
            touchTracking={!mainAnimation}
            autoWidth
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
