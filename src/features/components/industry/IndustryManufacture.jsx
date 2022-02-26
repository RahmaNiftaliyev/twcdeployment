// @ts-nocheck
import React from 'react';
import IndustryHeaderDash from './IndustryHeaderDash';
import Footer from './../../footer/Footer';
import styles from './industry.module.css';
// !----------------------------------------------------------
import headerImagePng from './assets/img/istehsalat-header.png';
import sectionImagePng from './assets/img/istehsalat-section.png';

const IndustryManufacture = () => {
  return (
    <div>
      <IndustryHeaderDash headerText={'SƏNAYE/İSTEHSALAT'} isHeader={true} />

      <div className={`${styles.container}`}>
        <section className={`${styles.header_image_container} d-flex `}>
          <img src={headerImagePng} alt="" />
        </section>
        <section className={`d-flex direction-column`}>
          <span className={`${styles.header_subtitle}`}>Sənaye</span>
          <span className={`${styles.header_title}`}>İstehsalat</span>
        </section>
        <section className={`${styles.paragraph_section}`}>
          <p>
            Məhsulların əksəriyyəti ‘Sənaye İnqilabın’dan əvvəl insan əməyi və ənənəvi alətlər sayəsində istehsal
            olunurdu. ‘Sənaye İnqilabı’ kütləvi istehsala və daha az xərcli malların istehsalı üçün mexanikləşmədən
            istifadə edilməsinə gətirib çıxardı. Bura filiz və ağac kimi xammaldan metal məmulatlar və mebel kimi hazır
            məhsulların emal olunması daxildir. Nəticədə, İstehsalat iqtisadiyyatın ayrılmaz və böyük bir hissəsinə
            çevirilib.
          </p>
          <p>
            {' '}
            Xammalın daha faydalı bir şeyə çevrilməsi İstehsalat Sənayesində əlavə dəyər yaradır. Bu əlavə dəyər hazır
            məhsulların qiymətini artırır və istehsalı biznes zəncirinin çox gəlirli hissəsinə çevirir. Bəzi şəxslər
            malların istehsalı üçün tələb olunan bacarıqlar üzrə ixtisaslaşır, digərləri isə müəssisələrə alətlər və
            materiallar almaq üçün lazım olan vəsaiti təmin edir.{' '}
          </p>

          <p>
            İstehsal layihələrini həyata keçirən komandalar bugünkü qiymət və təhlükəsizlik baxımından müasir mühitdə
            bir sıra problemlərlə üzləşirlər. Bəzi çətinliklər bir çox istehsal əməliyyatlarının uğurunun açarı olan iki
            element, sınaq və keyfiyyətə nəzarət ilə bağlıdır. Bu fəaliyyətlərin müddətinin müəyyən edilməsi
            planlaşdırma mərhələsində çox vacibdir.
          </p>

          <p>
            Bundan əlavə, bir birinə bənzər sahələrdə olan çətinliklər eyni problemlə görə yarana bilər. Misal üçün,
            uzun müddətli istehsal prosesində nisbətən kiçik dəyişiklər xammalın necə saxlanması ilə bağlı Upstream
            sahəsində problemlər yarada bilər, üstəlik Downstream sahəsində qablaşdırmanın dəyişdirilməsi ehtiyacı üzə
            çıxa bilər.
          </p>
          <p>
            Müqayisə məlumatları bu çətin problemlərin həllində faydalı ola bilsə də, təşkilatın məqsəd və
            təcrübələrinin sənaye normalarına nə qədər uyğun olduğunu müəyyən etmək hələ də komandanı istiqamət
            axtarmağa vadar edən problem ola bilər. Təşkilatın istehsal layihələrini uğurla başa çatdırmaq üçün
            bacarıqları yoxdursa, səmərəliliyin artırılması və dəyərin artırılması son nəticədə qeyri-mümkün ola bilər.
          </p>
          <p>
            İstehsal cədvəllərinə hər hansı dəyişiklik edildikdə, təşkilat bir sıra yüksək səviyyəli risklərlə üzləşir.
            İstehsal layihəsi planlaşdırdığı yolundan çıxarsa, gəlir proqnozları aşağı düşə bilər. Etibarlı keyfiyyət
            idarəetməsi metodologiyaları tətbiq olunmasa, son məhsul və ya onun komponentləri maya dəyəri, istehsal
            imkanları və ya müştərilərin cəlb edilməsi baxımından qeyri-sabit ola bilər. Yenidənqurma səyləri istehsal
            həcmlərini müvəqqəti olaraq azalda bilər və gecikmələr gəlir və ya bazar payının gözlənilməz itkilərinə
            səbəb ola bilər.
          </p>
        </section>
        <section className={`${styles.section_image_container} d-flex`}>
          <img src={sectionImagePng} alt="" />
        </section>

        <section className={`${styles.paragraph_section}`}>
          <p>
            Bununla belə, bir çox regional və ya qlobal istehsalçılar istehsalat zəncirinin optimallaşdırılması
            məsələlərini həll etməyə başlayırlar. Qrup daxilində təkmilləşdirilmiş daxili əməkdaşlığa və istehsalat
            zənciri məlumatlarının yaradılmasına diqqət yetirilir. Beləliklə, bütün bu məlumatlar daha yaxşı xərc
            idarəetməsi yaratmaq üçün istifadə edilə bilər.
          </p>
          <p>
            Bütün bunlar istehsal əməliyyatlarında əhəmiyyətli irəliləyişlər əldə etməyə kömək edəcəkdir. Rəqabət
            üstünlüyü əldə etmək müvəffəqiyyətin açarıdır. Müştəri xidməti keyfiyyətinin yaxşılaşdırılması tezliklə
            mənfəətin artmasına gətirib çıxarır.
          </p>
          <p>
            ‘Thinkwise Business Consulting’ şirkətinin təcrübəli konsultantları mürəkkəb istehsalat layihələrini necə
            icra edəcəyini bilirlər. ‘Thinkwise Business Consulting’in həlləri komandanıza ətraflı cədvəllər hazırlamağa
            kömək edə bilər və üstəlik, fəaliyyətin hər bir mərhələsi barədə məlumat verən ətraflı qrafik və işlərin
            paylanma strukturlarını inkişaf etdirməyə kömək edə bilər. Bu yol xəritəsi, layihə cədvəlini təsdiq edərək
            və vaxt qrafiklərinin harada sıxıla biləcəyini müəyyən edərək səylərinizi uğura doğru hərəkət etdirəcək,
            eyni zamanda fəaliyyətlərin lazımsız ixtisarlar olmadan baş verməsini təmin edəcək.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default IndustryManufacture;
