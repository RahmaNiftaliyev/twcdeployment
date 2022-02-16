// @ts-nocheck
import React from 'react';
import IndustryHeaderDash from './IndustryHeaderDash';
import Footer from './../../footer/Footer';
import styles from './industry.module.css';
// !----------------------------------------------------------
import headerImagePng from './assets/img/techizat-header.png';
import sectionImagePng from './assets/img/techizat-section.png';

const IndustrySupplements = () => {
    return (
        <div>
            {' '}
            <IndustryHeaderDash
                headerText={'SƏNAYE/TƏCHİZAT'}
                isHeader={true}
            />
            <div className={`${styles.container}`}>
                <section className={`${styles.header_image_container} d-flex `}>
                    <img src={headerImagePng} alt="" />
                </section>
                <section className={`d-flex direction-column`}>
                    <span className={`${styles.header_subtitle}`}>Sənaye</span>
                    <span className={`${styles.header_title}`}>Təchizat</span>
                </section>
                <section className={`${styles.paragraph_section}`}>
                    <p>
                        Təchizat Zənciri (Supply Chain) şirkət və onun
                        təchizatçıları arasında olan bir şəbəkədir və məqsədi
                        müəyyən bir məhsulun istehsalı və alıcılar arasında
                        yayılmasıdır. Bu şəbəkəyə müxtəlif fəaliyyət növləri,
                        insanlar, qurumlar, məlumat və resurslar daxildir.
                        Təchizat Zənciri məhsulu orijinal vəziyyətindən
                        müştəriyə çatdırmaq üçün atdığı addımları əks etdirir.
                        Şirkətlər xərclərini azaltmaq və biznes mühitində
                        rəqabət aparmaq üçün təchizat zəncirlərini inkişaf
                        etdirirlər.
                    </p>
                    <p>
                        Təchizat Zəncirinin İdarə Edilməsi şirkətlərin
                        əksəriyyəti üçün vacibdir və böyük korporasiyalarda
                        yüzlərlə əlaqələri əhatə edə bilər, buna görə də xeyli
                        bacarıq və təcrübə tələb edilir. Nəticədə, Təchizat
                        Zəncirinin İdarə Edilməsi xərcləri azaldır və şirkətin
                        gəlirli olmasını təmin edir. Təchizat zənciri
                        xammalların hazır məhsullara çevrilməsi, bu məhsulların
                        daşınması və son istehlakçıya paylanması kimi bir sıra
                        mərhələləri əhatə edir.
                    </p>
                    <p>
                        Təchizat zəncirində iştirak edən təşkilatlar
                        istehsalçıları, təchizatçıları, anbarları, nəqliyyat
                        şirkətlərini, paylama mərkəzlərini və pərakəndə satış
                        şirkətlərini əhatə edir.
                    </p>
                </section>
                <section className={`${styles.section_image_container} d-flex`}>
                    <img src={sectionImagePng} alt="" />
                </section>
                <section className={`${styles.paragraph_section}`}>
                    <p>
                        Bugünkü biznes mühitində müştərilərin gözləntiləri
                        getdikcə müxtəlif, mürəkkəb və dəyişkən olur. Potensial
                        bazarlar və optimal istehsal yerləri daim dəyişir.
                        Üstəlik, prosesin qarşılıqlı asıllı olduğuna görə,
                        Təchizat Zənciri şəbəkələri iqtisadi nasazlıqlara qarşı
                        daha həssas olur.
                    </p>
                    <p>
                        Ağıllı şirkətlər tədarük zəncirlərini çevik, adaptiv və
                        davamlı etməklə bu təzyiqlərə cavab verirlər. Təchizat
                        zəncirinin strategiyasının ümumi biznes strategiyasını
                        əks etdirilməsi təmin edilir. Effektiv təchizat
                        idarəçiliyi tələbdəki kiçik dəyişikliklərə belə tez
                        reaksiya verir. Daha səmərəli və ekoloji təchizat
                        zəncirləri həm biznes, həm də ətraf mühitə fayda
                        gətirir. Bu və bu kimi amillər nəzərdə tutulmalıdır və
                        müasir biznesdə həyata keçirilməlidir.
                    </p>
                    <p>
                        Biz, Thinkwise Business Consulting, şirkətlərə təchizat
                        zəncirinin maksimum effektivliyinə nail olmağa kömək
                        edirik.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default IndustrySupplements;
