// @ts-nocheck
import React from 'react'
import Navigation from '../../navigation/Navigation'
import NavHeader from '../../toolbox/navheader/NavHeader'
import Header from './../../header/Header'
import styles from './about.module.css'
import whiteThinkWiseLogo from './../common/assets/svg/navigation-white-logo.svg'
const AboutHeaderDash = ({ img }) => {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  return (
    <div style={backgroundStyle}>
      <NavHeader
        textColor={'nav-header-text-white'}
        borderBgColor={'nav-header-border-white'}
      />
      <Navigation
        logo={whiteThinkWiseLogo}
        enable={false}
        textColor="text-white"
        bgColor="bg-white"
      />
      <Header />
    </div>
  )
}

export default AboutHeaderDash
