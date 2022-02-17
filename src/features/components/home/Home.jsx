// @ts-nocheck
import React, { useState,useEffect } from 'react';
import Gallery from '../../toolbox/gallery/Gallery';
import GalleryTestimonials from '../../toolbox/gallery/GalleryTestimonials';
import GalleryServices from '../../toolbox/gallery/GalleryServices';
import ChatBox from './../../toolbox/chat/ChatBox';
import ChatApp from './../../toolbox/chat/ChatApp';
import RoundedButton from '../../toolbox/buttons/RoundedButton';
import { Link, useNavigate } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useSelector } from 'react-redux';
import { selectAllIndustries } from '../industry/industriesSlice';
import { selectAllMembers }from '../about/aboutSlice';
import { selectAllServices } from './../services/servicesSlice'
import styles from './home.module.css';
import styles2 from './../about/about.module.css'
// !----------------------------------------------------------
import career from './assets/img/career.jpg';
import client1 from '../about/assets/img/customers/demirchi-tower.png';
import client2 from '../about/assets/img/customers/Prestij-kimya.png';
import client3 from '../about/assets/img/customers/absheron-sherab.png';
import client4 from '../about/assets/img/customers/antaris.png';
import client5 from '../about/assets/img/customers/baki-abadliq.png';
import client6 from '../about/assets/img/customers/az-minerals.png';
import client7 from '../about/assets/img/customers/Elbor.png';
import client8 from '../about/assets/img/customers/ima-energy.png';
import client9 from '../about/assets/img/customers/mansard.png';
import client10 from '../about/assets/img/customers/Oil-Supply.png';
import client11 from '../about/assets/img/customers/Prestij-kimya.png';
import client12 from '../about/assets/img/customers/tuv-austria.png';
import client13 from '../about/assets/img/customers/vipex-az.png';
import article1 from '../articles/assets/img/ntflx.png';
import article2 from '../articles/assets/img/alcohol-cover.png';
import article3 from '../articles/assets/img/cargo-cover.png';
import article4 from '../articles/assets/img/startup.png';





