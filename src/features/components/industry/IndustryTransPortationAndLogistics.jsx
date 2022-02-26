// @ts-nocheck
import React from 'react';
import IndustryHeaderDash from './IndustryHeaderDash';
import Footer from './../../footer/Footer';
import styles from './industry.module.css';
// !----------------------------------------------------------
import headerImagePng from './assets/img/transportasiyalogistika-header.png';
import sectionImagePng from './assets/img/transportasiyalogistika-section.png';
import groupItemImagePng1 from './assets/img/transportasiyalogistika-group-item-1.png';
import groupItemImagePng2 from './assets/img/transportasiyalogistika-group-item-2.png';


const IndustryTransPortationAndLogistics = () => {
    return (
        <div>
            {' '}
            <IndustryHeaderDash
                headerText={'SƏNAYE/TRANSPORTASİYA VƏ LOGİSTİKA'}
                isHeader={true}
            />
            <div className={`${styles.container}`}>
                <section className={`${styles.header_image_container} d-flex `}>
                    <img src={headerImagePng} alt="industry transportation and logistics header content" />
                </section>
                <section className={`d-flex direction-column`}>
                    <span className={`${styles.header_subtitle}`}>Sənaye</span>
                    <span className={`${styles.header_title}`}>Transportasiya və logistika</span>
                </section>
                <section className={`${styles.paragraph_section}`}>
                    <p>
                        Dünyanın ən böyük investisiya kateqoriyası olan daşınmaz
                        əmlak artıq şirkətlərin əvvəl düşündükləri kimi maliyyə
                        resurslarını təhlükəsiz qoruyacağı liman rolunu oynamır.
                        Texnologiyadakı dəyişikliklər, pandemiyanın təsiri və
                        insanların daşınmaz əmlakdan istifadəsində olan
                        dəyişikliklər industriyanın dinamikasının dəyişməsinə
                        səbəb olur, lakin bu sektor bu vaxta qıdır innovasiyada
                        geri qalıb.
                    </p>
                </section>

                <section
                    className={`${styles.services_section} d-flex direction-column align-center`}
                >
                    <p className={`${styles.header_subtitle}`}>Sənaye</p>
                    <p className={`${styles.services_title}`}>
                        Transportasiya və logistika konsaltinq xidmətlərimiz
                    </p>
                    <section className={`${styles.service_image_group} d-flex`}>
                        <div className={`${styles.service_image_container}`}>
                            <img
                                className={`${styles.service_image}`}
                                src={groupItemImagePng1}
                                alt=""
                            />
                            <p className={`${styles.service_image_subtitle}`}>
                                Təchizat zəncirinin optimizasiyası
                            </p>
                        </div>
                        <div className={`${styles.service_image_container}`}>
                            <img
                                className={`${styles.service_image}`}
                                src={groupItemImagePng2}
                                alt=""
                            />
                            <p className={`${styles.service_image_subtitle}`}>
                                Dijital transformasiyanın dəstəyi
                            </p>
                        </div>
                    </section>
                </section>

                <section className={`${styles.section_image_container} d-flex`}>
                    <img src={sectionImagePng} alt="" />
                </section>
                <section className={`${styles.paragraph_section}`}>
                    <p>
                        TWC transportasiya və logistika şirkətlərinin bütün
                        təşkilati səviyyələri ilə əməkdaşlıq edərək onların
                        şəbəkələrini genişləndirməkdə və müştəri ehtiyaclarına
                        əsasən xidmətlərini təkmilləşdirilməsində kömək edir.
                        Biz inanırıq ki, bu strategiyalari tətbiq edən şirkətlər
                        uzun müddətli böyümə fürsətindən faydalanmaq üçün ən
                        yaxşı mövqedə olacaqlar.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default IndustryTransPortationAndLogistics;
