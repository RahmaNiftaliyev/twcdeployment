// @ts-nocheck
import React from 'react'
import NavHeader from '../../toolbox/navheader/NavHeader'
import Navigation from '../../navigation/Navigation'
import Header from '../../header/Header'
import whiteThinkWiseLogo from './../common/assets/svg/navigation-white-logo.svg'
import styles from './career.module.css'
const CareerHeaderDash = () => {
  return (
    <div className={`${styles.background_image}`}>
      <NavHeader
        textColor={'nav-header-text-white'}
        borderBgColor={'nav-header-border-white'}
      />
      <Navigation
        logo={whiteThinkWiseLogo}
        enable={false}
        textColor="text-white"
        bgColor="bg-white"
        isArticle={false}
      />
      <Header />
    </div>
  )
}

export default CareerHeaderDash
