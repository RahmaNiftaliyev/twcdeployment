// @ts-nocheck
import React, { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import { AiFillFileAdd } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';

import styles from './speed.module.css';

const SpeedDialsHooks = ({ selectFile }) => {
  const [view, setView] = useState('opacity-zero');

  const enableIcons = () => {
    setView('opacity-one');
  };

  const disableIcons = () => {
    setView('opacity-zero');
  };

  return (
    <div className={`${styles.speed_dials_container}`} onMouseLeave={disableIcons}>
      <label htmlFor="file">
        <AiFillFileAdd className={`${styles.media_icons_file} ${view}`} />
      </label>
      <input type="file" name="file" id="file" accept=".docx,.pdf" className="display_none" />

      <label htmlFor="image">
        <BsImages
          className={`${styles.media_icons_image} ${view}`}
          onClick={() => selectFile(({ source, name, size, file }) => {})}
        />
      </label>
      <input type="file" name="image" id="image" accept=".jpg,.png" className="display_none" />

      <button onMouseEnter={enableIcons} className={`${styles.speed_dials}`}>
        <HiPlus className={`${styles.plus_icon}`} />
      </button>
    </div>
  );
};

export default SpeedDialsHooks;
