// @ts-nocheck
import React from 'react';
import ServicesHeaderDash from './ServicesHeaderDash';
import Footer from './../../footer/Footer';
import styles from './services.module.css';
// !----------------------------------------------------------
import investmentJpg from './assets/img/kapitallashma.jpg';
import topicImage1 from './assets/img/kapitallashma/topic-1.png';
import topicImage2 from './assets/img/kapitallashma/topic-2.png';
import topicImage3 from './assets/img/kapitallashma/topic-3.png';
import topicImage4 from './assets/img/kapitallashma/topic-4.png';


const ServicesInvestment = () => {
    return (
        <div>
            <ServicesHeaderDash img={investmentJpg} isBlack={false} textStructure={'Kapitallaşma'} textStructureData={'Capitalization'} />
            <div className={`${styles.container}`}>
                <section className={`${styles.header_section} d-flex`}>
                    <div
                        className={`${styles.header_section_title_container} d-flex direction-column align-end`}
                    >
                        <div className={` d-flex direction-column`}>
                            <span className={`${styles.sub_header}`}>
                                KAPİTALLAŞMA
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
                            Biz partnyorlarımızı biznes modelindən, şirkət
                            ölçüsündən, industriyasından, böyümə dərəcəsindən,
                            və kredit struktrundan asılı olmayaraq beynəlxalq
                            maliyyə institutlarından və özəl investisiya
                            fondlarından maliyyə cəlb etməsində dəstəkləyirik.
                            TWC partnyorlarını maliyyələşmənin ilk mərhələsindən
                            ən son mərhələdəki potensial maliyyələşmə
                            imkanlarının seçimi də daxil olmaqla bütün
                            mərhələlərdə dəstəkləyir.
                            <br />
                            <span className={`${styles.bold_paragraph}`}>
                                Maliyyələşmə növləri aşaği faizli kredit,
                                kapital qoyuluşu, istiqrazlar ve qarantiyalar
                                üzərindən ola bilər.
                            </span>
                        </p>
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div className={`${styles.image_section}`}>
                        <img
                            className={`${styles.topic_image}`}
                            src={topicImage1}
                            alt=""
                        />
                    </div>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            KAPİTALLAŞMA
                        </span>
                        <span className={`${styles.topic_title}`}>
                            Birləşmə və satınalmanın maliyyələşməsi{' '}
                        </span>
                        <p>
                            Biz müştəriləri sınaqdan keçmiş metodologiyalar
                            əsasında yönləndirərək strateji və ya maliyyələşmiş
                            birləşmə və satınalma proseslərini yaratmağa və
                            idarə etməyə kömək edirik. Biz, həmçinin Birləşmə və
                            Satınalmanın müxtəlif mərhələlərində şirkətlərə
                            kömək edirik. Xidmətlərimiz strategiyaları
                            müəyyənləşdirmək, məqsədlərə çatmaq və imkanları
                            müəyyən etmək üçün sənaye və ya sektora diqqət
                            yetirməklə, hər bir şirkətin xüsusi ehtiyaclarını
                            ödəmək üçün fərdiləşdirilir.
                        </p>
                        <span className={`${styles.topic_sub_desc}`}>
                            Hədəflərin müəyyənləşdirilməsi <br />
                            Birləşmə və Satınalmanın siyasəti <br />
                            Kapital Hekayəsi və Çıxış Dəyəri (Equity Story{' '}
                            <br />
                            and Exit Value) <br />
                            Borc və Kapitalın Maliyyələşdirilməsi <br />
                            Biznesin qiymətləndirilməsi <br />
                        </span>
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            KAPİTALLAŞMA
                        </span>
                        <span className={`${styles.topic_title}`}>
                            İnvestisiya cəlb edilməsi
                        </span>
                        <p>
                            Biz sizə uzunmüddətli iqtisadi uğur qazandıran
                            investisiya cəlbedici strateji planı hazırlamağa
                            kömək edirik. İnvestisiyalar üçün rəqabət çox
                            böyükdür. Düzgün hədəf şirkətlərinin müəyyən
                            edilməsi və onlara səmərəli müraciət
                            investisiyaların uğurla cəlb edilməsi üçün vacibdir.
                            Bölgənizdə investisiyaların cəlb edilməsi üçün ən
                            böyük potensialı təmsil edən hədəf sektorları və
                            şirkətlərin növlərini müəyyən etməyə kömək edə
                            bilərik.
                        </p>
                        <span className={`${styles.topic_sub_desc}`}>
                            Perspektivli və davamlı investisiya layihələrinə
                            investorların cəlb edilməsi <br />
                            Şirkətin qeydiyyatı, bank hesabının açılması, vergi
                            uçotunun qeydiyyatı və s. çətinliklərin aradan
                            qaldırılması <br />
                            Ekspert bazar biliyi və xüsusi marketinq araşdırması{' '}
                            <br />
                            Vergi ilə bağlı məsələlərdə ekspert məsləhəti <br />
                        </span>
                    </div>
                    <div className={`${styles.image_section} `}>
                        <img
                            className={`${styles.topic_image}`}
                            src={topicImage2}
                            alt=""
                        />
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div className={`${styles.image_section}`}>
                        <img
                            className={`${styles.topic_image}`}
                            src={topicImage3}
                            alt=""
                        />
                    </div>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            KAPİTALLAŞMA


                        </span>
                        <span className={`${styles.topic_title}`}>
                            Böyümə və modernizasiya maliyyələşməsi{' '}
                        </span>
                        <p>
                            Kefiyyətli və zövqlü məhsul yaratmaq asan məsələ
                            deyil. Araşdırmalardan başlayaraq biz
                            müştərilərinizin tələb və ehtiyaclarını dərindən
                            öyrənərək. Tədqiqat zamanı məhsul dizaynı
                            düşüncəmizə əsaslanaraq, biz sizə maksimum cəlbedici
                            məhsul yaratmaq məqsədi ilə konsepsiyalar və
                            prototiplər yaratmağa kömək edəcəyik.
                        </p>
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            KAPİTALLAŞMA


                        </span>
                        <span className={`${styles.topic_title}`}>
                            Dövriyyə kapitalın maliyyələşməsi
                        </span>
                        <p>
                            Menecment konsaltinq şirkəti olaraq, biz korporativ
                            maliyyələşdirmə, maliyyə strategiyası və investisiya
                            layihələrinin operativ hesablanması,
                            investisiyaların qiymətləndirilməsi və maliyyə
                            hesabatı ilə biznes planın yaradılması üzrə
                            konsultasiya veririk. Komandamız investisiyaların
                            rentabelliyi ilə bağlı ətraflı təhlillər aparır ki,
                            sərmayələriniz həqiqətən istədiyiniz gəlirliliyi
                            əldə etsin. Biz müxtəlif investisiya ssenarilərini
                            təqdim edirik və investisiyaları pul vəsaitlərinin
                            hərəkətinin menecmentinə (cash flow management)
                            inteqrasiya edirik.
                        </p>
                        <span className={`${styles.topic_sub_desc}`}>
                            Kiçikdən böyük investisiya layihələrinə
                            investisiyaların <br />
                            hesablanması <br />
                            İnvestisiyaların maliyyə planlaşdırılması <br />
                            Maliyyə təhlillərinin aparılması və biznesin maliyyə{' '}
                            <br />
                            menecmentin qurulması <br />
                        </span>
                    </div>
                    <div className={`${styles.image_section} `}>
                        <img
                            className={`${styles.topic_image}`}
                            src={topicImage4}
                            alt=""
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default ServicesInvestment;
