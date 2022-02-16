// @ts-nocheck
import React from 'react';
import IndustryHeaderDash from './IndustryHeaderDash';
import Footer from './../../footer/Footer';
import styles from './industry.module.css';
// !----------------------------------------------------------
import headerImagePng from './assets/img/enerji-header.png';
import sectionImagePng from './assets/img/enerji-section.png';

const IndustryEnergy = () => {
    return (
        <div>
            <IndustryHeaderDash headerText={'SƏNAYE/ENERJİ'} isHeader={true} />
            <div className={`${styles.container}`}>
                <section className={`${styles.header_image_container} d-flex `}>
                    <img src={headerImagePng} alt="" />
                </section>
                <section className={`d-flex direction-column`}>
                    <span className={`${styles.header_subtitle}`}>Sənaye</span>
                    <span className={`${styles.header_title}`}>Enerji</span>
                </section>
                <section className={`${styles.paragraph_section}`}>
                    <p>
                        Enerji sektorunun əksəriyyəti neft və ya qaz
                        ehtiyyatlarının kəşfiyyatı ilə, vəyaxud neft və qazın
                        qazılması və emalı ilə məşğul olan şirkətlərdən
                        ibarətdir. Enerji sektoru çox geniş bir termindir və
                        enerji istehsalı və paylanması ilə məşğul olan
                        şirkətlərin mürəkkəb və bir-biri ilə əlaqəli şəbəkəsini
                        təsvir edir. Enerji iqtisadiyyatın gücləndirilməsində,
                        istehsal və nəqliyyat vasitələrinin asanlaşdırılmasında
                        mühüm rol oynayır. Enerji sənayesindəki şirkətlər
                        enerjinin necə qaynaqlandığına görə iki qrupa bölünür;
                        bərpa olunan (renewable) və bərpa olunmayan
                        (non-renewable).
                        <br />
                        Neft və Qaz, Qazma və Hasilat, Boru Kəməri və Emalı,
                        Mədən Şirkətləri, Bərpa Olunan Enerji (Renewable Energy)
                        enerji sektoru şirkətlərinin növləridir. Onların hər
                        biri müəssisə və istehlakçıların enerji ilə təmin
                        olunmasında müəyyən rol oynayır.
                    </p>
                </section>
                <section className={`${styles.section_image_container} d-flex`}>
                    <img src={sectionImagePng} alt="" />
                </section>

                <section className={`${styles.paragraph_section}`}>
                    <p>
                        Enerji konsaltinqi biznesin enerji istifadəsinin
                        optimallaşdırmağına yönəlmiş ekoloji konsaltinqin alt
                        intizamıdır. Enerji konsaltinqi çox vaxt əməliyyat
                        xərclərinin azaldılmasına yönəlir, baxmayaraq ki, bu
                        həmişə əsas məqsəd deyil. Geniş ictimaiyyətin şüurunda
                        korporativ sosial məsuliyyətin (KSM) artan əhəmiyyəti
                        ilə əlaqədar korporativ səviyyəli müəssisələr öz enerji
                        balansına daha ekoloji cəhətdən təmiz enerji mənbələrini
                        daxil etmək üçün enerji məsləhətçisi ilə müqavilə
                        bağlamağı üstün tuturlar.
                    </p>
                    <p>
                        İstər böyük, istərsə də kiçik bir kommersiya müəssisəsi
                        olmağınızdan asılı olmayaraq, enerji istehlakınıza və
                        mənbələrə nəzarət etmək uzunmüddətli dəstək tələb edən
                        güclü bir addımdır. Optimal məsrəflərin idarə edilməsini
                        təmin etmək üçün enerji bazarlarının dəyişən
                        dinamikasını dəvamlı olaraq izah edə biləcək ekspert
                        lazımdır.
                    </p>
                    <p>
                        Niyə enerji konsultantına müraciət etməliyəm? Bir çox
                        müəssisələr enerji təminatçısı axtararkən özlərinə bu
                        sualı verirlər. Energetikanın derequlyasiya edilməsi
                        seçimi, qənaəti və çevikliyinə əsaslanan bazar yaradıb.
                        “Thinkwise Business Consulting” kimi müstəqil, qərəzsiz
                        enerji məsləhətçisi ilə işləmək sizin üçün doğru seçim
                        ola bilər. “Thinkwise Business Consulting”-dəki
                        öhdəliyimizin bir hissəsi olaraq, müqavilələriniz
                        qüvvədə olandan əvvəl, müddətində və sonra sizinlə
                        işləyirik.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default IndustryEnergy;
