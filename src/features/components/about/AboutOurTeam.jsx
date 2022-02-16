// @ts-nocheck
import React from 'react';
import AboutHeaderDash from './AboutHeaderDash';
import Footer from './../../footer/Footer';
import Gallery from './../../toolbox/gallery/Gallery'
import GalleryServices from './../../toolbox/gallery/GalleryServices'
import { useSelector } from 'react-redux';
import { selectAllMembers } from './aboutSlice'
import {selectAllServices} from './../services/servicesSlice'
import styles from './about.module.css';
// !----------------------------------------------------------
import teamJpg from './assets/img/team.jpg';
import sectionImage from './assets/img/team/section.png';
import blackArrow from '../../toolbox/buttons/svg/arrow-black.svg';





const AboutOurTeam = () => {



    const allServices = useSelector(selectAllServices);
    const allMembers = useSelector(selectAllMembers)


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
                  {/* <Gallery images={allMembers} localClassData={`${styles.team_card}`} /> */}
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
                   <GalleryServices
                    data={allServices} 
                    boxContainerClass={`${styles.service_logo_group} d-flex  justify-between`}
                    boxClass={`${styles.service_logo_box} d-flex direction-column align-center justify-center `} 
                    imgClass={`${styles.service_logo}`}
                    spanClass={`${styles.service_logo_sub_title}`}
                />
            </section>
            <Footer />
        </div>
    );
};

export default AboutOurTeam;
