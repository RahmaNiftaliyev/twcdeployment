// @ts-nocheck
import React from 'react';
import IndustryHeaderDash from './IndustryHeaderDash';
import Footer from './../../footer/Footer';
import styles from './industry.module.css';
// !----------------------------------------------------------
import headerImagePng from './assets/img/senayemehsullari-header.png';
import sectionImagePng from './assets/img/senayemehsullari-section.png';
import groupItemImagePng1 from './assets/img/senayemehsullari-group-item-3.png';
import groupItemImagePng2 from './assets/img/senayemehsullari-group-item-3.png';
import groupItemImagePng3 from './assets/img/senayemehsullari-group-item-3.png';


const IndustryProducts = () => {
    return (
        <div>
            <IndustryHeaderDash
                headerText={'SƏNAYE/SƏNAYE MƏHSULLARI'}
                isHeader={true}
            />

            <div className={`${styles.container}`}>
                <section className={`${styles.header_image_container} d-flex `}>
                    <img src={headerImagePng} alt="" />
                </section>
                <section className={`d-flex direction-column`}>
                    <span className={`${styles.header_subtitle}`}>Sənaye</span>
                    <span className={`${styles.header_title}`}>
                        Sənaye məhsulları
                    </span>
                </section>
                <section className={`${styles.paragraph_section}`}>
                    <p>
                        Şirkətlərin hansı spesifik sənaye sektorunda
                        olmaqlarından asılı olmayaraq ənənəvi biznesdən və
                        əməliyyat modellərindən daha uzağa baxmağa və gələcəkdə
                        necə dəyər yaradacaqlarını bilməyə ehitayacları var. Bir
                        çoxu üçün, biznes modellərində cəsur dəyişikliklər etmək
                        aydındır, amma bu dəyişikliyi necə etmək isə aydın
                        deyil.
                    </p>
                </section>

                <section
                    className={`${styles.services_section} d-flex direction-column align-center`}
                >
                    <p className={`${styles.header_subtitle}`}>Sənaye</p>
                    <p className={`${styles.services_title}`}>
                        Sənaye məhsulları konsaltinq xidmətlərimiz
                    </p>
                    <section className={`${styles.service_image_group} d-flex`}>
                        <div className={`${styles.service_image_container}`}>
                            <img
                                className={`${styles.service_image}`}
                                src={groupItemImagePng1}
                                alt=""
                            />
                            <p className={`${styles.service_image_subtitle}`}>
                                B2B Bazara çıxış strategiyası
                            </p>
                        </div>
                        <div className={`${styles.service_image_container}`}>
                            <img
                                className={`${styles.service_image}`}
                                src={groupItemImagePng2}
                                alt=""
                            />
                            <p className={`${styles.service_image_subtitle}`}>
                                Dijital trasnformasiyanın dəstəyi
                            </p>
                        </div>
                        <div className={`${styles.service_image_container}`}>
                            <img
                                className={`${styles.service_image}`}
                                src={groupItemImagePng3}
                                alt=""
                            />
                            <p className={`${styles.service_image_subtitle}`}>
                                Xərc zəncirinin optimizasiyası
                            </p>
                        </div>
                    </section>
                </section>

                <section className={`${styles.section_image_container} d-flex`}>
                    <img src={sectionImagePng} alt="" />
                </section>

                <section className={`${styles.paragraph_section}`}>
                    <p>
                        Biz detallı industriya və bazar datalarını şirkətlərin
                        əsas güclü tərəfləri ilə birləşdirərək hərəkətə keçilə
                        bilən strategiyalara çeviririk. Biz inanırıq ki, hazırki
                        qeyri-müəyyənlikdə, şirkətlər satışlarına olan təsirləri
                        və iqtisadiyyatdakı dalğalanmaları yumşaltmaq üçün
                        davamlı olaraq əməliyatlarının inkişaf etdirməyə və
                        xərclərini idarə etməyə ehtiyacları var.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default IndustryProducts;
