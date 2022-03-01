// @ts-nocheck
import React from 'react';
import AboutHeaderDash from './AboutHeaderDash';
import Footer from './../../footer/Footer';
import styles from './about.module.css';
// !----------------------------------------------------------
import partneersPng from './assets/img/partneer.png';
import abbLogo from './assets/img/partners/abb-logo.png';
import arsolLogo from './assets/img/partners/arsol-logo.png';
import unibankLogo from './assets/img/partners/unibank-logo.png';
import askLogo from './assets/img/partners/ask-logo.png';

const AboutPartneers = () => {
  return (
    <div>
      <AboutHeaderDash
        isBlack={false}
        img={partneersPng}
        textStructure={'Partnyorlarımız'}
        textStructureData={'Partners'}
      />
      <section className={`${styles.partners_container} d-flex align-center justify-center flex-wrap`}>
        <div className={`${styles.partners_firm_img_box} d-flex align-center justify-center`}>
          <img className={`${styles.partners_firm_img}`} src={abbLogo} alt="" />
        </div>
        <div className={`${styles.partners_firm_img_box} d-flex align-center justify-center`}>
          <img className={`${styles.partners_firm_img}`} src={arsolLogo} alt="" />
        </div>
        <div className={`${styles.partners_firm_img_box} d-flex align-center justify-center`}>
          <img className={`${styles.partners_firm_img}`} src={unibankLogo} alt="" />
        </div>
        <div className={`${styles.partners_firm_img_box} d-flex align-center justify-center`}>
          <img className={`${styles.partners_firm_img}`} src={askLogo} alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPartneers;
