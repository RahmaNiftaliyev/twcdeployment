// @ts-nocheck
import React from 'react';
import ServicesHeaderDash from './ServicesHeaderDash';
import Footer from './../../footer/Footer';
import styles from './services.module.css';
// !----------------------------------------------------------
import organizationImg from './assets/img/teshkilati.jpg';
import topicImage1 from './assets/img/teshkilati/topic-1.png';
import topicImage2 from './assets/img/teshkilati/topic-2.png';
import topicImage3 from './assets/img/teshkilati/topic-3.png';
import topicImage4 from './assets/img/teshkilati/topic-4.png';
import topicImage5 from './assets/img/teshkilati/topic-5.png';
import topicImage6 from './assets/img/teshkilati/topic-6.png';
import topicImage7 from './assets/img/teshkilati/topic-7.png';

const ServicesOrganization = () => {
    return (
        <div>
            <ServicesHeaderDash img={organizationImg} isBlack={true}  textStructure={'Təşkilati'} textStructureData={'Organizational'} />
            <div className={`${styles.container}`}>
                <section className={`${styles.header_section} d-flex`}>
                    <div
                        className={`${styles.header_section_title_container} d-flex direction-column  align-end`}
                    >
                        <div className={` d-flex direction-column`}>
                            <span className={`${styles.sub_header}`}>
                                təŞKİLATİ
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
                                Şirkət əməkdaşlarının motivasiyasını təmin etmək
                            </span>{' '}
                            <br />
                            Bir şirkət olaraq bu sadə qaydanın canlı nümunəsi
                            olaraq TWC-də biz inanırıq ki, ən məhsuldar
                            şirkətlər əməkdaşlarının bacarıq və təcrübələrini
                            vacib olan yeniliklərə yönəldənlərdir. Beləliklə,
                            əgər əməkdaşlarınız sizin ən vacib aktivlərinizdirsə
                            və aktivlərinizin tez və effektiv şəkildə məqsədləri
                            icra etməsi lazımdırsa, onda bu məqsədlərə uyğun
                            olaraq onlara investisiya qoymaq məqsədəuyğundur.
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
                            TƏŞKİLATİ

                        </span>
                        <span className={`${styles.topic_title}`}>
                            Təşkilati sistemləşmə{' '}
                        </span>
                        <p>
                            Struktur təşkilatların nə qədər yaxşı fəaliyyət
                            göstərməsinə, onların nə qədər səmərəli olmasına,
                            məqsədlərini nə dərəcədə yerinə yetirə bilməsinə,
                            strategiyanı nə qədər yaxşı həyata keçirə bilməsinə
                            böyük təsir göstərir. İndiki günlərdə təşkilatçılıq
                            biznes üçün çox mürəkkəb bir problemə çevirilib. Biz
                            təşkilatları sistemləşdirmək üçün sistemli
                            modellərin istifadəsi üzrə daxili bazarda aparıcı
                            konsaltinq şirkətlərindən biriyik.
                        </p>
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            TƏŞKİLATİ

                        </span>
                        <span className={`${styles.topic_title}`}>
                            Ticarət və performans strategiyası
                        </span>
                        <p>
                            Ticarət strategiyasının əsas məqsədi gözlənilən
                            xərcləri və ticarətlə bağlı riskləri
                            tarazlaşdırmaqdır. Konsaltinq xidmətlərimiz sizə
                            lazımsız risklərə məruz qalmadan biznesinizi qurmaq
                            imkanı verir. Biz çox geniş biznes imkanlarına
                            malikik. Bizim təcrübəli mütəxəssislərimiz ticarət
                            sahəsində geniş təcrübəyə malikdirlər və yerli
                            səviyyədə məhsuldar sənaye əlaqələri qurmuşlar.
                        </p>
                        <span className={`${styles.topic_sub_desc}`}>
                            Məhsul araşdırması <br />
                            Məhsul satışı <br />
                            Bazar strategiyasının hazırlanması <br />
                            Hədəf bazarının və rəqabətin təhlili <br />
                            Satış planının həyata keçirilməsi
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
                            TƏŞKİLATİ

                        </span>
                        <span className={`${styles.topic_title}`}>
                            Performans inkişafı{' '}
                        </span>
                        <p>
                            Performans inkişafı təşkilati effektivliyin
                            artırılmasına kömək edir. TWC performansı
                            yaxşılaşdırmaq üçün fərdiləşdirilmiş xidmətlər
                            təqdim edir. Müasir dünyada uğur qazanmaq üçün
                            təşkilatların davamlı olaraq effektivliyini artıran
                            komandalar lazımdır. Buna görə də, bizim məqsədimiz
                            şirkətlərin insan kapitalını maksimum potensiala
                            çatdırmaqdır.
                        </p>
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            TƏŞKİLATİ

                        </span>
                        <span className={`${styles.topic_title}`}>
                            Korporativ mədəniyyət
                        </span>
                        <p>
                            Korporativ mədəniyyət təşkilatın dəyərləri, etikası,
                            davranışı və iş mühitidir. Bu, şirkətin və
                            işçilərinin taleyinə böyük təsir göstərə bilər. Biz,
                            “Thinkwise Business Consulting”, işçilərin və şirkət
                            rəhbərliyin necə qarşılıqlı əlaqə qurduğunu müəyyən
                            edirik. Şirkətin ideologiyasının və təcrübəsinin
                            mahiyyətini təhlil edirik və biznesin hər bir
                            aspektinə təsir edirik. Güclü korporativ
                            mədəniyyətin formalaşdırılması üçün möhkəm təməl
                            təmin etmək lazımdır və bu məqsədlə biz altı dənə
                            xüsusiyyətə fokuslanırıq, bunlar; vizyon, dəyərlər,
                            təcrübələr, insanlar, hekayə və məkan.
                        </p>
                    </div>
                    <div className={`${styles.image_section} `}>
                        <img
                            className={`${styles.topic_image}`}
                            src={topicImage4}
                            alt=""
                        />
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div className={`${styles.image_section}`}>
                        <img
                            className={`${styles.topic_image}`}
                            src={topicImage5}
                            alt=""
                        />
                    </div>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            TƏŞKİLATİ

                        </span>
                        <span className={`${styles.topic_title}`}>
                            İdarəçilik strukturunun qurulması
                        </span>
                        <p>
                            Demək olar ki, bütün təşkilatlarda iyerarxiya və ya
                            struktur mövcuddur. Biz şirkətlərin idarəçilik
                            strukturunun necə qurulduğunu təsvir edirik.
                            Müştərilərimizin səlahiyyətlərini,
                            kommunikasiyalarını, hüquq və vəzifələrini müəyyən
                            edirik. “TWC Business Consulting Company” olaraq biz
                            həmçinin rolların, səlahiyyətlərin və
                            məsuliyyətlərin necə təyin edildiyini, idarə
                            olunduğunu və əlaqələndirildiyini, bundan əlavə,
                            müxtəlif idarəetmə səviyyələri, Orta və Aşağı
                            Rəhbərlik (Middle and Lower Management) arasında
                            məlumatın necə axdığını müəyyən edirik.
                        </p>
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            TƏŞKİLATİ

                        </span>
                        <span className={`${styles.topic_title}`}>KPI</span>
                        <p>
                            KPI və ya əsas performans göstəricisi, bir şəxsin və
                            ya təşkilatın hədəfə çatmaqda nə qədər uğurlu
                            olduğunu qiymətləndirmək üçün istifadə olunan
                            dəyərlərdəndir. Maliyyə və HR-dən tutmuş marketinq
                            və satışa qədər, əsas performans göstəriciləri
                            biznesin hər bir sahəsinin strateji səviyyədə
                            irəliləməsinə kömək edir. Təşkilatlar hədəflərə
                            çatmaqda müvəffəqiyyəti qiymətləndirmək üçün
                            KPI-lardan istifadə edirlər. Biz, “TWC Business
                            Consulting” olaraq, müəyyən bir müddət ərzində
                            biznesinizin performansını ölçürük ki, bu da sizə
                            şirkətin ümumi uzunmüddətli fəaliyyətini ölçməyə
                            kömək edəcək. KPI-nin artırılması ilə bağlı
                            məsləhətlər də xidmətlərimizə daxildir.
                        </p>
                    </div>
                    <div className={`${styles.image_section} `}>
                        <img
                            className={`${styles.topic_image}`}
                            src={topicImage6}
                            alt=""
                        />
                    </div>
                </section>
                <section className={`${styles.topic_section} d-flex`}>
                    <div className={`${styles.image_section}`}>
                        <img
                            className={`${styles.topic_image}`}
                            src={topicImage7}
                            alt=""
                        />
                    </div>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            TƏŞKİLATİ

                        </span>
                        <span className={`${styles.topic_title}`}>Agile</span>
                        <p>
                            Daim dəyişən dünyada təşkilatlar bazarda sürətli
                            dəyişikliklərin öhdəsindən gəlmək problemi ilə
                            üzləşirlər. Ənənəvi təşkilati strukturlar bu
                            standartlara uyğunlaşmaq məqsədilə mübarizə aparır,
                            buna görə də “Thinkwise Business Consulting”
                            təşkilatlara dəyişən şərtlərə tez reaksiya verməyə
                            kömək edir. Biz sizə biznesin daha “agile” olmasına
                            imkan verən çevik təşkilati struktur qurmağa kömək
                            edirik. Nəticədə “agile” metodologiyaların tətbiq
                            edən təşkilatlar müştəri-mərkəzli (customer-centric)
                            olmaqla mürəkkəb və gözlənilməz bir mühitdə işləməyə
                            qadirdirlər
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default ServicesOrganization;