const Home = () => {


    const industries = useSelector(selectAllIndustries) ; 
    const allMembers = useSelector(selectAllMembers) ; 
    const allServices = useSelector(selectAllServices)
    const portfolioData = [client1,client2,client3,client4,client5,client6,client7,client8,client9,client10,client11,client12,client13]
    const [chatBoxView,setChatBoxView] = useState(true) ; 
    const [chatAppView,setChatAppView] = useState(false)
    const [isVisible,setIsVisible] = useState(false) ; 

 const handleScroll = () => {
   if(document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
    setIsVisible(true)
   } else {
     setIsVisible(false)
   }
 }

 window.addEventListener("scroll",handleScroll) ; 


    const handleBoxView = () => {
        setChatBoxView(false);
        setChatAppView(true)
    }

    const handleAppView = () => {
        setChatBoxView(true);
        setChatAppView(false);
    }


    const renderedIndustries =
           
                industries.map((ind,index) => {
                    return (
                         <Link to="/" className={`${styles.link_style_none }`}><span key={ind.id} className={`size-font-mb-span pointer hoverable-span ${index >= 8 &&  styles.margin_bottom_zero}`}>{ind.name}  {index % 3 === 0 && <span className={`${styles.mb_display_none}`}></span>}</span></Link>
                    )      
                })    
            
    const navigate = useNavigate();

    const handleNavigation = (paramsPath) => {
        navigate(paramsPath);
    }



    return (
        <main className={`mb-top-padding ${styles.main_padding}`}>
        <div className={`${styles.services}`}>
            <div className={`${styles.services_describtion}`}>
                <AnimationOnScroll animateIn="animate__backInLeft">
                    <h2 className='size-font-mb-h2'>Sizə necə kömək <br /> edə bilərik?</h2>
                </AnimationOnScroll>
                <p className='size-font-mb-p'>Özəl, dövlət və sosial təşkilatlarla əməkdaşlıq edərək,<br /> biz qlobal təcrübəmizi və yerli anlayışlarımızı <br />birləşdirərək real və davamlı dəyişiklik yaradırıq</p>
            </div>

            <div className={`${styles.services_list_container}`}>
                 <h2 className={`${styles.services_slider_header}`}>Servislərimiz</h2>
                 <GalleryServices
                        className="alice-without-image"
                        data={allServices} 
                        boxContainerClass={`${styles2.service_logo_group} d-flex  justify-between`}
                        boxClass={`${styles2.service_logo_box} d-flex direction-column align-center justify-center `} 
                        imgClass={`${styles2.service_logo}`}
                        spanClass={`${styles2.service_logo_sub_title}`}
                    />
            </div>

        </div>

        <div className='d-flex justify-end chat-box-container-keeper'>
           {chatBoxView && isVisible && <ChatBox clickViewController={handleBoxView} />} 
           {chatAppView && isVisible && <ChatApp clickViewController={handleAppView} />}
        </div>

        {/*Our team*/}
        <div className={`${styles.our_team}`}>
            <p>Professİonal komandamız</p>
            <h2>Ən son layihədə iştirak <br /> edən komanda üzvlərimiz </h2>
             <div className={`${styles.slide_dot}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className='galler-container'>
              <Gallery images={allMembers} localClassData={`${styles.team_card}`} />
        </div>
        <div className={`${styles.text_sec}`}>
            <p>Uğurlu biznes uğurlu biznes əlaqələri deməkdir. <span className={`${styles.line_home_divider}`}></span> Lakin bu əlaqələr müştərinin eşitmək istədiyini deməklə <span className={`${styles.line_home_divider}`}></span> yox, doğru olanı deməklə yaradılmalıdır.</p>
            <p>Aynur Nizamova, Biznes Konsultant</p>
        </div>

        <div className={`${styles.doing_business}`}>

            <div className={`${styles.doing_business_box}`}>
                <p>Daha çox</p>
                <p>Doing Business in Azerbaijan</p>

                <div className='d-flex justify-end' 
                onClick={()=> handleNavigation("/services/businessazerbaijan")}>
                    <RoundedButton  className={`${styles.doing_business_button}`} />
                </div>
                </div>
        </div>

        <div className={`${styles.carier}`}>
            <img src={career} alt="Home content description testimonials" />
            <div className={`${styles.carier_side2}`}>
                <AnimationOnScroll animateIn='animate__backInRight'>
                    <p>Karyera</p>
                    <h3>Karyeranıza bizimlə başlayın</h3>
                    <p className='mb-text-justify'>TWC-də məqsədimizin yeganə sütunu bizim
                        insanlarımızdır. Bizim dinamik mühitdə siz komanda
                        tərəfindən ilk gündən dəstək görməyinizə baxmayaraq,
                        siz öz yolunuzu müəyyən edəcəksiniz.</p>
                </AnimationOnScroll>
        <div onClick={()=> handleNavigation("/career")} className='display-mb-flex justify-mb-end mt-mb-2 mb-padding-right-home'>

                <RoundedButton  color="#17171766" className={`${styles.doing_business_button}`} />
        </div>
            </div>
        </div>


        <div className={`${styles.articles}`}>
            <AnimationOnScroll animateIn='animate__backInLeft'>
                <div className={`${styles.articles_A}`}>
                    <p>Lorem ipsum </p>
                    <h3>Məqalələr</h3>
                    <p>
                        Saytımızdan qeydiyyatdan keçərək sən <br /> də bizim məqalə yazarı ola bilərsən
                    </p>
                </div>
            </AnimationOnScroll>

            <div className={`${styles.articles_B}`}>
                <div className={`${styles.articles_card1}`} onClick={()=> handleNavigation("/ideas")}>
                    <img src={article1} alt="think wise business articles" />
                    <div className={`${styles.articles_card1_body}`}>
                        <h1>NETFLIX | MƏQALƏ</h1>
                        <h2>Netflix biznes modelini <br /> necə dəyişdi...</h2>
                        <p>1997-ci ildə bir DVD kirayə mağaza kimi işə başlayan Netflix, 2020-ci ilin sonundan etibarən, 190-dan çox ölkədə fəaliyyət göstərərkən 204 milyon istifadəçisi və 25 milyard ABŞ dolları gəliri olan ən böyük subscription-əsaslı kontent izləmə oyunçusudur.</p>
                        <RoundedButton />
                        <p>24 Avqust, 2021</p>
                    </div>
                </div>

                <div className={`${styles.articles_card2_container}`}>
                    <div className={`${styles.articles_card2} mt-mb-2  `} onClick={()=> handleNavigation("/ideas/startup")}>
                        <img src={article4} alt="think wise business articles" />
                        <div className={`${styles.articles_card2_body}`}>
                            <h2>STARTAP | MƏQALƏ</h2>
                            <p>Azərbaycanın startap ekosisteminin çətinliyi hansılardır?</p>
                            <p>7 Sentyabr, 2021</p>
                        </div>
                    </div>

                    <div className={`${styles.articles_card2}`} onClick={()=> handleNavigation("/ideas/alcohol")}>
                        <img src={article2} alt="think wise business articles" />
                        <div className={`${styles.articles_card2_body}`}>
                            <h2>ALKOQOL | MƏQALƏ</h2>
                            <p>Böyüyən qlobal industriya satışları istehlak dalğası üzərində deyil</p>
                            <p>7 Sentyabr, 2021</p>
                        </div>
                    </div>



                    <div className={`${styles.articles_card2}`} onClick={()=> handleNavigation("/ideas/logistics")}>
                        <img src={article3} alt="Home content description testimonials" />
                        <div className={`${styles.articles_card2_body}`}>
                            <h2>KARQO | MƏQALƏ</h2>
                            <p>Azərbaycanda karqo şirkətləri üzrə bazar araşdırması</p>
                            <p>7 Sentyabr, 2021</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>


        <div className={`${styles.client_projects}`}>
            <p>PORTFOLİO</p>
            <h2>Müştəri layihələrimiz</h2>
            <div className={`${styles.slide_dot}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>

               <div className="galler-container">
                  <GalleryTestimonials testimonialsData={portfolioData} localeClassData={`${styles.span_img_container}`} />
               </div>

        </div>

    </main>
    )
}

export default Home
