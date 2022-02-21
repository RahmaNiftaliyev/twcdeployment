// @ts-nocheck
import React from 'react';
import NavHeader from '../../toolbox/navheader/NavHeader';
import Navigation from '../../navigation/Navigation';
import Header from './../../header/Header';
import styles from './contact.module.css';
// !----------------------------------------------------------
import whiteThinkWiseLogo from './../common/assets/svg/navigation-white-logo.svg';
const ContactHeaderDash = () => {
  return (
    <div className={`${styles.background_image}`}>
      <NavHeader textColor={'nav-header-text-white'} borderBgColor={'nav-header-border-white'} />
      <Navigation logo={whiteThinkWiseLogo} enable={true} textColor="text-white" bgColor="bg-white" isArticle={false} />
      <Header
        textColor={'text-white'}
        textData={'Siz də peşəkar komandamızla əlaqə saxlayın'}
        newData={'You can also contact our professional team'}
      />
    </div>
  );
};

export default ContactHeaderDash;
