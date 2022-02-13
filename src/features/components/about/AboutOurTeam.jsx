// @ts-nocheck
import React from 'react';
import AboutHeaderDash from './AboutHeaderDash';
import teamJpg from './assets/img/team.jpg';
import styles from './about.module.css';
import marketresearchLogo from './assets/img/about-us/market-research.png';
import businessPlanLogo from './assets/img/about-us/business-plan.png';
import capitalismusLogo from './assets/img/about-us/capitallismus.png';
import saleMarketingLogo from './assets/img/about-us/sales-marketing.png';
import RoundedButton from '../../toolbox/buttons/RoundedButton';
import sectionImage from './assets/img/team/section.png';
import blackArrow from '../../toolbox/buttons/svg/arrow-black.svg';
import teamMem1 from './assets/img/team/member-1.png';
import teamMem2 from './assets/img/team/member-2.png';
import teamMem3 from './assets/img/team/member-3.png';
import teamMem4 from './assets/img/team/team-mehemmed.png';
import teamMem5 from './assets/img/team/team-question.png';
import teamMem6 from './assets/img/team/team-aynure.jpg';
import {
    FaInstagramSquare,
    FaFacebookSquare,
    FaLinkedin,
} from 'react-icons/fa';
import Footer from './../../footer/Footer';
import Gallery from './../../toolbox/gallery/Gallery'



const AboutOurTeam = () => {


    const teamImageData = [teamMem1,teamMem2,teamMem3,teamMem4,teamMem5,teamMem6]




    return (
        <div>
            <AboutHeaderDash  img={teamJpg} textStructure={'Peşəkar komandamızla biznesinizin uğura gedən yolu'} textStructureData={'The way to success of your business with our professional team'} />

            <div
                className={`${styles.our_team} d-flex direction-column justify-center align-center`}
            >
                <p className={`${styles.our_team_sub_title}`}>
                    Professİonal komandamız
                </p>
                <h2>
                    Ən son layihədə iştirak <br /> edən komanda üzvlərimiz{' '}
                </h2>
                <div
                    className={`${styles.circle_options} d-flex justify-between`}
                >
                    <div
                        className={`${styles.circle} ${styles.activ_circle}`}
                    ></div>
                    <div className={`${styles.circle} `}></div>
                    <div className={`${styles.circle} `}></div>
                </div>
                </div>
                  <Gallery images={teamImageData} localClassData={`${styles.team_card}`} />
            <div
                className={`${styles.our_team} d-flex direction-column justify-center align-center`}
            >
            <div className={`${styles.container}`}>
                <section className={`${styles.topic_section} d-flex`}>
                    <div
                        className={`${styles.paragraph_section} ${styles.team_paragraph} d-flex direction-column justify-start `}
                    >
                        <span className={`${styles.sub_header}`}>
                            LOREM IPSUM
                        </span>
                        <span className={`${styles.topic_title}`}>
                            TWC-yə xoş gəlmisiniz
                        </span>
                        <p className={`${styles.team_desc}`}>
                            TWC ilk gündən etibarən fərqliliyi, dünyaya və
                            bir-birimizə müsbət təsirin vacibiliyini vurğulayan
                            dəyərlərlə fəaliyyətinə başlayıb. İşə qəbul və
                            inkişaf strategiyamızın məqsədi bütün müvafiq bilik
                            və təcrübələri olan ən yaxşı talantların cəlb
                            olunması ve saxlanmasını təmin etməkdir ki, biz hər
                            müştəriyə doğru təcrübəsi olan doğru komadanı təqdim
                            edə bilək. Konsultantlarmızın müsbət və davamlı
                            nəticələr əldə etmək imkanı üçün TWC-yə qoşulurlar.
                        </p>
                        <button className={`${styles.more_information_button}`}>
                            Ətraflı
                            <img src={blackArrow} alt="" />
                        </button>
                    </div>

                    <div className={`${styles.image_section} `}>
                        <img
                            className={`${styles.topic_image}`}
                            src={sectionImage}
                            alt=""
                        />
                    </div>
                </section>
            </div>
            </div>

            <section
                className={`${styles.services_header} d-flex direction-column justify-center align-center`}
            >
                <span className={`${styles.service_sub_title}`}>
                    ProfESSİONAL KOMANDAMIZLA
                </span>
                <span className={`${styles.service_title}`}>
                    Konsaltinq Servislərimiz
                </span>
                <div
                    className={`${styles.circle_options} d-flex justify-between`}
                >
                    <div
                        className={`${styles.circle} ${styles.activ_circle}`}
                    ></div>
                    <div className={`${styles.circle} `}></div>
                    <div className={`${styles.circle} `}></div>
                </div>
                <div
                    className={`${styles.service_logo_group} d-flex justify-between`}
                >
                    <div
                        className={`${styles.service_logo_box} d-flex direction-column align-center justify-center `}
                    >
                        <img
                            src={marketresearchLogo}
                            alt=""
                            className={`${styles.service_logo}`}
                        />
                        <span className={`${styles.service_logo_sub_title}`}>
                            Bazar Araşdırması
                        </span>
                        <RoundedButton top="10px" color="#17171766" />
                    </div>
                    <div
                        className={`${styles.service_logo_box} d-flex direction-column align-center justify-center `}
                    >
                        <img
                            src={businessPlanLogo}
                            alt=""
                            className={`${styles.service_logo}`}
                        />
                        <span className={`${styles.service_logo_sub_title}`}>
                            Biznes Plan və TİƏ{' '}
                        </span>
                        <RoundedButton top="10px" color="#17171766" />
                    </div>
                    <div
                        className={`${styles.service_logo_box} d-flex direction-column align-center justify-center `}
                    >
                        <img
                            src={capitalismusLogo}
                            alt=""
                            className={`${styles.service_logo}`}
                        />
                        <span className={`${styles.service_logo_sub_title}`}>
                            Kapitallaşma
                        </span>
                        <RoundedButton top="10px" color="#17171766" />
                    </div>
                    <div
                        className={`${styles.service_logo_box} d-flex direction-column align-center justify-center `}
                    >
                        <img
                            src={saleMarketingLogo}
                            alt=""
                            className={`${styles.service_logo}`}
                        />
                        <span className={`${styles.service_logo_sub_title}`}>
                            Satış və Marketinq
                        </span>
                        <RoundedButton top="10px" color="#17171766" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AboutOurTeam;
