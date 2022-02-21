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
import articleImgPng1 from './assets/img/startup-small.png';
import articleImgPng2 from './assets/img/cargo-small.png';
import articleImgPng3 from './assets/img/finance-small.png';
import relatedArticleImgPng from './assets/img/ntflx.png';
import coverImgPng from './assets/img/alcohol-cover.png';
import graphImg1 from './assets/img/alcohol-graph-1.png';
import graphImg2 from './assets/img/alcohol-graph-2.png';
import whiteArrow from '../../toolbox/buttons/svg/arrow-white.svg';

const ArticlesAlcohol = () => {
  const navigate = useNavigate();
  const handleNavigation = (paramsPath) => {
    navigate(paramsPath);
  };

  return (
    <div>
      <ArticleHeaderDash
        headerText="MəqalələR/ALKOQOL/Böyüyən qlobal İndustrİya satışları İstehlak dalğası üzərİndə deyİl"
        isArticle={true}
      />
      <section className={`${styles.container} d-flex`}>
        <section className={`${styles.content_container} d-flex direction-column`}>
          <img className={`${styles.cover_image}`} src={coverImgPng} alt="" />
          <p className={`${styles.article_title}`}>
            {' '}
            Böyüyən qlobal industriya satışları istehlak dalğası üzərində deyil
          </p>
          <section className={`${styles.article_paragraph}`}>
            <p>
              Alkoqollu içkilər senayesinin yeni dövründə bir şey dəqiqdir: premiumizasiya bazar mənzərəsini həmişəlik
              dəyişəcək. Sürətli dəyişən istehlakçı davranışları rəqabət balansına təsir göstərdiyi üçün zəif oyunçular
              mövqelərini qorumaqda əziyyət çəkir.
            </p>
            <p>
              Qalib olmaq üçün oyunçular cəsarətli hərəkətlər etməlidir. Ancaq, hazırki premiumizasiya dalğasını
              üstələyə bilmək üçün alkoqol istehlakı trendlərinin şirkətlərin bizneslərinə necə təsir etdiyini və hansı
              strategiyaların tətbiq edilməsini tapmalıdır.
            </p>

            <p className={`${styles.paragraph_title}`}> Hazırki trendlər</p>
            <p>
              <span className={`${styles.bold_text}`}> Premiumizasiya:</span>
              Həm qlobal, həm də yerli perspektivdən baxdıqda dəyişən yaş strukturu və insanların səhhətlərinə olan
              diqqətləri alkoqol istehlakına mənfi təsir göstərir (aşağıdakı cədvələ nəzər yetirin); bir çox ölkədə
              alkoqol istehlakı ya mənfi ya da dəyişməz olaraq qalır.
            </p>
            <img src={graphImg1} alt="" className={`${styles.section_image}`} />
            <p>
              Ancaq bu, şirkətlər üçün satışların azalmasına səbəb olmur, əksinə daha yüksək qiymətlərə görə satışların
              artmasına gətirib çıxarır (aşağıdakı cədvələ nəzər yetirin) xüsusilə inkişaf etmiş və sənayeləşmiş
              ölkələrdə baxmayaraq ki, inkişaf etməkdə olan ölkələr üçün son illərdə istehlakın bazar həddinin yetişməsi
              müşahidə olunur.
            </p>
            <img src={graphImg2} alt="" className={`${styles.section_image}`} />
            <p>
              Ancaq bu, şirkətlər üçün satışların azalmasına səbəb olmur, əksinə daha yüksək qiymətlərə görə satışların
              artmasına gətirib çıxarır (aşağıdakı cədvələ nəzər yetirin) xüsusilə inkişaf etmiş və sənayeləşmiş
              ölkələrdə baxmayaraq ki, inkişaf etməkdə olan ölkələr üçün son illərdə istehlakın bazar həddinin yetişməsi
              müşahidə olunur.
            </p>
            <p>
              AB InBev, Heineken, DIAGEO, Pernod Ricard ve Constellation Brands kimi ən böyük qlobal oyunçulara
              baxdığımızda oxşar tendensiyanı fərqli formada görürük. Məsələn bu oyunçuların hamısı satışlarının əksər
              hissəsini bir neçə bestsellerlərdən edir, hansi ki, bu bestsellerlər aqressiv şəkildə marketinq
              kampaniyaları tərəfindən dəstəklənmişdir.
            </p>
          </section>
          <p className={`${styles.article_features_desc_alcohol}`}>
            “Azərbaycanda alkoqol istehsalçılarının sayı məhduddur, lakin bazar çoxlu sayda (təxmini 120) özəl etiketlər
            (private label) tərəfindən kannibalizasiyaya uğrayır”
          </p>
          <section className={`${styles.article_paragraph}`}>
            <p>Bir alkoqol istehsal edən şirkətin kommersiya direktoru</p>
            <p>
              Bu cür kampaniyalar nisbətən aşağı brend məlumatlılığı ilə xarakterizə olunan sektorda olduqca təsirli
              olduğu müşahidə olunur. Məsələn, çoxlu yerli ve xarici alkoqol brendləri tərəfindən retaillərin rəflərində
              yer buraxılmayan Azerbaycan kimi bir bazarda rəqabət əsas olaraq qiymət faktoruna əsaslanır, bu səbəbdən
              də müştərilərin istəklərini və ehtiyaclarını nəzərə alan düzgün brend strategiyası müştəriləri premium
              brendlərə “trade up”-a inandıracaqdır. Rəqabətə gəldikdə isə yerli alkoqol istehsalçıları böyüməyə təkan
              verən və özəl etiketlər üzərində böyük rəqabət üstünlüyü yaradan marketinq strategiyalarını yarada biləcək
              maliyyə və daxili nou-hau-ya sahibdir.
            </p>
            <p>
              Bu trendə əsasən istehlakçılara gəldikdə isə, ortalama olaraq, onlar daha çox içmək istəmirlər, “yaxşı”
              içmək istəyirlər. Həm qlobal, həm də yerli alkoqol istehlakçılarına gəldikdə isə onlar müştərilərə mümkün
              qədər daha yaxın olmalarını tələb edən yeni reallığa uyğunlaşmalıdırlar.
            </p>
            <p>
              <span className={`${styles.bold_text}`}> Sağlamlığa qayğı:</span> Sağlamlıqla əlaqəli narahtatlığın
              başında olan qara kölgə, istehsalçılara istehlakçıların saglamlığına vurğu edən brendlər vasitəsilə
              əhəmiyyətli bazar payı əldə etməyə şərait yaradır. Bu cür istehlakçı qrupları əsasən üst yaş qrupunda
              olanlardan və sağlamlıqlarına diqqət yetirən Milenniallardan ve Gen Z-dən ibarətdir. Belə bir trend
              öz-özlüyündə Alkoqolsuz və Az Alkoqollu İçkilər (AAAI) doldura biləcəyi kateqoriya genişlənməsinə ehtiyaca
              gətirib çıxarır. AB InBev kimi bəzi sektor oyunçuları üçün AAAI-nin sadəcə pivə kateoqiyası üçün 2025-ci
              ilə qədər ümumi satışların dörddə birini təşkil edəcəyini gözləyirlər.
            </p>
            <p>
              Buna görə, istehlakçıya gəldikdə, ortalama olaraq, onlar sadəcə yaxşı içmək istəmirlər, həm də daha sağlam
              içmək istəyirlər.
            </p>
            <p>
              <span className={`${styles.bold_text}`}> Satınalma tərzində dəyişiklik:</span>
              COVID-19-un başlanğıcından etibarən, e-ticarət sahəsində olan bir çox retailerlər üçün satışlar
              əhəmiyyətli dərəcədə artıb – bir çox regionda illik satışda artım 100%-in üzərində olub. Hazırda, həm
              qlobal həm də yerli bazarlarda retailerlərin illik və rüblük paylaşdığı məlumatlara əsasən alkoqolun
              onlayn satışı digər məhsul kateqoriyaları ilə müqayisədə xeyli aşağıdır. Millionarier’s Club-un
              araşdırmasına əsasən 2019-cu il ilə müqayisədə 2020-ci ildə alkoqolun qlobal e-ticaret satışları 45% artıb
              və nəzərə alsaq ki, Azerbaycanda e-ticarətə nüfuz dərəcəsi 2020-ci il üçün 33% olub (inkişaf etmiş
              ölkələrdə bu rəqəm 70%-in üzərindədir), bu isə istehsalçıların distribusiya kanallarını genişləndirərək
              satış artımı və mənfəət gətirə biləcəkləri imkanının olduğunu göstərir. Bu plan yüksək keyfiyyətli bir veb
              sayt və ya tətbiq, etibarlı logistika və dəqiq tənzimlənmiş inventar idarəçiliyini nəzərə almalıdır.
            </p>
          </section>

          <section className={`${styles.article_footer} d-flex direction-column`}>
            <div className={`${styles.article_info}`}>
              <p className={`${styles.last_edited_time}`}> 14 Oktyabr, 2021</p>
              <p className={`${styles.author_name}`}>Anar İsmayılov</p>
            </div>
            <div className={`${styles.footer_another_details} d-flex justify-between`}>
              <div className={`${styles.label_section} d-flex align-center`}>
                <span className={`${styles.label_title}`}>Etiketlər:</span>
                <div className={`${styles.label_box}`}>Business</div>
                <div className={`${styles.label_box}`}>Alcohol</div>
                <div className={`${styles.label_box}`}>management</div>
                <div className={`${styles.label_box}`}>Consulting</div>
              </div>
              <div className={`${styles.share_section} d-flex align-center`}>
                <p className={`${styles.share_section_title}`}>Paylaş:</p>
                <a href="https://www.linkedin.com/company/think-wise-business-consulting">
                  <ImLinkedin2 className={`${styles.social_media_icon}`} />
                </a>
                <a href="https://www.facebook.com/thinkwiseazerbaijan/">
                  <ImFacebook className={`${styles.social_media_icon}`} />
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

export default ArticlesAlcohol;
