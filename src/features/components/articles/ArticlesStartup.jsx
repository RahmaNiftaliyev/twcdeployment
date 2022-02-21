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
import articleImgPng2 from './assets/img/cargo-small.png';
import articleImgPng3 from './assets/img/finance-small.png';
import relatedArticleImgPng from './assets/img/ntflx.png';
import coverImgPng from './assets/img/startup-cover.png';
import sectionImgPng from './assets/img/startup-section.png';
import whiteArrow from '../../toolbox/buttons/svg/arrow-white.svg';

const ArticlesStartup = () => {
  const navigate = useNavigate();
  const handleNavigation = (paramsPath) => {
    navigate(paramsPath);
  };
  return (
    <div>
      <ArticleHeaderDash
        headerText="məqalələr/Startap/Azərbaycanın startap ekosİstemİnİn çətİnlİyİ hansılardır?"
        isArticle={true}
      />
      <section className={`${styles.container} d-flex`}>
        <section className={`${styles.content_container} d-flex direction-column`}>
          <img className={`${styles.cover_image}`} src={coverImgPng} alt="" />
          <p className={`${styles.article_title}`}>Azərbaycanın startap ekosisteminin çətinliyi hansılardır?</p>
          <section className={`${styles.article_paragraph}`}>
            <p>
              1997-ci ildə bir DVD kirayə mağaza kimi işə başlayan Netflix, 2020-ci ilin sonundan etibarən, 190-dan çox
              ölkədə fəaliyyət göstərərkən 204 milyon istifadəçisi və 25 milyard ABŞ dolları gəliri olan ən böyük
              subscription-əsaslı kontent izləmə oyunçusudur. Şirkətin bu müddətə qədərki inkişaf strategiyasını 4
              mərhələyə bölmək olar.
            </p>
            <p className={`${styles.paragraph_title}`}>
              TWC-də biz inanırıq ki, startap yaratmaq ən çətin, ancaq qurucuların karyeralarında özlərindən daha böyük
              bir şey yarada biləcəkləri ən vacib təşəbbüsdür.
            </p>
          </section>
          <img src={sectionImgPng} alt="" className={`${styles.section_image}`} />
          <section className={`${styles.article_paragraph}`}>
            <p className={`${styles.paragraph_title}`}>Qlobal və yerli:</p>
            <p>
              Qlobal bazarlarda startaplara olan marağın dollar baxımından trendi son illərlə müqayisədə hazırda hər
              dörd startap böyümə mərhələsi üçün rekord həddədir. Ancaq TWC-yə görə Azərbaycanın startap ekosistemi üç
              səbəbə əsasən qlobal tempi tutmaqdan bir xeyli uzaqdır, baxmayaraq ki, son onillikdə startaplara olan
              maraq həm sahibkarlarda, həm də istiqamətlənməsi mükəmməlikdən uzaq olan dövlət institutlarında
              yaranmışdır.
              <ul className={`${styles.list_group}`}>
                <li>
                  Birincisi, sahibkarlar tərəfindən sürətli MVP-lərin və sürətli feedback loopların yaradıla
                  bilinməməsidir.
                </li>
                <li>İkincisi, yerli investorlara keçidin limitli olması.</li>
                <li>
                  Üçüncü, dövlət institutları tərəfindən açıq olan maliyyələşmə kriteriyalarının sərt və qeyri-müəyyən
                  olması.
                </li>
              </ul>
            </p>
            <p className={`${styles.paragraph_title}`}>Bizim dəstəyimiz:</p>
            <p>
              TWC-nin peşəkar və startap təcrübəsi olan biznes konsultantlarının həm yerli həm də xarici bazarlarda
              startaplara fərqli böyümə mərhələlərində dəstəyi var. Əməliyyat tərəfdən, buna ideyanın qiymətlədirilməsi,
              MVP-nin yaradılması, ilk istifadəçilərin cəlb edilməsi, maliyyələşməyə hazırlanma, PMF-ə çatma və online &
              offline auditoriyanın qurulması daxildir. Maliyyələşmə tərəfdən, buna pre-seed, seed, Stage A, Stage A+ və
              Exit (VC, PE, Strateji Alıcı və IPO) maliyyələşməsi daxildir.
            </p>
            <p>TWC-də bizim şüarımız qeyri-müəyyənliyi qucaqlamaqdır.</p>
          </section>

          <section className={`${styles.article_footer} d-flex direction-column`}>
            <div className={`${styles.article_info}`}>
              <p className={`${styles.last_edited_time}`}> 7 Sentyabr, 2021</p>
              <p className={`${styles.author_name}`}>Anar İsmayılov</p>
            </div>
            <div className={`${styles.footer_another_details} d-flex justify-between`}>
              <div className={`${styles.label_section} d-flex align-center`}>
                <span className={`${styles.label_title}`}>Etiketlər:</span>
                <div className={`${styles.label_box}`}>Business</div>
                <div className={`${styles.label_box}`}>Start-up</div>
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
              onClick={() => handleNavigation('/ideas/logistics')}
            >
              <img className={`${styles.aside_latest_articles_img}`} src={articleImgPng2} alt="" />
              <div className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}>
                <p className={`${styles.aside_latest_articles_date}`}>23.12.2021</p>
                <p className={`${styles.aside_latest_articles_desc}`}>Azərbaycanda karqo şirkətləri...</p>
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
