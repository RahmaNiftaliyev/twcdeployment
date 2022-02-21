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
import articleImgPng1 from './assets/img/alcohol-small.png';
import articleImgPng2 from './assets/img/startup-small.png';
import articleImgPng3 from './assets/img/finance-small.png';
import relatedArticleImgPng from './assets/img/ntflx.png';
import coverImgPng from './assets/img/cargo-cover.png';
import sectionImgPng from './assets/img/cargo-section.png';
import whiteArrow from '../../toolbox/buttons/svg/arrow-white.svg';

const ArticlesStartup = () => {
  const navigate = useNavigate();
  const handleNavigation = (paramsPath) => {
    navigate(paramsPath);
  };
  return (
    <div>
      <ArticleHeaderDash
        headerText="Məqalələr/Logİstİka/Komandamızın apardığı İlkİn araşdırmalara görə, Azərbaycanda hava..."
        isArticle={true}
      />
      <section className={`${styles.container} d-flex`}>
        <section className={`${styles.content_container} d-flex direction-column`}>
          <img className={`${styles.cover_image}`} src={coverImgPng} alt="" />
          <p className={`${styles.article_title}`}>Logistika</p>

          <section className={`${styles.article_paragraph}`}>
            <p>
              Komandamızın apardığı ilkin araşdırmalara görə, Azərbaycanda hava yükdaşıma şirkətlərini seçərkən qiymət,
              qəbul məntəqələri və sürət aparıcı amillərdir.
            </p>
            <p>
              Sənayedə nəzərə çarpacaq dərəcədə gərgin rəqabət aparıcı firmaları bazar payını artırmaq üçün yeni bir
              dəyər təklifi formalaşdırmağı tələb edir.
            </p>

            <p>
              Hal-hazırda təqribən 55 hava yükdaşıma şirkəti mövcuddur. Bununla belə, onların əksəriyyəti eyni dəyər
              təklifləri üzərində rəqabət aparır. 1A rəqabət meyarları:
            </p>
          </section>
          <img src={sectionImgPng} alt="" className={`${styles.section_image}`} />
          <section className={`${styles.article_paragraph}`}>
            <p>
              Qrafikdən də göründüyü kimi, firmaların əksəriyyəti dıyır təklifini bəyannamə doldurulma və konkret hədəf
              qruplarına müxtəlif tanıtım kampaniyaları təklif etməklə həyata keçirir. Karqo firmalarının əldə etməyə
              çalışdıqları digər mühüm amillər bölgələr daxilində qəbul məntəqələrinin sayını artırmaqdır.
            </p>

            <p>
              Bununla belə, bizim mövzu ilə bağlı ilkin və ikinci dərəcəli araşdırmalarımız Azərbaycanda yükdaşıma
              sənayesinin gələcəyinin firmaların öz müştərilərinə daha çox fərdiləşdirilmiş təkliflər həyata
              keçirəcəyini proqnozlaşdırır. Daha dəqiq desək, müştərilərinizi digərlərindən daha yaxşı tanımaq vaxtı
              artıq yetişib!
            </p>

            <p>
              Böyük onlayn B2C platformaları artıq bu strategiyanı qəbul ediblər. Məsələn, Amazon, Facebook və YouTube
              istifadəçilərinin nə istədiklərini onların özlərindən daha yaxşı bilir.
            </p>
          </section>
          <p className={`${styles.article_features_desc}`}>
            “Yüksək rəqabət və müştərilərin fərqlənən tələbləri Azərbaycandakı hava yükdaşıma şirkətlərini daha çox
            fərdiləşdirilmiş kampaniyalar təklif etmək üçün öz müştərilərinin məlumat bazasını toplayıb
            kateqoriyalaşdırmağın əhəmiyyətini artıracaq.”
          </p>
          <section className={`${styles.article_footer} d-flex direction-column`}>
            <div className={`${styles.article_info}`}>
              <p className={`${styles.last_edited_time}`}> 23 Dekabr, 2021</p>
              <p className={`${styles.author_name}`}>Çingiz Novruzzadə</p>
            </div>
            <div className={`${styles.footer_another_details} d-flex justify-between`}>
              <div className={`${styles.label_section} d-flex align-center`}>
                <span className={`${styles.label_title}`}>Etiketlər:</span>
                <div className={`${styles.label_box}`}>Business</div>
                <div className={`${styles.label_box}`}>Logistics</div>
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
              onClick={() => handleNavigation('/ideas/alcohol')}
            >
              <img className={`${styles.aside_latest_articles_img}`} src={articleImgPng1} alt="" />
              <div className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}>
                <p className={`${styles.aside_latest_articles_date}`}>14.10.2021</p>
                <p className={`${styles.aside_latest_articles_desc}`}>Böyüyən qlobal industriya satışları...</p>
              </div>
            </div>
            <div
              className={`${styles.aside_latest_articles_box} d-flex`}
              onClick={() => handleNavigation('/ideas/startup')}
            >
              <img className={`${styles.aside_latest_articles_img}`} src={articleImgPng2} alt="" />
              <div className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}>
                <p className={`${styles.aside_latest_articles_date}`}>07.09.2021</p>
                <p className={`${styles.aside_latest_articles_desc}`}>Azərbaycanın startap ekosis...</p>
              </div>
            </div>
            <div
              className={`${styles.aside_latest_articles_box} d-flex`}
              onClick={() => handleNavigation('/ideas/finance')}
            >
              <img className={`${styles.aside_latest_articles_img}`} src={articleImgPng3} alt="" />
              <div className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}>
                <p className={`${styles.aside_latest_articles_date}`}>18.01.2022</p>
                <p className={`${styles.aside_latest_articles_desc}`}>Söhbət şirkətlərin özlərini maliyyə...</p>
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

export default ArticlesStartup;
