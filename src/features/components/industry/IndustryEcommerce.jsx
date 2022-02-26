// @ts-nocheck
import React from 'react';
import IndustryHeaderDash from './IndustryHeaderDash';
import Footer from './../../footer/Footer';
import styles from './industry.module.css';
// !----------------------------------------------------------
import headerImagePng from './assets/img/eticaret-header.png';
import sectionImagePng from './assets/img/eticaret-section.png';

const IndustryEcommerce = () => {
  return (
    <div>
      <IndustryHeaderDash headerText={'SƏNAYE/E-TİCARƏT'} isHeader={true} />
      <div className={`${styles.container}`}>
        <section className={`${styles.header_image_container} d-flex `}>
          <img src={headerImagePng} alt="" />
        </section>
        <section className={`d-flex direction-column`}>
          <span className={`${styles.header_subtitle}`}>Sənaye</span>
          <span className={`${styles.header_title}`}>E-ticarət</span>
        </section>
        <section className={`${styles.paragraph_section}`}>
          <p>
            E-ticarət, İnternet-ticarət kimi adlanan elektron kommersiya, şirkətlərə oz məhsul və xidmətlərini online
            üzərindən ticarət və ödənişlərini tamamlamaq üçün tranzaksiya əməliyyatlarını icra edən online sistemdir.
            Əsas dörd elektron ticarət modeli istehlakçılar və şirkətlər arasında əməliyyatların icrasına imkan yaradır.
          </p>
          <p>
            Bunlar B2B , B2C, C2C, C2B e-ticari əlaqələrdir ki, müştəri və bizneslər öz məhsul və xidmətlərini
            alqı-satqısını reallaşdırır. E-ticarətin fərqli formatda fəaliyyəti və tranzaksiyaların icrası istehlakçılar
            və istehsalçılar arasında təmin edir. Bu istiqamətdə TWC komandası olaraq sizin şirkətinizin harada olduğunu
            və onun e-ticarət strategiyasını ən yaxşı şəkildə analiz etmə imkanlarına malikik:
          </p>

          <p className={`${styles.paragraph_title}`}>Təcrübənin dəyərləndirilməsi</p>
          <p>
            Avtomatizasiya üzərindən (saytın dinamikası, standartlara uyğunluğu, veb-saytın funksionallığı və onlayn
            dəstək kimi sahələri əhatə edir) istifadə edərək, e-ticarət üzrə ekspert komandamız rəqamsal təcrübəni
            qiymətləndirirlər. Hesabları sənayelərarası verilənlər bazası ilə müqayisə edərək, biz güclü tərəfləri, zəif
            tərəfləri və diqqət edilməli istiqamətləri müəyyən edirik.
          </p>

          <p className={`${styles.paragraph_title}`}>Dizayn dəyərləndirməsi</p>
          <p>
            Bizim təqdim edəcəyimiz rəqəmsal təcrübə müştərinin nöqteyi-nəzərindən və onların gözləntilərini nəzərə
            alaraq araşdırılır. Sosial, etnoqrafik tədqiqat bizə müştərilərin e-ticarət kanalları ilə necə əlaqə
            saxladığını analiz etməyə imkan verir. Bu kanalların müştəri ehtiyaclarını nə qədər müsbət və ya mənfi
            şəkildə formalaşdırdığını, müştərilərə səhvlərin qarşısını almağa və onları bərpa etməyə kömək edir.
          </p>

          <p className={`${styles.paragraph_title}`}>Texniki dəyərləndirmə</p>
          <p>
            Bu diaqnostika cari online platformaları, performansı və inteqrasiyaları analiz etməyə və onların e-ticarət
            strategiyasını necə sürətləndirəcəyini və ona mane olacağını anlamağa kömək edir. Bu, texniki boşluqları
            analiz edərək və eləcə də onları bərpa edə biləcək yatırımları müəyyən etməyə imkan verir.
          </p>

          <p className={`${styles.paragraph_title}`}>Bacarıqların dəyərləndirilməsi</p>
          <p>
            Biz e-ticarət imkanlarını ölçmək üçün 100-dən çox ölçmə metodlarını əhatə edən və şirkətlərin sənayəsi
            müqayisə edərək hərtərəfli rəqamsal alətlərdən istifadə edirik. Bu, şirkətlərin korporativ imkanları
            baxımından hansı seqmentdə daha yaxşı ola biləcəyini və onların harada güclü olduqlarını prioritetləşməyə
            imkan verir.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default IndustryEcommerce;
