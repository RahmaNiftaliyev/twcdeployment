// @ts-nocheck
import React from 'react';
import ServicesHeaderDash from './ServicesHeaderDash';
import Footer from './../../footer/Footer';
import styles from './services.module.css';
// !----------------------------------------------------------
import headerImage from './assets/img/biznesplanvetie/header.png';
import sectionImage from './assets/img/biznesplanvetie/section.png';
import topicImage1 from './assets/img/biznesplanvetie/topic-1.png';
import topicImage2 from './assets/img/biznesplanvetie/topic-2.png';
import topicImage3 from './assets/img/biznesplanvetie/topic-3.png';
import topicImage4 from './assets/img/biznesplanvetie/topic-4.png';
import topicImage5 from './assets/img/biznesplanvetie/topic-5.png';
import topicImage6 from './assets/img/biznesplanvetie/topic-6.png';

const ServicesBusinessPlan = () => {
    return (
        <div>
            <ServicesHeaderDash
                img={headerImage}
                isBlack={false}
                textStructure={'Biznes plan və Texniki-iqtisadi əsaslandırmalar'}
                textStructureData={'Business plan, technical and economic justifications'}
            />

            <div className={`${styles.container}`}>
                <section className={`${styles.header_section} d-flex`}>
                    <div
                        className={`${styles.header_section_title_container} d-flex direction-column  align-end`}
                    >
                        <div className={` d-flex direction-column`}>
                            <span className={`${styles.sub_header}`}>
                                BİZNES PLAN VƏ TİƏ


                            </span>
                            <span className={`${styles.service_title}`}>
                                Biznesinizi bizimlə inkişaf etdirin
                            </span>
                        </div>
                    </div>
                    <div
                        className={`${styles.paragraph_section} d-flex align-center`}
                    >
                        <p>
                            Mövcud biznes ekosistemində şirkətin xarici
                            resurslar vasitəsilə maliyyələşdirilməsinə yüksək
                            tələbat yaranmışdır. Fəaliyyətlərini
                            maliyyələşdirmək və genişləndirmək üçün şirkətlər
                            maliyyə institutlarından kredit almaq və ya
                            investorlardan investisiya cəlb etmək üçün müəyyən
                            çətinliklərlə üzləşirlər. Bizim çoxsaylı uğurlu
                            əməkdaşlıqlardan formalaşmış biznes plan təcrübəmiz
                            şirkətlərə maliyyə vəsaitlərini rahat və səmərəli
                            şəkildə əldə etməyə kömək göstərəcəkdir.
                        </p>
                    </div>
                </section>

                <div className={`${styles.content_container}`}>
                    <section>
                        <img
                            className={`${styles.section_image}`}
                            src={sectionImage}
                            alt=""
                        />
                        <div className={`${styles.section_image_desc}`}>
                            <p>
                                Biznes plan təşkilatın vizyonunu ifadə edərək,
                                ona hansı vasitələr və zaman aralığında nail
                                olacağını təsvir edən vahid biznes sənədidir.
                                Biznes plan investorlar, partnyorlar, işçilər və
                                idarə heyətinə hədəfə doğru nəticələri ölçmək
                                üçün əsas istinad nöqtəsi hesab olunur. Bundan
                                əlavə, biznes plan azad iqtisadi zonalarda
                                rezidentura almaq, subsidiyalar əldə etmək və
                                digər bu kimi üstünlüklərdən yararlanmaq üçün
                                istifadə edilə bilər.
                            </p>
                            <br />
                            <p>
                                Maliyyə, marketinq və əməliyyat ekspertlərindən
                                ibarət peşəkar komandamız biznes planların
                                müxtəlif məqsədlər üçün və xüsusilə sizin biznes
                                ehtiyaclarına uyğun formatda tərtib olunmasında
                                sizə rəhbərlik edəcəkdir.
                            </p>
                        </div>
                    </section>

                    <section
                        className={`${styles.extra_services_section} d-flex direction-column align-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            BİZNES PLAN VƏ TİƏ


                        </span>
                        <span className={`${styles.service_details_title}`}>
                            Hazırladığımız biznes planlar özündə aşağıdakıları
                            ehtiva edir
                        </span>
                        <div className={`d-flex flex-wrap businesPlan-images`}>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage1}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Biznes modeli
                                </span>
                            </div>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage2}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Bazar həcmi
                                </span>
                            </div>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage3}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Marketinq planı
                                </span>
                            </div>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage4}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Maliyyə planı
                                </span>
                            </div>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage5}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Riskin qiymətləndirilməsi
                                </span>
                            </div>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage6}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Texniki plan
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServicesBusinessPlan;
