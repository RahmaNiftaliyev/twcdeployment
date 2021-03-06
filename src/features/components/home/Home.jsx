// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Gallery from '../../toolbox/gallery/Gallery';
import GalleryTestimonials from '../../toolbox/gallery/GalleryTestimonials';
import ChatBox from './../../toolbox/chat/ChatBox';
import ChatApp from './../../toolbox/chat/ChatApp';
import EmailService from './../../toolbox/chat/EmailService';
import RoundedButton from '../../toolbox/buttons/RoundedButton';
import DefaultButton from '../../toolbox/buttons/DefaultButton';
import { Link, useNavigate } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useSelector } from 'react-redux';
import { selectAllIndustries } from '../industry/industriesSlice';
import { selectAllTestimonials } from './../testimonials/testimonialsSlice';
import styles from './home.module.css';
// !----------------------------------------------------------
import career from './assets/img/career.jpg';
import article1 from '../articles/assets/img/ntflx.png';
import article2 from '../articles/assets/img/alcohol-cover.png';
import article3 from '../articles/assets/img/cargo-cover.png';
import article4 from '../articles/assets/img/startup.png';
import Business from '../business/Business';
import BusinessModel from '../business/BusinessModel';
import Team from '../team/Team';

const Home = ({ homeProps }) => {
  const navigate = useNavigate();
  const industries = useSelector(selectAllIndustries);
  const [firstMessageEmail, setFirstMessageEmail] = React.useState(false);
  const [display, setDisplay] = useState(false);

  const testimonialsData = useSelector(selectAllTestimonials).map((testimonial) => {
    return testimonial.img;
  });

  const handleNavigation = (paramsPath) => {
    navigate(paramsPath);
  };

  const handleNavigateArticle = () => {
    navigate('/ideas');
  };

  const handleScroll = () => {
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
      homeProps.visibleChatMethod(true);
    } else {
      homeProps.visibleChatMethod(false);
    }
  };

  const renderedIndustries = industries.map((industry, index) => (
    <div
      key={industry.id}
      className={styles.business_item}
      onClick={() => {
        handleNavigation(industry.link);
      }}
    >
      <img src={industry.img} className={`${styles.industry_images}`} alt={`industries service ${industry.name}`} />
      <p className={`${styles.industry_names}`}>{industry.name}</p>
    </div>
  ));

  window.addEventListener('scroll', handleScroll);

  return (
    <main className={`mb-top-padding ${styles.main_padding}`}>
      <BusinessModel display={display} renderedIndustries={renderedIndustries} setDisplay={setDisplay} />
      <div className={`${styles.services}`}>
        <div className={`${styles.services_describtion}`}>
          <AnimationOnScroll animateIn="animate__backInLeft">
            <h2 className={`size-font-mb-h2`}>
              Siz?? nec?? k??m??k <br /> ed?? bil??rik?
            </h2>
          </AnimationOnScroll>
          <p className="size-font-mb-p">
            ??z??l, d??vl??t v?? sosial t????kilatlarla ??m??kda??l??q ed??r??k,
            <span className={`${styles.line_home_divider}`}></span> biz qlobal t??cr??b??mizi v?? yerli anlay????lar??m??z??
            <span className={`${styles.line_home_divider}`}></span> birl????dir??r??k real v?? davaml?? d??yi??iklik yarad??r??q
          </p>
        </div>

        <div className={`${styles.services_list_container}`}>
          <h2 className={`${styles.mt_40_1} ${styles.header_margin_left}`}>Sizin biznes istiqam??tiniz?</h2>
          <AnimationOnScroll animateIn="animate__backInRight">
            <div className={`flex-mb-column flex-mb-column mb-align-center display-mb-flex ${styles.mt_40_1}`}>
              <Business display={display} renderedIndustries={renderedIndustries} setDisplay={setDisplay} />
            </div>
          </AnimationOnScroll>
        </div>
      </div>

      <div
        className={`d-flex justify-end ${homeProps.chatAppView ? 'justify-mb-center' : ''} chat-box-container-keeper`}
      >
        {!display && homeProps.chatBoxView && homeProps.isVisibleChat && <ChatBox clickViewController={homeProps.chatBoxMethod} />}
        {homeProps.chatAppView && homeProps.isVisibleChat && (
          <ChatApp
            firstMessageEmail={firstMessageEmail}
            setFirstMessageEmail={setFirstMessageEmail}
            clickViewController={homeProps.chatAppMethod}
          />
        )}
        {
          <EmailService
            firstMessageEmail={firstMessageEmail}
            setFirstMessageEmail={setFirstMessageEmail}
            clickViewController={homeProps.chatAppMethod}
          />
        }
      </div>
      <div className="team-container">
        <Gallery />
      </div>
      <div className={`${styles.text_sec}`}>
        <p>
          U??urlu biznes u??urlu biznes ??laq??l??ri dem??kdir. <span className={`${styles.line_home_divider}`}></span> Lakin
          bu ??laq??l??r m????t??rinin e??itm??k ist??diyini dem??kl?? <span className={`${styles.line_home_divider}`}></span> yox,
          do??ru olan?? dem??kl?? yarad??lmal??d??r.
        </p>
        <p>Aynur Nizamova, Biznes Konsultant</p>
      </div>

      <div className={`${styles.doing_business}`}>
        <div className={`${styles.doing_business_box}`}>
          <p>Daha ??ox</p>
          <p>Doing Business in Azerbaijan</p>

          <div className="d-flex justify-end" onClick={() => handleNavigation('/services/businessazerbaijan')}>
            <RoundedButton className={`${styles.doing_business_button}`} />
          </div>
        </div>
      </div>

      <div className={`${styles.carier}`}>
        <img src={career} alt="Home content description testimonials" />
        <div className={`${styles.carier_side2}`}>
          <AnimationOnScroll animateIn="animate__backInRight">
            <p>Karyera</p>
            <h3>Karyeran??za biziml?? ba??lay??n</h3>
            <p className="mb-text-justify mt-15">
              TWC-d?? m??qs??dimizin yegan?? s??tunu bizim <span className={`${styles.line_home_divider}`}></span>
              insanlar??m??zd??r. Bizim dinamik m??hitd?? siz komanda <span className={`${styles.line_home_divider}`}></span>
              t??r??find??n ilk g??nd??n d??st??k g??rm??yiniz?? baxmayaraq,
              <span className={`${styles.line_home_divider}`}></span>
              siz ??z yolunuzu m????yy??n ed??c??ksiniz.
            </p>
          </AnimationOnScroll>
          <div
            onClick={() => handleNavigation('/career')}
            className={`display-mb-flex justify-mb-end mt-mb-2 mb-padding-right-home ${styles.mt_40_1}`}
          >
            <RoundedButton color="#17171766" className={`${styles.doing_business_button}`} positioned="40px" />
          </div>
        </div>
      </div>

      <div className={`${styles.articles}`}>
        <AnimationOnScroll animateIn="animate__backInLeft">
          <div className={`${styles.articles_A}`}>
            <h3>M??qal??l??r</h3>
            <p>
              Sayt??m??zdan qeydiyyatdan ke????r??k s??n <br /> d?? bizim m??qal?? yazar?? ola bil??rs??n
            </p>
            <DefaultButton
              contentData={'??trafl??'}
              handleNavigation={handleNavigateArticle}
              classData={`button-detailed-dark ${styles.default_button_margin_top}`}
            />
          </div>
        </AnimationOnScroll>

        <div className={`${styles.articles_B}`}>
          <div className={`${styles.articles_card1}`} onClick={() => handleNavigation('/ideas')}>
            <img src={article1} alt="think wise business articles" />
            <div className={`${styles.articles_card1_body}`}>
              <h1>NETFLIX | M??QAL??</h1>
              <h2>
                Netflix biznes modelini <br /> nec?? d??yi??di...
              </h2>
              <p>
                1997-ci ild?? bir DVD kiray?? ma??aza kimi i???? ba??layan Netflix, 2020-ci ilin sonundan etibar??n, 190-dan
                ??ox ??lk??d?? f??aliyy??t g??st??r??rk??n 204 milyon istifad????isi v?? 25 milyard AB?? dollar?? g??liri olan ??n b??y??k
                subscription-??sasl?? kontent izl??m?? oyun??usudur.
              </p>
            </div>
            <p>24 Avqust, 2021</p>
          </div>

          <div className={`${styles.articles_card2_container}`}>
            <div className={`${styles.articles_card2} mt-mb-2  `} onClick={() => handleNavigation('/ideas/startup')}>
              <img src={article4} alt="think wise business articles" />
              <div className={`${styles.articles_card2_body}`}>
                <h2>STARTAP | M??QAL??</h2>
                <p>Az??rbaycan??n startap ekosisteminin ????tinliyi hans??lard??r?</p>
                <p>7 Sentyabr, 2021</p>
              </div>
            </div>

            <div className={`${styles.articles_card2}`} onClick={() => handleNavigation('/ideas/alcohol')}>
              <img src={article2} alt="think wise business articles" />
              <div className={`${styles.articles_card2_body}`}>
                <h2>ALKOQOL | M??QAL??</h2>
                <p>B??y??y??n qlobal industriya sat????lar?? istehlak dal??as?? ??z??rind?? deyil</p>
                <p>14 Oktyabr, 2021</p>
              </div>
            </div>

            <div className={`${styles.articles_card2}`} onClick={() => handleNavigation('/ideas/logistics')}>
              <img src={article3} alt="Home content description testimonials" />
              <div className={`${styles.articles_card2_body}`}>
                <h2>KARQO | M??QAL??</h2>
                <p>Az??rbaycanda karqo ??irk??tl??ri ??zr?? bazar ara??d??rmas??</p>
                <p>23 Dekabr, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.client_projects}`}>
        <p>PORTFOL??O</p>
        <h2>M????t??ri layih??l??rimiz</h2>
        <div className={`${styles.slide_dot}`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="galler-container">
          <GalleryTestimonials testimonialsData={testimonialsData} localeClassData={`${styles.span_img_container}`} />
        </div>
      </div>
    </main>
  );
};

export default Home;
