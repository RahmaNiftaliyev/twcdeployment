// @ts-nocheck
import React from 'react';
import ServicesHeaderDash from './ServicesHeaderDash';
import Footer from './../../footer/Footer';
import styles from './services.module.css';
// !----------------------------------------------------------
import salesImg from './assets/img/satisvemarketing.png';
import topicImage1 from './assets/img/satisvemarketing/topic-1.png';
import topicImage2 from './assets/img/satisvemarketing/topic-2.png';
import topicImage3 from './assets/img/satisvemarketing/topic-3.png';
import topicImage4 from './assets/img/satisvemarketing/topic-4.png';
import topicImage5 from './assets/img/satisvemarketing/topic-5.png';
import topicImage6 from './assets/img/satisvemarketing/topic-6.png';



const ServicesSalesAndMarketing = () => {
    return (
        <div>
            <ServicesHeaderDash img={salesImg} isBlack={true}  textStructure={'Satış və marketing'} textStructureData={'Sales and marketing'} />
            <div className={`${styles.container}`}>
                <section className={`${styles.header_section} d-flex`}>
                    <div
                        className={`${styles.header_section_title_container} d-flex direction-column mb-align-start  align-end`}
                    >
                        <div className={`d-flex direction-column`}>
                            <span className={`${styles.sub_header}`}>
                                SatIŞ VƏ MARKETİNQ
                            </span>
                            <span className={`${styles.service_title}`}>
                                Biznesinizi bizimlə inkişaf etdirin
                            </span>
                        </div>
                    </div>
                    <div
                        className={`${styles.paragraph_section} d-flex  align-center`}
                    >
                        <p>
                            TWC inanır ki, ümumi bazar ortalamasının üzərində
                            davamlı performans göstərmək üçün şirkətlər
                            müştəriləri strategiyalarının mərkəzinə
                            yerləşdirməlidir. Uğurlu şirkətlər müştəri
                            təcrübəsindən danışanlar deyil, lakin yeni səviyyədə
                            fəaliyyət göstərənlər, yəni satış və marketinqin
                            inteqrasyasını yaradanlardır. Şirkətlər bunu başa
                            düşməlidirlər ki, üstün müştəri təcrübəsi əsasən
                            nəyin çatdırıldığından deyil, necə çatdırılacağıdan
                            asılıdır.
                        </p>
                    </div>
                </section>

                <section className={`${styles.topic_section}  d-flex`}>
                    <div className={`${styles.image_section}`}>
                        <img
                            className={`${styles.topic_image} d-flex`}
                            src={topicImage1}
                            alt=""
                        />
                    </div>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            SATIŞ VƏ MARKETİNQ

                        </span>
                        <span className={`${styles.topic_title}`}>
                            Brendinq
                        </span>
                        <p>
                            Bizim göstərdiyimiz brendləşmə siyasəti bazarda
                            yerləşmə və brendinizi gələcəkdə investisiyalaşdırıb
                            və xidmətlərinizi düzgün differensilaşdıraraq
                            mövqeyinizi müştərilərə təyin edirik. <br />
                            Bütün brendləşmə siyasətinizi araşdıraraq və analiz
                            edərərək sizin müştərilərinizə brendinizə dəyər
                            qataraq həm fiziki və online üzərindən reallaşmasına
                            dəstək oluruq. Təqdim edəcəyimiz xidmətlər:
                        </p>
                        <span className={`${styles.topic_sub_desc}`}>
                            Brendin effektivliyini müəyyən edirik Müştəri
                            seqmentini brend üzərindən müəyyən edirik Brend
                            üzərindən müştəri davranışlarını analiz edirik
                            Brendin güclü və zəif tərəflərini araşdırırıq
                        </span>
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div
                        className={`${styles.paragraph_section} d-flex flex-mb-column direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            SATIŞ VƏ MARKETİNQ

                        </span>
                        <span className={`${styles.topic_title}`}>
                            Bazar araşdırması
                        </span>
                        <p>
                            İstifadə etdiyimiz individual analiz metodologiyası
                            onlayn sorğular, telefon müsahibəsi və s. araşdırma
                            instrumentləri daxildir. Biz modelləşdirmək,
                            sınaqdan keçirmək, bazara çıxarmaq və işlək fikirlər
                            konseptini formalaşdıraraq mürəkkəb məlumat
                            analitikası və bazar modelləşdirməsini həyata
                            keçirmək üçün komandamızla potensial bacarıqlara
                            sahibik. Bu sahədə təqdim edəcəyimiz araşdırmalar:
                        </p>
                        <span className={`${styles.topic_sub_desc}`}>
                            Müştəri dəyərini identifikasiyalaşdırmaq <br />
                            Məhsul və xidmət strukturunun bazara uyğunluğunun
                            analizi Şirkətin bazar payının proqnozlaşdırılması{' '}
                            <br />
                            Yeni yaranacaq müəssisənin bazardakı rolunu
                            modelləşdirmək Bazardakı məhsul və xidmət
                            kateqoriyalarının analizi
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
                            SATIŞ VƏ MARKETİNQ

                        </span>
                        <span className={`${styles.topic_title}`}>
                            Rəqəmsal Marketinq
                        </span>
                        <p>
                            Bizim bilik və təcrübəmiz rəqəmsal eraya daxil olan
                            şirkətlərə güçlü ambisiyalar və möhtəşəm idaretmə
                            strategiyası təqdim edir. Real rəqamsal
                            transformasiya sizə gələcək biznesinizin uğurlu
                            olmasında üstün prioritetlər və müştəri əlaqələrini
                            genişləndirməyi sövq edəcək. Rəqamsal Marketinq
                            biliklərimizlə yanaşı peşəkar komanda üzvlərimiz
                            uzun illər rəqamsal kommersiya, biznesin rəqamsal
                            strategiyası və inkişafı və rəqamsal brendinq
                            sahəsində çalışmışlar.
                        </p>
                        <span className={`${styles.topic_sub_desc}`}>
                            Rəqamsal Marketinq strategiyası <br />
                            SEO strategiyası <br />
                            Rəqamsal platformaların analitikası <br />
                            Rəqamsal Reklam strategiyası <br />
                            Elektron kemmersiyanın yaradılması və strategiyası
                        </span>
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            SATIŞ VƏ MARKETİNQ

                        </span>
                        <span className={`${styles.topic_title}`}>
                            Portfolio İdarəetməsi
                        </span>
                        <p>
                            Şirkətlərin idarəetmə təcrübəsi daxili və xarici
                            dəyişikliklərə əsasən, öz portfolio strategiyalarını
                            sıfırlamağa məcbur olur. Portfolio idarəedilməsində
                            yaranan əsas problemlər şirkətləri səhv və tez addım
                            atmağa məcbur edir . TWC şirkətinin portfolio
                            analizi istiqamətində biznesinizin düzgün portfolio
                            idarəediləmisi strategiyasında əsas xidmət
                            addımları:
                        </p>
                        <span className={`${styles.topic_sub_desc}`}>
                            Məhsul və xidmətlərin bazar dəyəri analizi <br />
                            Qabaqcıl analitika <br />
                            İntellektual qruplaşdırma strategiyası <br />
                            Çox funksional qruplaşdırma modeli <br />
                            Maliyyə simulyasiya modeli analizi
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
                            SATIŞ VƏ MARKETİNQ

                        </span>
                        <span className={`${styles.topic_title}`}>
                            Satış kanallarının qurulması
                        </span>
                        <p>
                            Uğurlu satış kanallarının qurulması bazarda
                            şirkətlərin öz müştəri seqmentinə fokuslanmasına
                            kömək edir. TWC bu istiqamətdə satış kanallarının
                            qurulamsında optimal xidmətlərini müştərilər ilə
                            birgə layihə üzərində çalışaraq gələcək satış
                            strategiyasını formalaşdırır. Bizim əsas məqsədimiz
                            satış kanallarının idarəedilməsində müştərilərə
                            dəstək göstərməkdir.
                        </p>
                        <span className={`${styles.topic_sub_desc}`}>
                            Satış kanallarının formalaşdırılması və risklərin
                            analizi Bazar dəyişikliyinə əsasən satış
                            kanallarının adaptasiyası Effektiv müştəri
                            kanallarının müəyyən edilməsinin analizi Məhsul,
                            xidmət, düzgün qiymətləndirmə siyasətini hər satış
                            kanalına uyğun müəyyən edilməsi.
                        </span>
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            SATIŞ VƏ MARKETİNQ

                        </span>
                        <span className={`${styles.topic_title}`}>
                            Müştəri təcrübəsi
                        </span>
                        <p>
                            Müasir dövrdə şirkətlər bilir ki, məhsulun yaxşı
                            olması vacibdir amma kifayət deyil və bu səbəbdən
                            müştəri təcrübəsini təmin etmək uğurlu ola bilər.
                            Bizim öz yanaşmamız olduqca sadə və rəqamsaldır.
                            TWC-nin bu sahədə təcrübəsi və ekspert komandamızın
                            yanaşması sizin müştərilərə vacib olanları müəyyən
                            edilməsinə və xərclərinizin optimallaşdırımasına
                            dəstək göstərəcək. Təqdim edəcəyimiz xidmətlər:
                        </p>
                        <span className={`${styles.topic_sub_desc}`}>
                            Müştəri müraciətinin effektiv konsept üzərindən
                            modelləşdirilməsi Loyallıq proqramının tərtib
                            edilməsi <br />
                            Müştəri davranışlarının müəyyən edilməsi <br />
                            Gələcəkdə müştəri tələblərinin praqnozlaşdırılması
                        </span>
                    </div>
                    <div className={`${styles.image_section} `}>
                        <img
                            className={`${styles.topic_image}`}
                            src={topicImage6}
                            alt=""
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default ServicesSalesAndMarketing;
