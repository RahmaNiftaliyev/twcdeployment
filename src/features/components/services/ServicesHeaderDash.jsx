// @ts-nocheck
import React from 'react'
import NavHeader from '../../toolbox/navheader/NavHeader'
import Navigation from '../../navigation/Navigation'
import Header from '../../header/Header'
// !----------------------------------------------------------
import whiteThinkWiseLogo from './../common/assets/svg/navigation-white-logo.svg'
import blackThinkWiseLogo from './../common/assets/svg/navigation-black-logo.svg'
const ServicesHeaderDash = ({ img, isBlack, textStructure, textStructureData }) => {
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
        textColor={isBlack ? 'nav-header-text-dark' : 'nav-header-text-white'}
        borderBgColor={isBlack ? 'nav-header-border-dark' : 'nav-header-border-white'}
      />
      <Navigation
        logo={isBlack ? blackThinkWiseLogo : whiteThinkWiseLogo}
        enable={true}
        textColor={isBlack ? "text-dark" : "text-white"}
        bgColor={isBlack ? "bg-dark" : "bg-white"}
        isArticle={false}
      />
      <Header textColor={isBlack ? "text-dark" :"text-white"} textData={textStructure} newData={textStructureData} />
    </div>
  )
}

export default ServicesHeaderDash
