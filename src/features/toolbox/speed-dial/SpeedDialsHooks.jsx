// @ts-nocheck
import React, { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import { AiFillFileAdd } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';
import styles from './speed.module.css';

const SpeedDialsHooks = () => {
  const [view, setView] = useState('opacity-zero');

  const enableIcons = () => {
    setView('opacity-one');
  };

  const disableIcons = () => {
    setView('opacity-zero');
  };

  return (
    <div className={`${styles.speed_dials_container}`} onMouseLeave={disableIcons}>
      <AiFillFileAdd className={`${styles.media_icons_file} ${view}`} />
      <BsImages className={`${styles.media_icons_image} ${view}`} />
      <button onMouseEnter={enableIcons} className={`${styles.speed_dials}`}>
        <HiPlus className={`${styles.plus_icon}`} />
      </button>
    </div>
  );
};

export default SpeedDialsHooks;
