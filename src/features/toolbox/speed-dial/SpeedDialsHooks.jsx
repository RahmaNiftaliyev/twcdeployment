// @ts-nocheck
import React from 'react'
import { HiPlus } from 'react-icons/hi'
import { AiFillFileAdd } from 'react-icons/ai'
import { BsImages } from 'react-icons/bs'
import styles from './speed.module.css'

const SpeedDialsHooks = () => {
  return (
    <div className={`${styles.speed_dials_container}`}>
      <AiFillFileAdd className={`${styles.media_icons_file}`}/>
      <BsImages className={`${styles.media_icons_image}`}/>
      <button className={`${styles.speed_dials}`}>
        <HiPlus className={`${styles.plus_icon}`} />
    </button>
    </div>
  
  )
}

export default SpeedDialsHooks