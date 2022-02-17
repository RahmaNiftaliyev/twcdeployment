// @ts-nocheck
import React from 'react'
import Navigation from '../../navigation/Navigation'
import NavHeader from '../../toolbox/navheader/NavHeader'
import Header from './../../header/Header'
// !----------------------------------------------------------
import whiteThinkWiseLogo from './../common/assets/svg/navigation-white-logo.svg'
import blackThinkwiseLogo from './../common/assets/svg/navigation-black-logo.svg'


const AboutHeaderDash = ({ isBlack,img,textStructure,textStructureData }) => {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  return (
    <div style={backgroundStyle}>
      <NavHeader
        textColor={isBlack ? 'nav-header-text-dark' : 'nav-header-text-white'}
        borderBgColor={isBlack ? 'nav-header-border-dark' : 'nav-header-border-white'}
      />
      <Navigation
        logo={isBlack ? blackThinkwiseLogo : whiteThinkWiseLogo}
        enable={true}
        textColor={isBlack ? "text-dark" :"text-white"}
        bgColor={isBlack ? "bg-dark" : "bg-white"}
      />
      <Header textColor={isBlack ? "text-dark" :"text-white"} textData={textStructure} newData={textStructureData} />
    </div>
  )
}

export default AboutHeaderDash
