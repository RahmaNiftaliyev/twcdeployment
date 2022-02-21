// @ts-nocheck
import React from 'react';
import NavHeader from '../../toolbox/navheader/NavHeader';
import Navigation from '../../navigation/Navigation';
import Header from './../../header/Header';
// !----------------------------------------------------------
import styles from './home.module.css';
import whiteThinkWiseLogo from './../common/assets/svg/navigation-white-logo.svg';

const HomeHeaderDash = () => {
  return (
    <div className={`${styles.background_image}`}>
      <NavHeader textColor={'nav-header-text-white'} borderBgColor={'nav-header-border-white'} />
      <Navigation logo={whiteThinkWiseLogo} enable={true} textColor="text-white" bgColor="bg-white" isArticle={false} />
      <Header
        textColor={'text-white'}
        textData={'Azərbaycanda ilk yerli saf menecment konsaltinq servisləri'}
        newData={'The first pure local management consulting services in Azerbaijan'}
      />
    </div>
  );
};

export default HomeHeaderDash;
