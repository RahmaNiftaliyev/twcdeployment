// @ts-nocheck
import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ImFacebook, ImLinkedin2 } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useSelector } from 'react-redux';
import RoundedButton from '../../toolbox/buttons/RoundedButton';
import { selectAllIndustries } from '../industry/industriesSlice';
import styles from './home.module.css';
import team_mem1 from './assets/img/team-chingiz.png';
import team_mem2 from './assets/img/team-aynur.png';
import team_mem3 from './assets/img/team-ramazan.png';
import team_mem4 from './assets/img/team-mehemmed.png';
import team_mem5 from './assets/img/team-question.png';
import team_mem6 from './assets/img/team-aynure.jpg';
import doingbusiness from './assets/img/doingbusiness.jpg';
import career from './assets/img/career.jpg';
import client1 from '../about/assets/img/customers/demirchi-tower.png';
import client2 from '../about/assets/img/customers/Prestij-kimya.png';
import client3 from '../about/assets/img/customers/absheron-sherab.png';
import article1 from '../articles/assets/img/ntflx.png';
import article2 from '../articles/assets/img/alcohol-cover.png';
import article3 from '../articles/assets/img/cargo-cover.png';
import article4 from '../articles/assets/img/startup.png';




const Home = () => {


    const industries = useSelector(selectAllIndustries) ; 

    const renderedIndustries =   
           
                industries.map((ind,index) => {
                    return (
                         <Link to="/" className={`${styles.link_style_none }`}><span key={ind.id} className={`size-font-mb-span pointer hoverable-span ${index >= 8 &&  styles.margin_bottom_zero}`}>{ind.name}  {index % 3 === 0 && <span className={`${styles.mb_display_none}`}></span>}</span></Link>
                    )      
                })    
            
   


    const navigate = useNavigate();



    const handleNavigation = (paramsPath) => {
        navigate(paramsPath);
    };

    const [slider,setSlider] = useState(false);



    useEffect(() => {
        setInterval(() => setSlider(!slider),3000);
    },[slider]);



    return (
        <main className={`mobile-padding  mb-top-padding ${styles.main_padding}`}>
        <div className={`${styles.services}`}>
            <div className={`${styles.services_describtion}`}>
                <AnimationOnScroll animateIn="animate__backInLeft">
                    <h2 className='size-font-mb-h2'>Sizə necə kömək <br /> edə bilərik?</h2>
                </AnimationOnScroll>
                <p className='size-font-mb-p'>Özəl, dövlət və sosial təşkilatlarla əməkdaşlıq edərək,<br /> biz qlobal təcrübəmizi və yerli anlayışlarımızı <br />birləşdirərək real və davamlı dəyişiklik yaradırıq</p>
            </div>

            <div className={`${styles.services_list_container}`}>
                <h2>1. Sizin biznes istiqamətiniz?</h2>
                <AnimationOnScroll animateIn='animate__backInRight'>
                    
                     <div>
                           {renderedIndustries}
                     </div>
                </AnimationOnScroll>
            </div>

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
            <AnimationOnScroll animateIn='animate__backInLeft'>

                <div className={`${styles.team_card_container}`}>

                    <div className={`${styles.team_card}`}>
                        <img src={team_mem2} alt="Think wise professional team member resume" />
                        <h3>Aynur Nizamova</h3>
                        <p>Biznes Konsultant <br /> Təhsil: Azərbaycan Dövlət İqtisad Universiteti, Dünya İqtisadiyyatı</p>
                        <ul>
                             <a href="https://www.linkedin.com/company/think-wise-business-consulting"><ImLinkedin2 className={`text-white nav-icon-margin-right`} /></a>
                             <a href="https://www.facebook.com/thinkwiseazerbaijan/"><ImFacebook className={`text-white nav-icon-margin-right`} /></a>
                             <a href="https://www.instagram.com/thinkwise.consulting/"><SiInstagram className="text-white" /></a> 
                        </ul>
                    </div>


                    <div className={`${styles.team_card}`}>
                        <img src={team_mem1} alt="Think wise professional team member resume" />
                        <h3>Çingiz Novruzzadə</h3>
                        <p>Təsisçi və Direktor <br /> Təhsil: İUBH International Management və Univeristy of East Anglia Investment and Financial Management </p>
                        <ul>
                                <a href="https://www.linkedin.com/company/think-wise-business-consulting"><ImLinkedin2  className={`text-white nav-icon-margin-right`} /></a>
                                <a href="https://www.facebook.com/thinkwiseazerbaijan/"><ImFacebook className={`text-white nav-icon-margin-right`} /></a>
                                <a href="https://www.instagram.com/thinkwise.consulting/"><SiInstagram className="text-white" /></a> 
                        </ul>
                    </div>


                    <div className={`${styles.team_card}`}>
                        <img src={team_mem3} alt="Think wise professional team member resume" />
                        <h3>Ramazan Əliquliyev</h3>
                        <p>Satış və Marketinq <br /> Təhsil: Saint Petersburg, Polytechnic University, Digital Marketing and E-Commerce.</p>
                        <ul>
                              <a href="https://www.linkedin.com/company/think-wise-business-consulting"><ImLinkedin2  className={`text-white nav-icon-margin-right`} /></a>
                              <a href="https://www.facebook.com/thinkwiseazerbaijan/"><ImFacebook  className={`text-white nav-icon-margin-right`} /></a>
                              <a href="https://www.instagram.com/thinkwise.consulting/"><SiInstagram className="text-white" /></a> 
                        </ul>
                    </div>


                </div>
            </AnimationOnScroll>

        </div>

        <div className={`${styles.text_sec}`}>

            <p>Uğurlu biznes uğurlu biznes əlaqələri deməkdir.<br />Lakin bu əlaqələr müştərinin eşitmək istədiyini deməklə <br /> yox, doğru olanı deməklə yaradılmalıdır.</p>
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
            </div >

        </div>

        <div className={`${styles.carier}`}>
            <img src={career} alt="Home content description testimonials" />
            <div className={`${styles.carier_side2}`}>
                <AnimationOnScroll animateIn='animate__backInRight'>
                    <p>Karyera</p>
                    <h3>Karyeranıza bizimlə başlayın</h3>
                    <p>TWC-də məqsədimizin yeganə sütunu bizim
                        insanlarımızdır. Bizim dinamik mühitdə siz komanda
                        tərəfindən ilk gündən dəstək görməyinizə baxmayaraq,
                        siz öz yolunuzu müəyyən edəcəksiniz.</p>
                </AnimationOnScroll>
        <div onClick={()=> handleNavigation("/career")}>

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
            <AnimationOnScroll animateIn='animate__backInLeft'>
                <div className={`${styles.projects_container}`}>
                    <span>
                        <img src={client1} alt="Home content description testimonials" />
                    </span>

                    <span>
                        <img src={client2} alt="Home content description testimonials" />
                    </span>

                    <span>
                        <img src={client3} alt="Home content description testimonials" />
                    </span>
                </div>
            </AnimationOnScroll>
        </div>

    </main>
    )
}

export default Home
