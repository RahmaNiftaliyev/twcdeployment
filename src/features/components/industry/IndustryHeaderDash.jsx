/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from 'react'
import Navigation from '../../navigation/Navigation'
import IndustryHeader from './IndustryHeader'
import styles from './industry.module.css'
// !----------------------------------------------------------
import blackThinkWiseLogo from './../common/assets/svg/navigation-black-logo.svg'

const IndustryHeaderDash = ({ headerText, isHeader }) => {
  return (
    <div>
      <Navigation
        logo={blackThinkWiseLogo}
        enable={false}
        textColor="text-dark"
        bgColor="bg-dark"
        isHeader={isHeader}
      />
      <IndustryHeader text={headerText} />
      
    </div>
  )
}

export default IndustryHeaderDash
