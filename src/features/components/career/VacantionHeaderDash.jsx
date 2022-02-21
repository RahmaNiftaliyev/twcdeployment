// @ts-nocheck
import React from 'react';
import NavHeader from './../../toolbox/navheader/NavHeader';
import Navigation from './../../navigation/Navigation';
// !----------------------------------------------------------
import thinkwiceBlackLogo from './../common/assets/svg/navigation-black-logo.svg';
const VacantionHeaderDash = () => {
  return (
    <div>
      <NavHeader textColor="nav-header-text-dark" borderBgColor="nav-header-border-dark" />
      <Navigation
        logo={thinkwiceBlackLogo}
        enable={false}
        textColor="text-dark"
        bgColor="bg-dark"
        isArticle={false}
        isHeader={false}
        isPrivacy={false}
      />
    </div>
  );
};

export default VacantionHeaderDash;
