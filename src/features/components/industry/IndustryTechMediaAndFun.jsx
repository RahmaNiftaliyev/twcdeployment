// @ts-nocheck
import React from 'react';
import IndustryHeaderDash from './IndustryHeaderDash';
import Footer from './../../footer/Footer';
import styles from './industry.module.css';
// !----------------------------------------------------------
import headerImagePng from './assets/img/tme-header.png';
import sectionImagePng from './assets/img/tme-section.png';
import groupItemImagePng1 from './assets/img/tme-group-item-1.png';
import groupItemImagePng2 from './assets/img/tme-group-item-2.png';
import groupItemImagePng3 from './assets/img/tme-group-item-3.png';


const IndustryTechMediaAndFun = () => {
    return (
        <div>
            <IndustryHeaderDash
                headerText={'SƏNAYE/TEXNOLOGİYA, MEDİA VƏ ƏYLƏNCƏ'}
                isHeader={true}
            />
            <div className={`${styles.container}`}>
                <section className={`${styles.header_image_container} d-flex `}>
                    <img src={headerImagePng} alt="" />
                </section>
                <section className={`d-flex direction-column`}>
                    <span className={`${styles.header_subtitle}`}>Sənaye</span>
                    <span className={`${styles.header_title}`}>
                        Texnologiya, media və əyləncə
                    </span>
                </section>
                <section className={`${styles.paragraph_section}`}>
                    <p>
                        Son dərəcə rəqabətli və sürətli inkişaf edən Retail
                        industriyasının gələcəyə doğru hərəkəti pandemiya
                        səbəbindən sürətləndi. Buna görə də, dijital mövcudluq
                        artıq trendləri tutmaq deyil, uzun müddetdə sağ qala
                        bilməkdir.
                    </p>
                </section>

                <section
                    className={`${styles.services_section} d-flex direction-column align-center`}
                >
                    <p className={`${styles.header_subtitle}`}>Sənaye</p>
                    <p className={`${styles.tmf_services_title}`}>
                        Texnologiya, media və əyləncə konsaltinq xidmətlərimiz
                    </p>
                    <section className={`${styles.service_image_group} d-flex`}>
                        <div className={`${styles.service_image_container}`}>
                            <img
                                className={`${styles.service_image}`}
                                src={groupItemImagePng1}
                                alt=""
                            />
                            <p className={`${styles.service_image_subtitle}`}>
                                İstehlakçı texnologiyası və media
                            </p>
                        </div>
                        <div className={`${styles.service_image_container}`}>
                            <img
                                className={`${styles.service_image}`}
                                src={groupItemImagePng2}
                                alt=""
                            />
                            <p className={`${styles.service_image_subtitle}`}>
                                Texnologiya infrastrukturu
                            </p>
                        </div>
                        <div className={`${styles.service_image_container}`}>
                            <img
                                className={`${styles.service_image}`}
                                src={groupItemImagePng3}
                                alt=""
                            />
                            <p className={`${styles.service_image_subtitle}`}>
                                Startup & Venture Capital
                            </p>
                        </div>
                    </section>
                </section>

                <section className={`${styles.section_image_container} d-flex`}>
                    <img src={sectionImagePng} alt="" />
                </section>
                <section className={`${styles.paragraph_section}`}>
                    <p>
                        TWC konsultantları regional ekspertlər və ideya
                        liderləri ilə şirkətlərin fərqli mərhələlərdəki
                        çətinliklərinə qarşı hərtərəfli strateji yanaşma təklif
                        edir. Birlikdə biz möhkəm, pozitiv və davamlı dəyişiklik
                        üçün təməl yaradırıq.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default IndustryTechMediaAndFun;
