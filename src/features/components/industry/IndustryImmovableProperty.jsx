// @ts-nocheck
import React from 'react';
import IndustryHeaderDash from './IndustryHeaderDash';
import Footer from './../../footer/Footer';
import styles from './industry.module.css';
// !----------------------------------------------------------
import headerImagePng from './assets/img/dashinmazemlak-header.png';
import sectionImagePng from './assets/img/dashinmazemlak-section.png';
import groupItemImagePng1 from './assets/img/dashinmazemlak-group-item-1.png';
import groupItemImagePng2 from './assets/img/dashinmazemlak-group-item-2.png';

const IndustryImmovableProperty = () => {
    return (
        <div>
            <IndustryHeaderDash
                headerText={'SƏNAYE/DAŞINMAZ ƏMLAK'}
                isHeader={true}
            />

            <div className={`${styles.container}`}>
                <section className={`${styles.header_image_container} d-flex `}>
                    <img src={headerImagePng} alt="" />
                </section>
                <section className={`d-flex direction-column`}>
                    <span className={`${styles.header_subtitle}`}>Sənaye</span>
                    <span className={`${styles.header_title}`}>
                        Daşınmaz əmlak
                    </span>
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
                        Daşınmaz əmlak konsaltinq xidmətlərimiz
                    </p>
                    <section className={`${styles.service_image_group} d-flex`}>
                        <div className={`${styles.service_image_container}`}>
                            <img
                                className={`${styles.service_image}`}
                                src={groupItemImagePng1}
                                alt=""
                            />
                            <p className={`${styles.service_image_subtitle}`}>
                                İnvestisiya qərarları
                            </p>
                        </div>
                        <div className={`${styles.service_image_container}`}>
                            <img
                                className={`${styles.service_image}`}
                                src={groupItemImagePng2}
                                alt=""
                            />
                            <p className={`${styles.service_image_subtitle}`}>
                                Transformasiya
                            </p>
                        </div>
                    </section>
                </section>

                <section className={`${styles.section_image_container} d-flex`}>
                    <img src={sectionImagePng} alt="" />
                </section>
                <section className={`${styles.paragraph_section}`}>
                    <p>
                        TWC daşınmaz əmlak liderlərinə öz lokasiyalarına və
                        investisiya portfeli fokusuna əsasən industriyada olan
                        dəyişiklikləri kapitallaşdirmağa kömək edir.
                        Kapitallaşdırma, biznes modellərini dəyişdirmək və
                        şaxələndirmək, yeni daxili bacarıqları inkişaf etdirmək
                        və coğrafi olaraq genişləndirmək kimi fərqli formalarda
                        ola bilər.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default IndustryImmovableProperty;
