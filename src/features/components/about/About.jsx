/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from 'react';
import GalleryServices from './../../toolbox/gallery/GalleryServices';
import Footer from './../../footer/Footer';
import AboutHeaderDash from './AboutHeaderDash';
import { useSelector } from 'react-redux';
import { selectAllServices } from './../services/servicesSlice';
import styles from './about.module.css';
// !----------------------------------------------------------
import topicImage1 from './assets/img/about-us/topic-1.png';
import topicImage2 from './assets/img/about-us/topic-2.png';
import topicImage3 from './assets/img/about-us/topic-3.png';
import topicImage4 from './assets/img/about-us/topic-4.png';
import valuesImage1 from './assets/img/about-us/values-1.png';
import valuesImage2 from './assets/img/about-us/values-2.png';
import valuesImage3 from './assets/img/about-us/values-3.png';
import aboutmain from './assets/img/aboutheader.png';

const About = () => {
  const allServices = useSelector(selectAllServices);

  return (
    <div>
      <AboutHeaderDash
        isBlack={true}
        img={aboutmain}
        textStructure={'Biznes planlarınız və strategiyalarınız üçün ekspert məsləhətləri'}
        textStructureData={'Expert advice for your business plans and strategies'}
      />
      <section className={`${styles.services_header} d-flex direction-column justify-center align-center`}>
        <span className={`${styles.service_sub_title}`}>ProfESSİONAL KOMANDAMIZLA</span>
        <span className={`${styles.service_title}`}>Konsaltinq Servislərimiz</span>
        <div className={`${styles.circle_options} d-flex justify-between`}>
          <div className={`${styles.circle} ${styles.activ_circle}`}></div>
          <div className={`${styles.circle} `}></div>
          <div className={`${styles.circle} `}></div>
        </div>
        <GalleryServices
          className="alice-without-image"
          data={allServices}
          boxContainerClass={`${styles.service_logo_group} d-flex  justify-between`}
          boxClass={`${styles.service_logo_box} d-flex direction-column align-center justify-center `}
          imgClass={`${styles.service_logo}`}
          spanClass={`${styles.service_logo_sub_title}`}
        />
      </section>

      <div className={`${styles.container}`}>
        <section className={`${styles.topic_section} d-flex`}>
          <div className={`${styles.image_section}`}>
            <img className={`${styles.topic_image}`} src={topicImage1} alt="" />
          </div>
          <div className={`${styles.paragraph_section} d-flex direction-column justify-center`}>
            <span className={`${styles.sub_header}`}>LOREM IPSUM</span>
            <p className={`${styles.topic_desc}`}>
              TWC cəmiyyətin və bizneslərin <br /> ən əhəmiyyətli problemlərini həll etmək üçün kreativliyin <br />{' '}
              sərhədlərinin olmadığı yerdir
            </p>
          </div>
        </section>

        <section className={`${styles.topic_section} d-flex`}>
          <div className={`${styles.paragraph_section} d-flex direction-column justify-center`}>
            <span className={`${styles.sub_header}`}>LOREM IPSUM</span>
            <p className={`${styles.topic_desc}`}>
              Biz 2018-ci ildə qurulan Azərbaycanın ilk yerli menecment konsaltinq şirkətiyik.
            </p>
          </div>
          <div className={`${styles.image_section} `}>
            <img className={`${styles.topic_image}`} src={topicImage2} alt="" />
          </div>
        </section>

        <section className={`${styles.topic_section} d-flex`}>
          <div className={`${styles.image_section}`}>
            <img className={`${styles.topic_image}`} src={topicImage3} alt="" />
          </div>
          <div className={`${styles.paragraph_section} d-flex direction-column justify-center`}>
            <span className={`${styles.sub_header}`}>LOREM IPSUM</span>
            <p className={`${styles.topic_desc}`}>
              Bugün biz ən böyük oyunçulara <br /> sənayeni müəyyən edən <br /> problemləri həll etməkdə və <br />{' '}
              davamlı biznes dəyəri <br /> yaratmaqda kömək edirik.
            </p>
          </div>
        </section>

        <section className={`${styles.topic_section} d-flex`}>
          <div className={`${styles.paragraph_section} d-flex direction-column justify-center`}>
            <span className={`${styles.sub_header}`}>LOREM IPSUM</span>
            <p className={`${styles.topic_desc}`}>
              Komandamız özünə məhdudiyyət tanımayan və müştərilərə dəstək üçün özündə qlobal təcrübə və <br /> lokal
              anlayışı birləşdirənlərdən ibarətdir.
            </p>
          </div>
          <div className={`${styles.image_section} `}>
            <img className={`${styles.topic_image}`} src={topicImage4} alt="" />
          </div>
        </section>
      </div>

      <section className={`${styles.extra_services_section} d-flex direction-column align-center`}>
        <span className={`${styles.sub_header}`}>lorem ipsum</span>
        <span className={`${styles.service_details_title}`}>Dəyərlərimiz</span>
        <div className={`${styles.circle_options} d-flex justify-between`}>
          <div className={`${styles.circle} ${styles.activ_circle}`}></div>
          <div className={`${styles.circle} `}></div>
          <div className={`${styles.circle} `}></div>
        </div>
        <div className={`${styles.image_item_group} d-flex flex-wrap justify-between`}>
          <div className={`${styles.image_item_section}`}>
            <img className={`${styles.image_item}`} src={valuesImage1} alt="" />
            <span className={`${styles.image_subtitle}`}>Dürüstlük</span>
            <p className={`${styles.image_item_desc}`}>
              Etdiyimiz və dediyimiz hər şeydə intellektual dürüstlük kodu izlənilməlidir.
            </p>
          </div>
          <div className={`${styles.image_item_section}`}>
            <img className={`${styles.image_item}`} src={valuesImage2} alt="" />
            <span className={`${styles.image_subtitle}`}>Əməkdaşlıq</span>
            <p className={`${styles.image_item_desc}`}>
              Hər bir daxili və xarici TWC biznes əlaqəsi uzun müddətli olmalıdır.
            </p>
          </div>
          <div className={`${styles.image_item_section}`}>
            <img className={`${styles.image_item}`} src={valuesImage3} alt="" />
            <span className={`${styles.image_subtitle}`}>Fərqlilik</span>
            <p className={`${styles.image_item_desc}`}>
              Sıradan olmayan nəticələr əldə etmək üçün hər bir təcrübəyə, bacarığa və biliyə hörmət edilməlidir.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
