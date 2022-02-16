// @ts-nocheck
import React from 'react';
import IndustryHeaderDash from './IndustryHeaderDash';
import RoundedButton from '../../toolbox/buttons/RoundedButton';
import Footer from './../../footer/Footer';
import { Link } from 'react-router-dom';
import styles from './industry.module.css';
// !----------------------------------------------------------
import headerImagePng from './assets/img/retail-header.png';
import sectionImagePng from './assets/img/retail-section.png';
import groupItemImagePng1 from './assets/img/retail-group-item-1.png';
import groupItemImagePng2 from './assets/img/retail-group-item-2.png';
import groupItemImagePng3 from './assets/img/retail-group-item-3.png';
import footerImage from './assets/img/retail-footer.png';


const IndustryRetail = () => {
    return (
        <div>
            <IndustryHeaderDash headerText={'SƏNAYE/RETAIL'} isHeader={true} />
            <div className={`${styles.container}`}>
                <section className={`${styles.header_image_container} d-flex `}>
                    <img src={headerImagePng} alt="" />
                </section>
                <section className={`d-flex direction-column`}>
                    <span className={`${styles.header_subtitle}`}>Sənaye</span>
                    <span className={`${styles.header_title}`}>Retail</span>
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
                    <p className={`${styles.services_title}`}>
                        Retail konsaltinq xidmətlərimiz
                    </p>
                    <section className={`${styles.service_image_group} d-flex`}>
                        <div className={`${styles.service_image_container}`}>
                            <img
                                className={`${styles.service_image}`}
                                src={groupItemImagePng1}
                                alt=""
                            />
                            <p className={`${styles.service_image_subtitle}`}>
                                Alkoqol və içki məhsulları
                            </p>
                        </div>
                        <div className={`${styles.service_image_container}`}>
                            <img
                                className={`${styles.service_image}`}
                                src={groupItemImagePng2}
                                alt=""
                            />
                            <p className={`${styles.service_image_subtitle}`}>
                                İstehlak məhsulları
                            </p>
                        </div>
                        <div className={`${styles.service_image_container}`}>
                            <img
                                className={`${styles.service_image}`}
                                src={groupItemImagePng3}
                                alt=""
                            />
                            <p className={`${styles.service_image_subtitle}`}>
                                Geyim, Dəb & Premium məhsullar
                            </p>
                        </div>
                    </section>
                </section>

                <section className={`${styles.section_image_container} d-flex`}>
                    <img src={sectionImagePng} alt="" />
                </section>
                <section className={`${styles.paragraph_section}`}>
                    <p>
                        Retailer-lərin endirimləri müştəri loyallığı yaradaraq
                        satış etmələri bu industriyada uğurlu olmaq üçün kifayət
                        deyil. Retailer-lərin ehtiyacı olan məhsulları ideya
                        mərhələsindən rəfə sürətli şəkildə yerləşdirmək, müştəri
                        marağının konsentrasiyasını sürətləndirmək və trendlərə
                        adaptasiya olmaqdan əlavə yenilərini
                        müəyyənləşdirməkdir. TWC professionalları öz
                        bacarıqlarından və təcrübələrindən istifadə edərək sizin
                        qarşılaşdığınız baryerləri müəyyənləşdirib optimal
                        strategiya təklif edir.
                    </p>
                </section>
            </div>

            <footer className={`${styles.retail_footer}`}>
                <div className={`${styles.retail_footer_container} d-flex`}>
                    <img
                        className={`${styles.retail_footer_image}`}
                        src={footerImage}
                        alt=""
                    />
                    <div className={`d-flex direction-column`}>
                        <p className={`${styles.retail_footer_title}`}>
                            Böyüyən qlobal industriya satışları istehlak dalğası
                            üzərində deyil
                        </p>
                        <p className={`${styles.retail_footer_desc}`}>
                            Alkoqollu içkilər senayesinin yeni dövründə bir şey
                            dəqiqdir: premiumizasiya bazar mənzərəsini həmişəlik
                            dəyişəcək. Sürətli dəyişən istehlakçı davranışları
                            rəqabət balansına təsir göstərdiyi üçün zəif
                            oyunçular mövqelərini qorumaqda əziyyət çəkir.
                        </p>
                        <Link to="/ideas/alcohol">
                        <RoundedButton positioned="15px" color="#17171766" />
                        </Link>
                    </div>
                </div>
            </footer>
            <Footer />
        </div>
    );
};

export default IndustryRetail;
