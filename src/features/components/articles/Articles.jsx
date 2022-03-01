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
import whiteArrow from '../../toolbox/buttons/svg/arrow-white.svg';
import articleImgPng1 from './assets/img/alcohol-small.png';
import articleImgPng2 from './assets/img/cargo-small.png';
import articleImgPng3 from './assets/img/finance-small.png';
import relatedArticleImgPng from './assets/img/startup.png';
import coverImgPng from './assets/img/ntflx.png';

const Articles = () => {
  const navigate = useNavigate();
  const handleNavigation = (paramsPath) => {
    navigate(paramsPath);
  };
  return (
    <div>
      <ArticleHeaderDash headerText="məqalələr/NETFLix/NETFLix BİZNES MODELİNİ NECƏ DƏYİŞDİ" isArticle={true} />
      <section className={`${styles.container} d-flex`}>
        <section className={`${styles.content_container} d-flex direction-column`}>
          <img className={`${styles.cover_image}`} src={coverImgPng} alt="" />
          <p className={`${styles.article_title}`}> Netflix biznes modelini necə dəyişdi</p>
          <section className={`${styles.article_paragraph}`}>
            <p>
              1997-ci ildə bir DVD kirayə mağaza kimi işə başlayan Netflix, 2020-ci ilin sonundan etibarən, 190-dan çox
              ölkədə fəaliyyət göstərərkən 204 milyon istifadəçisi və 25 milyard ABŞ dolları gəliri olan ən böyük
              subscription-əsaslı kontent izləmə oyunçusudur. Şirkətin bu müddətə qədərki inkişaf strategiyasını 4
              mərhələyə bölmək olar.
            </p>
            <p className={`${styles.paragraph_title}`}>
              {' '}
              “Hər-DVD icarəsi üçün ödəniş konsepsiyasından aylıq sabit ödənişli subscription-a keçid”
            </p>

            <p>
              Birinci mərhələdə, idarə heyəti, sürətli böyüyən e-ticarətə addım atmaq üçün DVD’lərin VHS lentləri ilə
              müayisədə inventarlaşdırma və göndərmə xərclərinin üstünlüyünü nəzərə alaraq Netflixi dünyanın ilk DVD
              kirayə mağazası olaraq qurdular. Daha sonra biznes modeli hər-icare-üçün-ödənişdən
              aylıq-sabit-ödənişli-subscription konsepsiyasına çevrildi və bu nəticədə Blockbuster üzərində rəqabət
              üstünlüyü (limitsiz kirayə, son tarixsiz kirayə, cəriməsiz gecikmə, eyni gündə çatdırılma və s.) ilə
              nəticələndi. 2002-ci ildəki IPO-dan (İlkin Kütləvi Təklif) sonra, şirkət hələ də mənfəətə çatmasada,
              təxminən 1 milyon aylıq abunəçiyə sahib idi.
            </p>
            <p className={`${styles.paragraph_title}`}>
              {' '}
              “Online məhdudiyyətsiz kontent izləmənin industriyada inqilabı”
            </p>
            <p>
              İkinci mərhələdə, Netflix abunəçilərinə 2007-ci ildə fərdi kompüterlərdən anında məhdudiyyətsiz kontent
              izləmə imkanı təqdim edərək Media və Əyləncə industriasında inqilab etdi və 2019-cu ilin sonunda DVD
              seqmenti ümumi satışların 2%-dən azını təşkil etdi. Əlavə olaraq, Netflix-in strategiyası ABŞ-dan qonşu
              bazarlara genişlənmək idi. Demək olar ki, potensial bazarları ev-bazarına bənzər istifadəçi
              xüsusiyyətlərinə malik olanlara limitləmək məcburiyyətində qaldılar. Məsələn, coğrafi, iqtisadi və
              sosial-demoqrafik xüsusiyyətlərinə görə Kanadaya 2010-cu ildə daxil oldular.
            </p>
            <p className={`${styles.paragraph_title}`}> “Netflix Originals ilə unikal satış üstünlüyü”</p>
            <p>
              Üçüncü mərhələdə, komanda 2015-ci ilə qədər 50 ölkəyə genişlənərək daha sürətli genişlənmə strategiyası
              həyata keçirməyə başladı. Burada, genişlənmə strategiyasının mümkünlüyü üçün maliyyə cəhətdən dayanıqlı
              istifadəçi bazası, yüksək sürətli internetin mövcudluğu və ağıllı telefonlardan, tabletlərdən və smart
              televizorlardan geniş istifadə əsas faktorlar idi. Bununla birlikdə, başlanğıcda genişlənmənin sürəti bir
              neçə çətinliyə görə limitli idi. Birincisi, 2012 -ci ilə qədər Netflix öz kontentini istehsal etmirdi,
              buna görə də şirkət, kontent platformasını digər kontent izləmə vasitələrindən (məsələn, kabel TV)
              fərqləndirmək və müştəriləri Netflix-ə abunə olmağa inandırmaq üçün sadəcə özünə məxsus kontent təklif
              etməli idi. Bunun üçün isə qlobal lisenziya hüquqlarına sahib olmalı idi. İkincisi, Asiyada axın edən
              pirat kontent izləmı çox sıradandır. Buna görə də kontent Netflix-ə məxsus olmadıqda, Netflix-in unikal
              satış üstünlüyü o qədər də cəlbedici deyildi. Bu səbəbdən idarəetmə qrupunun bu problemlərə həlli,
              şirkətin kontent lisenziyasından müstəsna genişlik və keyfiyyətə malik kontent yaradıcısına çevrilməsini
              təmin edən Netflix Originals-ı (+1.500 kontent 2021 May etibarilə) yaradıb, ona fokuslanmaq idi.
            </p>
            <p className={`${styles.paragraph_title}`}> “İstifadəçi ehtiyaclarını qarşılayaraq qlobal genişlənmə”</p>

            <p>
              {' '}
              Dördüncü mərhələdə Netflix, daha çox hədəflənmiş bir məzmun istehsal modeli və daha hədəflənmiş bir
              marketinq modeli ilə çox sürətlə genişlənməsini dəstəkləmək üçün əlindən gələn hər şeyi etdi və nəticədə
              2020-ci ilə qədər 190-dan çox ölkəyə genişləndi. Keçən on illiyin əvvələrindən industrilaşmış ölkələrdə
              kabel kəsmə inqilabının bir hissəsi olaraq istifadəçilərin məzmun istehlakı zövqlərinin dəyişməsi
              səbəbindən bir çox rəqib artıq tədricən artan itki dərəcələri (churn rate) ilə üzləşməyə başladığı üçün
              Netflixin böyüməsi sadəcə müstəqil təkliflərdən deyil, həm də rəqib kabel televiziyaları ilə əməkdaşlıdan
              (məsələn, T-Mobile, Comcast) gəldi. Bundan əlavə, istifadəçi bazasının artması ilə Netflix iki istiqamətdə
              əhəmiyyətli sıçrayışlar etdi. Birincisi, istifadəçi məlumatları üzərində aparılan təcrübələr, kontentin
              orijinal olaraq yerli olarsa, platformanın qlobal auditoriya cəlb edə biləcəyi aşkar olundu. İkincisi,
              Netflix, inkişaf etməkdə olan bazarlarda istifadəçilərin mobil telefonları vasitəsi ilə internetə daxil
              olmağa meyilli olduqlarını aşkar etdi. Buna görə də şirkət daha aşağı sürətli internet ilə daha səmərəli
              content izləmə və daha rəqabətli aylıq abunə haqqı təklif etdi. Bu səbəbdən Asiya və Sakit Okean ölkələri
              istifadəçilərinin sayı 2017-ci ildə 7 milyondan 2021-ci ilin birinci yarısına 28 milyona yüksəldi.
            </p>
            <p>
              BigTechs (Amazon, Google, Apple və ənənəvi Media və Əyləncə şirkətləri tərəfindən hazirda axın edilən bir
              sənayedə, Netflix-in rəqabət üstünlüyünü qoruya biləcəyi və son on ildən bəri kabel kəsənlər tərəfindən
              dəstəklənən bazar artımını daha da ələ ala bilib ya da bilməyəcəyi qlobal Telekommunikasiya, Media və
              Əyləncə industriasının dinamikasının necə formalaşması üçün çox maraqlıdır.
            </p>
          </section>

          <section className={`${styles.article_footer} d-flex direction-column`}>
            <div className={`${styles.article_info}`}>
              <p className={`${styles.last_edited_time}`}> 8 Oktyabr, 2021</p>
              <p className={`${styles.author_name}`}>Anar İsmayılov</p>
            </div>
            <div className={`${styles.footer_another_details} d-flex justify-between`}>
              <div className={`${styles.label_section} d-flex align-center`}>
                <span className={`${styles.label_title}`}>Etiketlər:</span>
                <div className={`${styles.label_box}`}>Business</div>
                <div className={`${styles.label_box}`}>netflix</div>
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
                <img src={whiteArrow} alt="think wise business articles" />
              </button>
            </section>
          </section>
        </section>
        <section className={`${styles.aside_container}`}>
          <div
            className={`${styles.aside_box} d-flex direction-column `}
            onClick={() => handleNavigation('/ideas/startup')}
          >
            <img className={`${styles.aside_box_img}`} src={relatedArticleImgPng} alt="think wise business articles" />
            <p className={`${styles.aside_box_title}`}>
              <span className={`${styles.aside_article_name}`}>Startap </span> / Fikirlər
            </p>
            <p className={`${styles.aside_box_desc}`}>Azərbaycanın startap ekosisteminin çətinliyi hansılardır?</p>
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
              <img
                className={`${styles.aside_latest_articles_img}`}
                src={articleImgPng1}
                alt="think wise business articles"
              />
              <div className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}>
                <p className={`${styles.aside_latest_articles_date}`}>14.10.2021</p>
                <p className={`${styles.aside_latest_articles_desc}`}>Böyüyən qlobal industriya satışları...</p>
              </div>
            </div>
            <div
              className={`${styles.aside_latest_articles_box} d-flex`}
              onClick={() => handleNavigation('/ideas/logistics')}
            >
              <img
                className={`${styles.aside_latest_articles_img}`}
                src={articleImgPng2}
                alt="think wise business articles"
              />
              <div className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}>
                <p className={`${styles.aside_latest_articles_date}`}>23.12.2021</p>
                <p className={`${styles.aside_latest_articles_desc}`}>Azərbaycanda karqo şirkətləri...</p>
              </div>
            </div>
            <div
              className={`${styles.aside_latest_articles_box} d-flex`}
              onClick={() => handleNavigation('/ideas/finance')}
            >
              <img
                className={`${styles.aside_latest_articles_img}`}
                src={articleImgPng3}
                alt="think wise business articles"
              />
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
      <Footer/>
    </div>
  );
};

export default Articles;
