// @ts-nocheck
import React from 'react'
import NavHeader from '../../toolbox/navheader/NavHeader'
import Navigation from '../../navigation/Navigation'
import Header from '../../header/Header'
import whiteThinkWiseLogo from './../common/assets/svg/navigation-white-logo.svg'
const ServicesHeaderDash = ({ img }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <NavHeader
        textColor={'nav-header-text-white'}
        borderBgColor={'nav-header-border-white'}
      />
      <Navigation
        logo={whiteThinkWiseLogo}
        enable={true}
        textColor="text-white"
        bgColor="bg-white"
        isArticle={false}
      />
      <Header />
    </div>
  )
}

export default ServicesHeaderDash
