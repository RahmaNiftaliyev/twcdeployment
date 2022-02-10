import React from 'react';
import styles from './about.module.css';
import AboutHeaderDash from './AboutHeaderDash';
import partneersPng from './assets/img/partneer.png';
import abbLogo from './assets/img/partners/abb-logo.png';
import arsolLogo from './assets/img/partners/arsol-logo.png';
import unibankLogo from './assets/img/partners/unibank-logo.png';
import askLogo from './assets/img/partners/ask-logo.png';
import Footer from './../../footer/Footer';
const AboutPartneers = () => {
    return (
        <div>
            <AboutHeaderDash img={partneersPng} />
            <section
                className={`${styles.partners_container} d-flex align-center justify-center`}
            >
                <div
                    className={`${styles.partners_firm_img_box} d-flex align-center justify-center`}
                >
                    <img
                        className={`${styles.partners_firm_img}`}
                        src={abbLogo}
                        alt=""
                    />
                </div>
                <div
                    className={`${styles.partners_firm_img_box} d-flex align-center justify-center`}
                >
                    <img
                        className={`${styles.partners_firm_img}`}
                        src={arsolLogo}
                        alt=""
                    />
                </div>
                <div
                    className={`${styles.partners_firm_img_box} d-flex align-center justify-center`}
                >
                    <img
                        className={`${styles.partners_firm_img}`}
                        src={unibankLogo}
                        alt=""
                    />
                </div>
                <div
                    className={`${styles.partners_firm_img_box} d-flex align-center justify-center`}
                >
                    <img
                        className={`${styles.partners_firm_img}`}
                        src={askLogo}
                        alt=""
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AboutPartneers;
