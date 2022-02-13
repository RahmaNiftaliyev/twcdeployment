// @ts-nocheck
import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import svgButtonView from './svg/button.svg'
import styles from './button.module.css'
const BackToTop = ({showMe}) => {




  return (
    <a href="#top" className={`${styles.back_to_top} ${!showMe && 'visible_hidden'}`}>
      <img src={svgButtonView} alt='back to top button svg viewer' />
    </a>
  )
}

export default BackToTop