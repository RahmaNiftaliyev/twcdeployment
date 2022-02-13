// @ts-nocheck
import React,{useState} from 'react';
import styles from './career.module.css';
import ceo from './assets/img/carrer-ceo.png';
import RoundedButton from '../../toolbox/buttons/RoundedButton';
import arrow from './assets/img/arrow.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Footer from './../../footer/Footer';
import Request from '../../toolbox/modal/Request';
import { Link } from 'react-router-dom';


const Career = () => {

    const [demo_class,set_demo_class] = useState('');


    const handleStylesModal = () => {
             set_demo_class('modal_slider');
    };

    const handleRemoveSlider = () => {
        set_demo_class('')
    }

    return (
        <div>
          
            <div className={`${styles.career_main}`}>
              <Request classData={demo_class} classRemover={handleRemoveSlider}  />
                <div className={`${styles.bg_container}`}>
                    <h3>
                        TWC-də məqsədimizin yeganə sütunu bizim insanlarımızdır.
                        Bizim <br /> dinamik mühitdə siz komanda tərəfindən ilk
                        gündən dəstək <br /> görməyinizə baxmayaraq, siz öz
                        yolunuzu müəyyən edəcəksiniz. <br />
                    </h3>
                </div>
                <div>
                    <img
                        src={ceo}
                        className={`${styles.img_w_ceo_100}`}
                        alt=""
                    />
                    <p className={`${styles.career_quotes}`}>
                        Yolunuzu özünüz yaradın. Təcrübəli bir mütəxəssis və ya
                        yeni məzun olmağınızdan asılı olmayaraq TWC-də sizi
                        təşviq edəcək və qeyri-adi olmağa ruhlandıracaq
                        komandalarla əhatələnərkən siz cəmiyyətin ən böyük
                        problemlərini həll etmək üçün çalışacaqsınız.
                    </p>
                </div>
                <div className={`${styles.bg_container}`}>
                    <div>
                        <h3>
                            “TWC-də məqsədimizin yeganə sütunu bizim
                            insanlarımızdır. Bizim <br />
                            dinamik mühitdə siz komanda tərəfindən ilk gündən
                            dəstək <br /> görməyinizə baxmayaraq, siz öz
                            yolunuzu yaradacaqsınız. TWC-yə <br /> xoş
                            gəlmisiniz”.
                        </h3>
                        <h4>
                            <strong>
                                Çingiz Novruzzadə Təsisçi və Direktor
                            </strong>
                        </h4>
                    </div>
                </div>
            </div>

            <section className={`${styles._ready} d-flex flex-mb-column`}>
                <div className={`${styles.content_img}`}></div>
                <div className={`${styles.content_text}`}>
                    <div>
                        <span className={`${styles.career_span}`}>Karyera</span>
                        <h4>
                            TWC-yə qoşulmağa <br />
                            hazırsan?
                        </h4>

                       <Link to="/register"><RoundedButton positioned="" color="#000" /></Link>
                    </div>
                </div>
            </section>
            <section className={`${styles.vacantion}`}>
                <span className={`${styles.career_span}`}>Karyera</span>
                <h4>Vakansiyalar</h4>
                {/* !VACATION CONTAINER 1 */}
                <div className={`${styles.join_vacation}`}>
                    <h2>Associate</h2>
                    <p>
                        <strong>Biz kimik?</strong> <br />
                        Cənub-Şərqi Avropanın ilk erkən mərhələdə olan saf
                        menecement <br />
                        konsaltinq şirkəti olan TWC gənc, dinamik və istedadlı
                        komandası ilə hər <br />
                        çətinliyin üstəsindən gəlməyə hazırdır.
                    </p>

                    <button onClick={handleStylesModal}>
                        <AnimationOnScroll animateIn="animate__fadeInLeftBig animate__slow">
                            <span>Müraciət et</span>
                            <img src={arrow} alt="button icon arrow right" />
                        </AnimationOnScroll>
                    </button>
                </div>
                {/* !VACATION CONTAINER 2 */}
                <div className={`${styles.join_vacation} animated_controller`}>
                    <h2>Biznes konsultant</h2>
                    <p>
                        <strong>Biz kimik?</strong> <br />
                        Cənub-Şərqi Avropanın ilk erkən mərhələdə olan saf
                        menecement <br />
                        konsaltinq şirkəti olan TWC gənc, dinamik və istedadlı
                        komandası ilə hər <br />
                        çətinliyin üstəsindən gəlməyə hazırdır.
                    </p>

                    <button onClick={handleStylesModal}>
                        <AnimationOnScroll animateIn="animate__fadeInLeftBig animate__slow">
                            <span>Müraciət et</span>
                            <img src={arrow} alt="button icon arrow right" />
                        </AnimationOnScroll>
                    </button>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Career;
