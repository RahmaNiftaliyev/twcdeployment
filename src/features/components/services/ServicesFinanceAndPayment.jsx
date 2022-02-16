// @ts-nocheck
import React from 'react';
import ServicesHeaderDash from './ServicesHeaderDash';
import Footer from './../../footer/Footer';
import styles from './services.module.css';
// !----------------------------------------------------------
import strategyImg from './assets/img/strategiyavemaliyye.jpg';
import topicImage1 from './assets/img/strategiyavemaliyye/topic-1.png';
import topicImage2 from './assets/img/strategiyavemaliyye/topic-2.png';
import topicImage3 from './assets/img/strategiyavemaliyye/topic-3.png';
import topicImage4 from './assets/img/strategiyavemaliyye/topic-4.png';
import topicImage5 from './assets/img/strategiyavemaliyye/topic-5.png';
import topicImage6 from './assets/img/strategiyavemaliyye/topic-6.png';
import topicImage7 from './assets/img/strategiyavemaliyye/topic-7.png';


const ServicesFinanceAndPayment = () => {
    return (
        <div>
            <ServicesHeaderDash img={strategyImg} isBlack={true} textStructure={'Strategiya və Maliyyə'} textStructureData={'Strategy and Finance'} />
            <div className={`${styles.container}`}>
                <section className={`${styles.header_section} d-flex`}>
                    <div
                        className={`${styles.header_section_title_container} d-flex direction-column  align-end`}
                    >
                        <div className={` d-flex direction-column`}>
                            <span className={`${styles.sub_header}`}>
                                STRATEGİYA VƏ MALİYYƏ
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
                                Qeyri-müəyyənlik böyük olduqda rəqabət
                                üstünlüyünü necə əldə edir və qoruyursunuz?
                            </span>{' '}
                            <br />
                            Strategiya TWC-nin DNT-nin böyük hissəsidir.
                            Yuxarıdakı suala bizim “Gələcəyin Geriyə
                            İnduksiyası” yanaşmamız cavab verir. Bu yanaşma
                            ətraf mühitin necə dəyişəcəyini göstərən strateji
                            anlayışların tapılmasına və bu anlayışlardan
                            istifadə edərək hansı bacarıqların dəyər yaratmaq
                            üçün yaradılmalı olduğunu bilməyə kömək edir. Və bu
                            anlayışlar ətraf mühit dəyişənə qədər istifadə
                            olunur. Beləliklə, biz inanırıq ki, bu yanaşma
                            təkrar-təkrar istifadə edildikdə davamlı dəyər
                            yaratma ilə nəticələnəcəkdir.
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
                            STRATEGİYA VƏ MALİYYƏ
                        </span>
                        <span className={`${styles.topic_title}`}>
                            Korporativ strategiya
                        </span>
                        <p>
                            Gəlirlərin maksimumuna fokuslanmaq fərqli
                            şirkətlərin təkcə korporativ strategiya və ya
                            dəyərlərin yaradılması deyil. Əsas məsələ
                            şirkətinizin güclü tərəfləridir ki, hansı istiqamətə
                            düzgün investisiya qərarını verəsiniz. Korporativ
                            strategiya biznesin bütün sahələrini əhatə edir və
                            bu səbəbdən şirkətinizin bütün təşkilatını
                            vəziyyətini korporativ strategiyaya uyğunlaşdırmaq
                            vacibdir. Korporativ strategiya xidməti üzrə
                            komandamız hər hansı təhlükə və ya imkanlar üçün
                            rəqabəti, eləcə də uğurlu inkişaf taktikalarını və
                            risklərin qarşısını almaq üçün araşdırırlar və
                            qiymətləndirirlər.
                        </p>
                        <span className={`${styles.topic_sub_desc}`}>
                            Dayanıqlı artım konsepsiyası <br />
                            Strateji planlamanın qurulması <br />
                            Güclü tərəfləri analiz edərək aşkarlanması <br />
                            Məqsədlərin müəyyən edilməsi <br />
                            Resursların modelizasiya üzrə yerləşdirilməsi <br />
                        </span>
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            STRATEGİYA VƏ MALİYYƏ
                        </span>
                        <span className={`${styles.topic_title}`}>
                            Şöbələr üzrə strategiya
                        </span>
                        <p>
                            Biznesinizin funksiyaları və şöbələrinizin birgə
                            strategiyası olan biznes strategiyası ilə korporativ
                            strategiyanı fərqləndirərək TWC yanaşmasını və
                            konsultantların bütün təşkilatın ümumi
                            strategiyasının uyğunlaşdırılmasını təmin edilən
                            zaman hiss edəcəksiniz.
                        </p>
                        <span className={`${styles.topic_sub_desc}`}>
                            Komandaların bir-biriləri ilə düzgün alokasiyasının
                            qurulmusı <br />
                            Problemlərin həlli modeli <br />
                            Böyük pəncərəyə baxış viziyonunun formalaşdırılması{' '}
                            <br />
                            Mühəndislik modeli ilə şöbələr arası yerləşmə
                            uğunluğu <br />
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
                            STRATEGİYA VƏ MALİYYƏ
                        </span>
                        <span className={`${styles.topic_title}`}>
                            Yeni məhsul strategiyası
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
                        <span className={`${styles.topic_sub_desc}`}>
                            Data analizlərinin aparılması <br />
                            Bazar araştırması zamanı məlumatların toplanılması{' '}
                            <br />
                            Müştəri tələblərinin və rəqib məhsul, xidmətlərin
                            analizi <br />
                            Dizaynlaşdırma planın hazırlanması <br />
                        </span>
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            STRATEGİYA VƏ MALİYYƏ
                        </span>
                        <span className={`${styles.topic_title}`}>
                            Balance scorecard
                        </span>
                        <p>
                            Balance scorecard modeli problemi həll etmək üçün
                            xüsusi olaraq hazırlanmışdır. Çünki o, bir-biri ilə
                            aydın şəkildə əlaqəli və əldə edilə bilən məqsədlər,
                            tədbirlər, hədəflər və təşəbbüslər sistemi yaradaraq
                            strategiyanızı və vizyonunuzu həyata keçirir.
                            Şirkətinizin əməkdaşlarının və şirkətin ümumi
                            performansının ölçülməsini və sırf maliyyə problemi
                            olduğuna dair ənənəvi metodlar yanaşmasına meydan
                            oxuyan balanced scorecard modeli həm də əsas
                            müştəriləri, daxili prosesləri öyrənmə və inkişaf
                            etdirmək üçün olduqca vacib hesab edilir. Bu modelin
                            formalaşmasını və strukturunu yaradaraq TWC sizlərə
                            təqdim edir.
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
                            STRATEGİYA VƏ MALİYYƏ
                        </span>
                        <span className={`${styles.topic_title}`}>
                            Texniki-iqtisadi əsaslandırmalar
                        </span>
                        <p>
                            Ən ümumi səbəb bir itkini məhdudlaşdırmaq olardı.
                            Məsələn, tutaq ki, bir şirkət bahalı yeni məhsul
                            hazırlamağı və bazara çıxarmağı düşünür. Tədqiqat və
                            inkişaf xərcləri asanlıqla milyonlarla dollara başa
                            gələ bilər və işə salınması daha da baha başa gələ
                            bilər. İki və ya üç illik araşdırma xərcləri,
                            satışlar vasitəsilə hər hansı bir xərclərin
                            ödənilməsi ehtimalı olmadan əvvəl layihəyə daxil
                            ediləcəkdir. Daha da pisi, sahibkar bu yeni
                            müəssisədə böyük miqdarda vəsait/həyat qənaəti ilə
                            yana bilər. Bu halda, elmi-tədqiqat və
                            təkmilləşdirməyə əhəmiyyətli resurslar yatırılmadan
                            əvvəl texniki-iqtisadi əsaslandırma yüksək prioritet
                            olacaqdır. Əgər texniki-iqtisadi əsaslandırma çox
                            aşağı müvəffəqiyyət ehtimalını göstərirsə,
                            texniki-iqtisadi əsaslandırmaya sərmayə qoymaq və
                            layihəni öldürmək, tədqiqat olmadan irəliləməkdən və
                            layihənin uğursuzluğunu görməkdən çox daha ucuz
                            olardı.
                        </p>
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            STRATEGİYA VƏ MALİYYƏ
                        </span>
                        <span className={`${styles.topic_title}`}>
                            Maliyyə modelləşdirilməsi
                        </span>
                        <p>
                            Maliyyə modelləşdirilməsi maliyyə dünyasında
                            qərarların qəbul edilməsi üçün ən vacib vasitələrdən
                            biridir. Bu, maliyyə sənayesi üçün hava və su
                            kimidir. Lakin bir çox maliyyə modelləri optimal
                            şəkildə işləmir. Çox vaxt model düzgün tərtib
                            edilmədikdə, modellər həddindən artıq mürəkkəbləşir.
                            Bu problemi aradan qaldırmaq məqsədilə, biz
                            müştərilərə daxili modellərini təkmilləşdirməyə
                            kömək edir və onlara daha yaxşı və vaxtında qərarlar
                            qəbul etməyə imkan veririk. Biz biznesiniz üçün
                            tarixi məlumatlara əsaslanan ən yaxşı maliyyə
                            modelləri qururuq və tarixi məlumatların təhlili
                            əsasında proqnozlar təqdim edirik. Maliyyə
                            xidmətlərimizdən istifadə etməyə qərar verdiyiniz
                            təqdirdə sizə uğur zəmanət verə bilərik. Biz
                            həmçinin mürəkkəb prosesi sadə riyazi modelə
                            çevirməyə kömək edən maliyyə modelləri yaradırıq.
                        </p>
                        <span className={`${styles.topic_sub_desc}`}>
                            Model quraşdırılması <br />
                            Modelin təkmilləşdirilməsi <br />
                            Modellərin nəzərdən keçirilməsi <br />
                            Risklərin analizi <br />
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
                            STRATEGİYA VƏ MALİYYƏ
                        </span>
                        <span className={`${styles.topic_title}`}>
                            Maliyyə qiymətləndirilməsi{' '}
                        </span>
                        <p>
                            Qiymətləndirmə müasir dövrdə çox tələb olunur və
                            ümumiyyətlə bir sıra mütəxəssislərin təcrübəsini
                            tələb edən multidissiplinar yanaşmadan faydalanır.
                            Müvafiq bacarıqların və məsləhətlərin axtarılması və
                            mövcud işə uyğun olaraq tətbiq edilməsi vacibdir.
                            <br />
                            <br />
                            Şirkətimiz tərəfindən maliyyə qiymətləndirməsi ilə
                            bağlı xidmətlərimizdən yararlana bilərsiniz. Ekspert
                            məsləhətlərinin zəruriliyi qiymətləndirmənin erkən
                            mərhələsində nəzərə alınmalıdır.
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default ServicesFinanceAndPayment;
