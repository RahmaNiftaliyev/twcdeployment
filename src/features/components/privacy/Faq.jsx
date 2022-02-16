// @ts-nocheck
import React from 'react';
import PrivacyHeaderDash from './PrivacyHeaderDash';
import Footer from './../../footer/Footer';
import styles from './privacy.module.css';

const Faq = () => {
    return (
        <div>
            <PrivacyHeaderDash headerText="" isPrivacy={true} />
            <h1 className={`text-center ${styles.privacy_header}`}>FAQ</h1>
            <div className={`${styles.privacy_container}`}>
                <h3>1. TWC-nin nəşrləri nədir?</h3>
                <p>
                    Twc.az-da TWC şirkətdən kənar auditoriya üçün kontentinin
                    böyük əksəriyyətini dərc edir. Kontenlər məqalələrdən,
                    hesabatlardan və videolardan ibarətdir.
                </p>
                <h3>
                    2. Mən TWC-nin nəşrlərini yenidən çap edə və ya yaya
                    bilərəmmi?
                </h3>
                <p>
                    Twc.az ziyarətçiləri şəxsi biznes, təhsil və ümumi məlumat
                    məqsədləri üçün nəşrimizi endirə və çap edə bilərlər.
                    Yenidən çap və paylaşma məqsədləri üçün ziyarətçilər
                    info@thinkwise.az ünvanından tələb edə bilərlər. TWC
                    kontentimizin promosyonlar, satışlar, marketinq və s. daxil
                    olmaqla, lakin bununla məhdudlaşmayaraq, biznes məqsədləri
                    üçün istifadəsinə icazə vermir.
                </p>
                <h3>3. TWC şirkətdən kənar məqalə qəbul edirmi?</h3>
                <p>
                    Baxmayaraq ki, twc.az-dakı kontentin əksəriyyəti TWC
                    konsultantları tərəfindən yazılıb, biz öz sahələrində
                    tanınmış liderlərdən TWC-yə aid olmayan məqalələri qəbul
                    edirik. TWC-nin sizin məqalənizi paylaşmaqda maraqlı
                    olduğunu öyrənmək üçün info@thinkwise.az ünvanına e-poçt
                    göndərin və lazım olduğu halda, biz məzmunu müzakirə etmək
                    üçün əlaqə saxlayacağıq.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Faq;
