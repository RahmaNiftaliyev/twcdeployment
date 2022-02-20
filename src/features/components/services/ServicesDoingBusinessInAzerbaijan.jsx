// @ts-nocheck
import React from 'react';
import ServicesHeaderDash from './ServicesHeaderDash';
import Footer from './../../footer/Footer';
import styles from './services.module.css';
// !----------------------------------------------------------
import blackArrow from '../../toolbox/buttons/svg/arrow-black.svg';
import doingImg from './assets/img/doingbusinessazerbaijan.jpg';
import sectionImage from './assets/img/doingbusinessazerbaijan/section.png';
import topicImage1 from './assets/img/doingbusinessazerbaijan/topic-1.png';
import topicImage2 from './assets/img/doingbusinessazerbaijan/topic-2.png';
import topicImage3 from './assets/img/doingbusinessazerbaijan/topic-3.png';


const ServicesDoingBusinessInAzerbaijan = () => {
    return (
        <div>
            <ServicesHeaderDash img={doingImg} isBlack={false} textStructure={'Doing Business in Azerbaijan'} textStructureData={'Doing Business in Azerbaijan'} />
            <div
                className={`${styles.contact_section} d-flex direction-column align-center justify-center`}
            >
                <span className={`${styles.contact_title}`}>Əlaqə</span>
                <button className={`${styles.contact_button}`}>
                    Ətraflı &nbsp;
                    <img src={blackArrow} alt="" />
                </button>
            </div>
            <div className={`${styles.container}`}>
                <section
                    className={`${styles.topic_section} ${styles.header_section_doing_business} d-flex`}
                >
                    <div className={`${styles.image_section}`}>
                        <img
                            className={`${styles.topic_image}`}
                            src={sectionImage}
                            alt=""
                        />
                    </div>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <p>
                            Azərbaycan 1991-ci ildə müstəqilliyini bərpa etmiş
                            suveren bir ölkədir. Müstəqillik əldə etdikdən sonra
                            Azərbaycan iqtisadiyyatı müxtəlif sənaye sahələrinə,
                            xüsusilə neft-qaz sektoruna birbaşa xarici
                            investisiyalar cəlb etmişdir. Dinamik iqtisadi
                            inkişafı xətti ilə davam edən Azərbaycan, turizm,
                            tikinti və s. kimi sənaye sahələrində birbaşa xarici
                            investisiyalar almağa nail olmuşdur. Bankçılıq,
                            infrastruktur və hüquq sistemindəki
                            təkmilləşdirmələr ölkəyə dünyanın hər yerindən yeni
                            bizneslərin axın etməsi və daha yaxşı biznes
                            ekosisteminin yaradılmasına səbəb olmuşdur. Bu
                            baxımdan, Doing Business in Azerbaijan xarici
                            investorlar üçün bir fürsət kimi dəyərləndirilə
                            bilər. Bunun səbəbi işğaldan azad olunmuş Dağlıq
                            Qarabağ ərazisində azad iqtisadi zonaların sayının
                            artması, tikinti və infrastrukturun inkişafı, vergi
                            və hüquq sisteminin təkmilləşdirilməsidir.
                            Şirkətimiz Azərbaycanda biznes qurmaq və xarici
                            investorlara qərarlarında köməklik göstərmək
                            baxımından müxtəlif xidmətlər təklif edir.
                        </p>
                    </div>
                </section>
                <div className={`${styles.content_container}`}>
                    <section
                        className={`${styles.extra_services_section} d-flex direction-column align-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            Doing Business in Azerbaijan
                        </span>
                        <span className={`${styles.service_details_title}`}>
                            Bu xidmətlərə daxildir
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
                        <section
                            className={` ${styles.image_group_section} d-flex justify-between`}
                        >
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage1}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Azərbaycanda xarici sahibkarlıq
                                    subyektlərinin qeydiyyatı
                                </span>
                            </div>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage2}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Xarici investorların biznes fəaliyyətinin
                                    hüquqi forması
                                </span>
                            </div>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage3}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Maliyyələşdirmə variantları ilə bağlı
                                    məsləhət
                                </span>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServicesDoingBusinessInAzerbaijan;
