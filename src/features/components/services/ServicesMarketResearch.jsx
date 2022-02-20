// @ts-nocheck
import React from 'react';
import ServicesHeaderDash from './ServicesHeaderDash';
import Footer from './../../footer/Footer';
import styles from './services.module.css';
// !----------------------------------------------------------
import headerImage from './assets/img/bazararastirmasi/header.png';
import sectionImage from './assets/img/bazararastirmasi/section.png';
import topicImage1 from './assets/img/bazararastirmasi/topic-1.png';
import topicImage2 from './assets/img/bazararastirmasi/topic-2.png';
import topicImage3 from './assets/img/bazararastirmasi/topic-3.png';
import topicImage4 from './assets/img/bazararastirmasi/topic-4.png';
import topicImage5 from './assets/img/bazararastirmasi/topic-5.png';
import topicImage6 from './assets/img/bazararastirmasi/topic-6.png';
import topicImage7 from './assets/img/bazararastirmasi/topic-7.png';
import topicImage8 from './assets/img/bazararastirmasi/topic-8.png';


const ServicesMarketResearch = () => {
    return (
        <div>
            <ServicesHeaderDash 
                img={headerImage} 
                isBlack={false} 
                textStructure={'Bazar araşdırması'}
                textStructureData={'Market research'}
            />
            <div className={`${styles.container}`}>
                <section className={`${styles.header_section} d-flex`}>
                    <div
                        className={`${styles.header_section_title_container} d-flex direction-column  align-end`}
                    >
                        <div className={` d-flex direction-column`}>
                            <span className={`${styles.sub_header}`}>
                                BAZAR ARAŞDIRMASI
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
                            <span className={`${styles.bold_paragraph}`}>
                                TWC inanır ki, strateji və marketinq
                                layihələrinin ilkin mərhələsi bazar
                                araşdırmasından başlayır.
                            </span>
                            <br />
                            Dəqiq müəyyən edilmiş məqsədlər və effektiv
                            metodologiya uğurlu bazar araşdırmasının əsas
                            göstəriciləridir. Bazar araşdırması yeni müəssisəyə
                            resurslar sərf etmədən öncə yeni məhsul və ya
                            xidmətin işə salınmasının mexanizmlərini və bunun
                            mümkünlüyünü müəyyən etməkdə, nəticə olaraq önəmli
                            biznes qərarların qəbul edilməsində həlledici vasitə
                            ola bilər. Dəyişən iş mühiti, müştərilər və onların
                            tələbləri səbəbindən bazar araşdırması davamlı bir
                            proses olaraq aparılmalıdır.
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
                                Bazar araşdırması marketinqin əsas elementi
                                olub, rəqabət mühitində bazar dinamikası üçün
                                strategiya və taktikaların işlənib
                                hazırlanmasında məlumat bazası yaradır. Bu
                                tədqiqatın mahiyyəti bazarın keyfiyyət və
                                kəmiyyət təhlilindən ibarətdir ki, onun da
                                məqsədi bazarın potensial ölçüsünü, məhsul və
                                xidmətlərə mövcud tələbi, rəqabət səviyyəsini,
                                rəqabət mühitinin xüsusiyyətlərini müəyyən
                                etməkdir.
                            </p>
                            <br />
                            <p>
                                TWC komandası müxtəlif sənaye sahələrində dövlət
                                və özəl şirkətlər üçün bazar araşdırmalarının
                                aparılmasında böyük bilik və təcrübəyə malikdir.
                                Logistika, neft və qaz, pərakəndə satış,
                                alkoqol, FMCG, HORECA istehsalı və istehlak
                                malları sənayesi kimi sahələrdə bir çox uğurlu
                                araşdırmalarımız şirkətlərə təqdim olunmuşdur.
                            </p>
                        </div>
                    </section>

                    <section
                        className={`${styles.extra_services_section} d-flex businesPlan-images direction-column align-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            BAZAR ARAŞDIRMASI
                        </span>
                        <span className={`${styles.service_details_title}`}>
                            Bazar araşdırması daxilində aşağıdakılar yerinə
                            yetirilir
                        </span>
                        <div className={`d-flex flex-wrap justify-between`}>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage1}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Tədqiqatın tərifi
                                </span>
                            </div>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage2}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Tədqiqat dizaynı
                                </span>
                            </div>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage3}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Məlumatların toplanması
                                </span>
                            </div>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage4}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Məlumatların təmizlənməsi
                                </span>
                            </div>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage5}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Hipotezin inkişafı
                                </span>
                            </div>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage7}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Məlumatların təhlili
                                </span>
                            </div>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage6}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Sahə işi
                                </span>
                            </div>
                            <div className={`${styles.image_item_section}`}>
                                <img
                                    className={`${styles.image_item}`}
                                    src={topicImage8}
                                    alt=""
                                />
                                <span className={`${styles.image_subtitle}`}>
                                    Hesabatın hazırlanması
                                </span>
                            </div>
                            <div
                                className={`${styles.image_item_section}`}
                            ></div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServicesMarketResearch;
