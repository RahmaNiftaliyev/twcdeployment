// @ts-nocheck
import React from "react";
import Footer from './../../footer/Footer'
import IndustryHeaderDash from "./IndustryHeaderDash";
import styles from "./industry.module.css";
// !----------------------------------------------------------
import headerImagePng from "./assets/img/tikinti-header.png";
import sectionImagePng from "./assets/img/tikinti-section.png";



const IndustryArchitect = () => {
  return (
    <div>
      <IndustryHeaderDash headerText={"SƏNAYE/TİKİNTİ"} isHeader={true} />
      <div className={`${styles.container}`}>
        <section className={`${styles.header_image_container} d-flex `}>
          <img src={headerImagePng} alt='' />
        </section>
        <section className={`d-flex direction-column`}>
          <span className={`${styles.header_subtitle}`}>Sənaye</span>
          <span className={`${styles.header_title}`}>Tikinti</span>
        </section>
        <section className={`${styles.paragraph_section}`}>
          <p>
            Tikinti bir çox inşaat və mülki mühəndislik işlərindən ibarət geniş
            bir sənayedir. Tikinti sənayesi dülgərlik işləri, yolların
            tikintisi, körpülərin tikintisi və evlərin dizaynı üzrə işləri əhatə
            edir. Bu sahə dünyanın ən böyük sahələrindən biridir, çünki şəhər,
            qəsəbə və ölkələr üçün infrastrukturun yaradılmasına məsuldur.
          </p>
          <p>
            Binanın və infrastrukturun tikintisi, sökülməsi, təmiri Tikinti
            sənayesinə daxildir. Bu sənaye həm də planlaşdırma və ölçmə
            işlərindən tutmuş struktur tikintiyə, rəngləmə və dekorasiya kimi
            tamamlama xidmətlərinə qədər geniş çeşidli xidmətləri əhatə edir.
          </p>
          <p>
            Ümumiyyətlə, tikinti layihələrinin üç əsas növü var: 1. Yaşayış
            layihələri (evlər, binalar və qarajlar), 2. Qeyri-yaşayış layihələri
            (böyük və kiçik ticarət binaları, o cümlədən mağazalar, kilsələr,
            məktəblər və xəstəxanalar) 3. Mühəndislik layihələri (körpülər,
            yollar və su anbarları). Bir çox biznes növləri bu sektorların hər
            üçü ilə bağlıdır.
          </p>
          <p>
            Tikinti layihələrini dövlət və özəl layihələrə də bölmək mümkündür.
            Özəl tikinti fərdi sahibkarlar üçün görülən tikinti işləridir və
            şəxsi vəsaitlər hesabına ödənilir. İctimai layihələr federal, əyalət
            və ya yerli hökumət agentlikləri üçün tamamlanır və adətən vergi
            pulları, istiqrazlar və ya digər ictimai fondlar hesabına ödənilir.
          </p>
        </section>

        <section className={`${styles.section_image_container} d-flex`}>
          <img src={sectionImagePng} alt='' />
        </section>

        <section className={`${styles.paragraph_section}`}>
          <p>
            Tikinti sənayesi dünyanın ən böyük sənayelərindən biridir və yalnız
            böyüməsi gözlənilir. Bununla belə, konsultantların köməyi ilə
            optimallaşdırılmalı olan çox şey var. Sual yaranır ki, tikinti
            layihələrində konsultantlar üçün tipik vəzifələr hansılardır?
          </p>
          <p>
            Məsləhətçilər layihə əsasında və çox vaxt yüksək ixtisaslaşdırılmış
            tapşırıqlarla işləyirlər. Konsultantların funksiyaları tikinti
            layihəsinə görə dəyişir. Tipik konsultant rollarına layihə
            menecerləri, memarlar, xidmət mühəndisləri, eləcə də xərc
            məsləhətçiləri daxildir. Tikinti layihələrində məsləhətçilərin rolu
            gecikmələrin və səhvlərin qarşısını almaq, əməliyyat məqsədlərinizə
            nail olmaq, binanızın investisiyalarının rentabelliyini artırmaq və
            ümumiyyətlə tikinti prosesini daha səmərəli etməkdən ibarət ola
            bilər.
          </p>
          <p>
            Məsələ burasındadır ki, məsləhətçilər problemlər ortaya çıxmasa
            belə, onların qabaqcadan qarşısını ala bilərlər. Üstəlik,
            konsultanta ehtiyyaclara uyğun çevik şəkildə qaimə xərcləri olmadan
            işləmək mümkündür. Nəzərə almağa dəyər ki, məsləhətçilərlə nə qədər
            tez müqavilə imzalanırsa, bir o qədər çox şey də həyata keçirilə
            bilər.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default IndustryArchitect;
