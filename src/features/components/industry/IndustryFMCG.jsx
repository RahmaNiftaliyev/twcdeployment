// @ts-nocheck
import React from 'react';
import IndustryHeaderDash from './IndustryHeaderDash';
import Footer from './../../footer/Footer';
import styles from './industry.module.css';
// !----------------------------------------------------------
import headerImagePng from './assets/img/FMCG-header.png';
import sectionImagePng from './assets/img/FMCG-section.png';

const IndustryFMCG = () => {
    return (
        <div>
            <IndustryHeaderDash headerText={'SƏNAYE/FMCG'} isHeader={true} />
            <div className={`${styles.container}`}>
                <section className={`${styles.header_image_container} d-flex `}>
                    <img src={headerImagePng} alt="" />
                </section>
                <section className={`d-flex direction-column`}>
                    <span className={`${styles.header_subtitle}`}>Sənaye</span>
                    <span className={`${styles.header_title}`}>FMCG</span>
                </section>
                <section className={`${styles.paragraph_section}`}>
                    <p>
                        Gündəlik Tələbat Malları (FMCG) nisbətən aşağı qiymətə
                        tez satılan məhsullardır. Bu mallar yüksək istehlak
                        tələbatı (məsələn, sərinləşdirici içkilər və qənnadı
                        məmulatları) və ya tez xarab olma (məsələn, ət, süd
                        məhsulları və çörək-bulka məmulatları) səbəbindən qısa
                        yararlılıq müddətinə malikdir. Bu məhsullar tez-tez
                        alınır, tez istehlak edilir, aşağı qiymətə malikdir və
                        böyük miqdarda satılır.
                    </p>
                    <p>
                        Gündəlik Tələbat Malları (FMCG) yüksək inventar
                        dövriyyəsinə malikdir və az istehsal edilən Tələbat
                        Mallarından (SMCG) fərqli olaraq daha aşağı satışlara və
                        yüksək daşıma xərclərinə malik deyildir. Bir çox
                        pərakəndə satıcılar yalnız (FMCG), xüsusən də
                        hipermarketlər, böyük qutu mağazalar və anbar klub
                        mağazalarına üstün lük verir. Kiçik ticarət
                        mağazalarında da sürətli mallar var; məhdud rəf sahəsi
                        daha yüksək dövriyyəli əşyalarla doldurulur.
                    </p>
                    <p>
                        FMCG sektoru güclü brendlər, funksional cəhətdən üstün
                        məhsullar və miqyaslı əməliyyatlar sayəsində misilsiz
                        dəyər yaratma performansı tarixinə malikdir. Lakin
                        qlobal müştəri tələbindəki yavaşlamalar, müştəri
                        mənzərəsindəki çoxsaylı dəyişikliklər və ənənəvi
                        miqyaslı üstünlüklərin itirilməsi sektorun 2017-ci ildən
                        aşağı performans göstərməsinə səbəb olub, pandemiya isə
                        bu tənəzzülü zatən sürətləndirdi.
                    </p>
                </section>
                <section className={`${styles.section_image_container} d-flex`}>
                    <img src={sectionImagePng} alt="" />
                </section>

                <section className={`${styles.paragraph_section}`}>
                    <p>
                        İstehlak Mallar sektoru mürəkkəbdir. Müştərilərin sayı o
                        qədər çoxdur ki, onları təhdid etmək və ya onlarla fərdi
                        şəkildə danışıqlar aparmaq mümkün deyil. Buna görə
                        seqmentlər, tendensiyalar haqqında düşünmək və çox sayda
                        marketinq və satışlar ilə dolayı hərəkət etmək lazımdır.
                        Biznesin dəyərini artıran bir çox maraqlı amillər
                        mövcuddur. Amma onlar da adətən, olduqca mürəkkəbdir.
                        Buna görə də istehlak məhsullarına həsr olunmuş
                        konsaltinq layihələri çox böyük əhəmiyyət daşıyır.
                    </p>
                    <p>
                        FMCG bazarı yüksək rəqabətlidir. Bu həmişə belə
                        olmuşdur, lakin son vaxtlar rəqabət çox böyük sürətlə
                        artır. Brendlər pərakəndə satış yerləri və artan bazar
                        payı uğrunda yarışırlar. FMCG və strategiya üzrə
                        konsultantlar hazırda həm istehsalçıların, həm də
                        pərakəndə satıcıların üzləşdiyi geniş problemləri təcili
                        həll etməlidirlər.
                    </p>
                    <p>
                        Bu sənaye dəyişən istehlakçı zövqlərinə uyğunlaşmalıdır.
                        Tənzimləmə mülahizələri və qablaşdırma tələblərindəki
                        son inkişaflar da təzyiqi artırır. Bu arada e-ticarət və
                        onlayn alış-verişin təsiri də göz qabağındadır.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default IndustryFMCG;
