// @ts-nocheck
import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import styles from './button.module.css'
const BackToTop = () => {




  return (
    <a href="#top" className={`${styles.back_to_top}`}>
        <AiOutlineArrowUp />
    </a>
  )
}

export default BackToTop