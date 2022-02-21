// @ts-nocheck
import React from 'react';
import ArticleHeaderDash from './ArticleHeaderDash';
import Footer from './../../footer/Footer';
import { useNavigate } from 'react-router-dom';
import { SiInstagram } from 'react-icons/si';
import { ImLinkedin2, ImFacebook } from 'react-icons/im';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './articles.module.css';
// !----------------------------------------------------------
import coverImgPng from './assets/img/finance-cover.png';
import whiteArrow from '../../toolbox/buttons/svg/arrow-white.svg';
import articleImgPng1 from './assets/img/startup-small.png';
import articleImgPng2 from './assets/img/alcohol-small.png';
import articleImgPng3 from './assets/img/cargo-small.png';
import relatedArticleImgPng from './assets/img/ntflx.png';

const ArticlesFinance = () => {
  const navigate = useNavigate();
  const handleNavigation = (paramsPath) => {
    navigate(paramsPath);
  };
  return (
    <div>
      <ArticleHeaderDash
        headerText="məqalələr/MALİYYƏ/Söhbət şİrkətlərİn özlərİnİ malİyyələşdİrməsİndən..."
        isArticle={true}
      />
      <section className={`${styles.container} d-flex`}>
        <section className={`${styles.content_container} d-flex direction-column`}>
          <img className={`${styles.cover_image}`} src={coverImgPng} alt="" />
          <p className={`${styles.article_title}`}>
            {' '}
            Söhbət şirkətlərin özlərini maliyyələşdirməsindən gedirsə, cavab sadəcə faiz dərəcələrindən asılı deyil
          </p>
          <section className={`${styles.article_paragraph}`}>
            <p>
              İstər biznes əməliyyatları, inkişaf və genişləndirilmə üçün istərsə də başqa şirkət satınalınması, optimal
              maliyyələşmə (həm daxili həm də xarici) mənbələrinin seçilməsi vacibdir. BigTechs-lərin (Facebook, Apple,
              Amazon, Microsoft, and Google) balans hesabatı sahib olanlar istisna olmaqla, Azerbaycandakı bütün
              menecement komandalarının əməliyyatlarının bir nöqtəsində xarici kapitala çıxışa ehtiyac duyacaqlar və
              buna görə də onlar bu mənbələrin müsbət və mənfi cəhətlərindən xərbərdar olmalıdırlar. Lakin müsbət və
              mənfi cəhətlər sadəcə maliyyə xərclərindən asılı deyil, ilk növbədə menecement komandasının sadəcə həmin
              şirkətə xas olan biznes strategiyasından asılıdır. Beləliklə, bütün şirkətlərin özünü necə
              maliyyələşdirməli oluduğuna dair vahid cavab yoxdur.
            </p>
            <p>
              Hər şirkət üçün üç maliyyə mənbəyi var: daxili vəsaitlər, borc və kapital. Daxili maliyyələşməni borca və
              borcu kapitala üstün tutan bu sıralama TWC Analysis of the Global Financing Mix tədqiqatının nəticəsidir.
              Tədqiqat göstərir ki, şirkətlərin 70%-i daxili vəsaitlər, 20%-i borcla və 5-10%-isə kapital ilə
              maliyyələşir. Bundan əlavə, borc və ya kapital arasında seçimə gəldikdə isə, qlobal perspektivdə nəticə
              göstərir ki, qərara təsir edən əsas amil şirkətin fəaliyyət göstərdiyi bazarın hansı inkişaf mərhələsində
              olmasıdır. Yəni, inkişaf etmiş bazarlardakı şirkətlər kapital bazarlara daha yaxşı çıxış, səhmdarların
              müdafiəsi, daha çox private equity and venture capital maliyyəsi və ümumilikdə daha çox kapitala çıxışın
              imkanlarının olduğuna görə onlar daha çox kapitaldan istifadə edirlər, ancaq inkişaf etməkdə olan
              bazarlardakı şirkətlər isə əks səbəblərə görə borcdan (əsasən bank kreditlərindən) istifadə edirlər.
            </p>
            <p>
              İnkişaf etməkdə olan bazarlardakı şirkətlər üçün borc və kapitalın müsbət və mənfi tərəflərini başa düşmək
              üçün götürək, məsələn, Azərbaycanda bir icraçı direktor (nəzarət səhmdarı) ölkənin ən böyük taxta və ağac
              məhsulları istehsalçılarından biri olan Lumberwood ASC adlı şirkəti idarə edir və şirkət ağır maliyyə
              vəziyyətində olduğuna görə sağ qalmaq üçün maliyyəyə ehtiyacı duyur. Lumberwood ASC-nin vəziyyəti
              haqqqında qısa ideya versək, şirkət son illərdə sürətlə böyüyür və şirkət homogen məhsulların satışı ilə
              məşğuldur, bu o deməkdir ki, funksionallıqdan başqa bir şey təklif edə bilmədiyi üçün şirkət
              müştərilərindən qiymət premiumu tələb edə bilmir, buna görə də, şirkət əsas olaraq qiymət üzərində rəqabət
              aparmalı, xərclərə nəzarət etməli, yaxşı müştəri və təchizatçı münasibətləri saxlamalıdır. Lakin, yüksək
              satış həcmi (və minimal qros marja) daha çox likvidliyə tərcümə olunmadığı üçün daha çox avadanlıq, əmlak
              və inventorın alınmasına gətirib çıxarır və bu da özlüyündə xarici maliyyə ehtiyacının yaranmasına gətirib
              çıxarır. Bu vaxta kimi icraçı direktor bu maliyyələşmə boşluğunu qısamüddətli kredit ilə doldurub, ancaq
              bu maliyyələşmə kanalı kifayət etmədiyindən, direktorun daha çox maliyyə tapmağa ehtiyacı var. Bəs icraçı
              direktor hansı maliyyə mənbələrindən istifadə etməlidir?
            </p>
            <p>
              Əgər icraçı direktor çeviklik <span className={`${styles.bold_text}`}> (flexibility) </span>
              tələb edirsə o zaman faizlər, əhdlər və girovlardan ibarət olan borc optimal seçim olmaya bilər, çünki
              vəziyyət mənfiyə doğru gedərsə və faiz dərəcələri yüksəlsə, “aşağı marjanı” və “qiymət rəqabətini” nəzərə
              aldıqda, mənfəət az olduğu üçün Lumberwood ASC mənfəət yox zərər edə bilər. Kredit əhdləri isə borcun
              həcminə görə şirkətin gələcəkdə daha çox borc əldə etməsini məhdudlaşdıra bilər. Buna görə də, çevikliyə
              gəldikdə, kapital daha yaxşıdır.
            </p>
            <p>
              Əgər söhbət <span className={`${styles.bold_text}`}>riskdən</span> gedirsə, sual Lumberwood ASC-nin
              likvidlik sıxıntısı çəksə belə faiz və əsas borcun ödəmə qabiliyyətindən gedir. Belə desək, borc nə qədər
              yüksək olarsa, onu qaytara bilməmək, daha çox maliyyə sıxıntısı və iflas ehtimalı bir o qədər yüksəkdir
              (həm də səhmdarlar və borc sahibləri üçün daha çox risk deməkdir). Buna görə də, riskə gəldikdə, kapital
              daha yaxşıdır.
            </p>
            <p>
              Əgər söhbət <span className={`${styles.bold_text}`}> mənfəətə olan təsirdən</span> gedirsə, mənfəətə vergi
              müdafiəsi (tax shiel) və faiz ödənişləri təsir edir, buna görə də burada borcun artması ilə yaranan
              vergidən əvvəlki ROA (aktivlərin gəlirliliyi) borclanma dərəcəsindən yüksəkdirsə, burada Lumberwood ASC
              üçün borc kapitaldan daha yaxıdır, çünki borc ROE-ni (kapitalın gəlirliliyini artıracaq). Buna görə də,
              mənfəətə olan təsirə gəldikdə, borc daha yaxşıdır.
            </p>
            <p>
              Əgər söhbət <span className={`${styles.bold_text}`}>nəzarətdən</span> gedirsə, icraçı direktor əlavə
              səhmlərin buraxılışından yaranacaq mülkiyyət azalmasının şirkətdə qərarların qəbul edilməsinə necə təsir
              edəcəyini nəzərə almalıdır. Əgər icraçı direktor yeni səhmdarların mövcudluğu ideyasına müsbət baxmırsa,
              oz zaman o şəxsi vəsaitlərindən istifadə edərək Lumberwood ASC-yə olan riskini artıra bilər. Buna görə də,
              nəzarətə gəldikdə, borc daha yaxşıdır.
            </p>
            <p>
              Əgər söhbət <span className={`${styles.bold_text}`}> zamanlamadan</span> gedirsə, o zaman icraçı diektor
              bu suallara cavab verməlidir; kapital bazarları (borc və səhm bazarı) “mehribandırmı”? Faiz dərəcələri
              yüksək yoxsa aşağıdır, və ya hansı istiqamətə yönəlir? Lumberwood ASC-nin səhm buraxması üçün yaxşı
              vaxtdırmı? Buna görə də, zamanlamaya gəldikdə, bu tamamilə kapital bazarlarının isti və ya soyuq
              olmasından asılıdır.
            </p>
            <p>
              Əgər söhbət <span className={`${styles.bold_text}`}>başqa amillərdən </span> gedirsə, o zaman biz icraçı
              dirketor və digər səhmdarların borclara münasibətini bilməliyik. Doğrudur ki, borc menencement
              komandasının əvvəlkindən daha yaxşı işləməsi üçün nizam-intizam rolu var, lakin borcun səhmlərin
              reytinqinə necə təsir edəcəyini bilmək vacibdir.
            </p>
            <p>
              Buna görə də, Lumberwood ASC-nin icraçı direktorunun yeni səhmdarlara üstünlük vermək istəmədiyini fərz
              etsək, şirkət üçün ən optimal maliyyə mənbələri ya icraçı dirketorun şirkətə daha çox investisiya etməsi
              ya da əməliyyatların sabit davamı üçün uzunmüddətli borc almaqdır (qısamüddətli borclara etibar etmək
              əvəzinə) və yaxud bu iki seçimin qarışığını etmək. Əlavə olaraq, icraçı direktorun əlinin altında
              aktivlərin satışı, lizinq, faktorinq, private və venture capital maliyyələşdirməsi və sairə kimi digər
              alətlərdə var, ancaq bunlar verilən misalın sadəliyini qorumaq üçün nəzərə alınmamışdır.
            </p>
            <p>
              Sonda, Azərbaycandakı şirkətlərin borc və ya kapital arasında seçim etməsinə gəldikdə, hamının problemini
              həll edən bir həll yolu yoxdur, optimal qərar ilk növbədə hər şirkətin öz biznes strategiyasına əsaslanır.
            </p>
          </section>

          <section className={`${styles.article_footer} d-flex direction-column`}>
            <div className={`${styles.article_info}`}>
              <p className={`${styles.last_edited_time}`}>18 yanvar, 2022</p>
              <p className={`${styles.author_name}`}>Anar İsmayılov</p>
            </div>
            <div className={`${styles.footer_another_details} d-flex justify-between`}>
              <div className={`${styles.label_section} d-flex align-center`}>
                <span className={`${styles.label_title}`}>Etiketlər:</span>
                <div className={`${styles.label_box}`}>Business</div>
                <div className={`${styles.label_box}`}>finance</div>
                <div className={`${styles.label_box}`}>management</div>
                <div className={`${styles.label_box}`}>Consulting</div>
              </div>
              <div className={`${styles.share_section} d-flex align-center`}>
                <p className={`${styles.share_section_title}`}>Paylaş:</p>
                <a href="https://www.linkedin.com/company/think-wise-business-consulting">
                  <ImLinkedin2 className={`${styles.social_media_icon} nav-icon-margin-right`} />
                </a>
                <a href="https://www.facebook.com/thinkwiseazerbaijan/">
                  <ImFacebook className={`${styles.social_media_icon} nav-icon-margin-right`} />
                </a>
                <a href="https://www.instagram.com/thinkwise.consulting/">
                  <SiInstagram className={`${styles.social_media_icon}`} />
                </a>
              </div>
            </div>
          </section>
          <section className={`${styles.comment_section}`}>
            <p className={`${styles.comment_amount}`}>0 Rəy</p>
            <p className={`${styles.comment_form_title}`}>Məqaləyə ilk rəy bildirən siz olun</p>
            <section className={`${styles.comment_group_form}`}>
              <textarea placeholder="Rəy*" className={`${styles.input_for_comment}`} />
              <div className={`${styles.personal_info_input}`}>
                <input type="text" placeholder="Ad və Soyad*" className={`${styles.input_for_name}`} />
                <input type="text" placeholder="Email*" className={`${styles.input_for_email}`} />
              </div>
              <div className={`${styles.input_checbox_section} d-flex align-center`}>
                <input className={`${styles.input_checbox} `} type="checkbox" />
                <p className={`${styles.input_checbox_label} `}>
                  Növbəti dəfə şərh yazmaq üçün adımı və e-poçtumu bu brauzerdə yadda saxlayın.
                </p>
              </div>
              <button className={`${styles.form_submit_button}`}>
                Paylaş
                <img src={whiteArrow} alt="" />
              </button>
            </section>
          </section>
        </section>
        <section className={`${styles.aside_container}`}>
          <div className={`${styles.aside_box} d-flex direction-column `} onClick={() => handleNavigation('/ideas')}>
            <img className={`${styles.aside_box_img}`} src={relatedArticleImgPng} alt="" />
            <p className={`${styles.aside_box_title}`}>
              <span className={`${styles.aside_article_name}`}>Netflix </span> / Fikirlər
            </p>
            <p className={`${styles.aside_box_desc}`}>Netflix biznes modelini necə dəyişdi</p>
            <div className={`${styles.aside_box_icons}`}>
              {' '}
              <ImLinkedin2 className={`${styles.social_media_icon} nav-icon-margin-right`} />
              <ImFacebook className={` ${styles.social_media_icon} nav-icon-margin-right`} />
              <SiInstagram className={`${styles.social_media_icon}`} />
            </div>
          </div>
          <div className={`${styles.aside_latest_articles}`}>
            <p className={`${styles.aside_latest_articles_title}`}>Ən son məqalələr</p>
            <div
              className={`${styles.aside_latest_articles_box} d-flex`}
              onClick={() => handleNavigation('/ideas/startup')}
            >
              <img className={`${styles.aside_latest_articles_img}`} src={articleImgPng1} alt="" />
              <div className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}>
                <p className={`${styles.aside_latest_articles_date}`}>07.09.2021</p>
                <p className={`${styles.aside_latest_articles_desc}`}>Azərbaycanın startap ekosis...</p>
              </div>
            </div>
            <div
              className={`${styles.aside_latest_articles_box} d-flex`}
              onClick={() => handleNavigation('/ideas/alcohol')}
            >
              <img className={`${styles.aside_latest_articles_img}`} src={articleImgPng2} alt="" />
              <div className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}>
                <p className={`${styles.aside_latest_articles_date}`}>14.10.2021</p>
                <p className={`${styles.aside_latest_articles_desc}`}>Böyüyən qlobal industriya satışları...</p>
              </div>
            </div>
            <div
              className={`${styles.aside_latest_articles_box} d-flex`}
              onClick={() => handleNavigation('/ideas/logistics')}
            >
              <img className={`${styles.aside_latest_articles_img}`} src={articleImgPng3} alt="" />
              <div className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}>
                <p className={`${styles.aside_latest_articles_date}`}>23.12.2021</p>
                <p className={`${styles.aside_latest_articles_desc}`}>Azərbaycanda karqo şirkətləri...</p>
              </div>
            </div>
            <div className={`${styles.aside_search}`}>
              <input className={`${styles.aside_search_input}`} placeholder={`Axtar`} type="text" />
              <AiOutlineSearch className={`${styles.aside_search_input_icon}`} />
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default ArticlesFinance;
