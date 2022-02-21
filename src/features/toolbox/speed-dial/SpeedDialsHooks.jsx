// @ts-nocheck
import React from 'react'
import { HiPlus } from 'react-icons/hi'
import styles from './speed.module.css'

const SpeedDialsHooks = () => {
  return (
    <button className={`${styles.speed_dials}`}>
        <HiPlus className={`${styles.plus_icon}`} />
    </button>
  )
}

export default SpeedDialsHooks