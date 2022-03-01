// @ts-nocheck
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import DefaultButton from './../buttons/DefaultButton';
import { useNavigate } from 'react-router-dom';
import styles from './gallery.module.css'


const GalleryTestimonials = ({ testimonialsData, localeClassData }) => {
  const handleDragStart = (e) => e.preventDefault();
  const navigate = useNavigate();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 }
  };


  const handleNavigateTestimonials = () => {
    navigate('/about/testimonials');
  }

  const renderedItems = testimonialsData.map((testimonial, index) => {
    return (
      <div className="container-testimonials-data">
        <span className={localeClassData} key={index}>
          <img src={testimonial} onDragStart={handleDragStart} alt="TWC company testimonials" />
        </span>
      </div>
    );
  });

  return (
    <div>
      <AliceCarousel
        autoPlay
        mouseTracking
        disableButtonsControls
        disableDotsControls
        infinite={true}
        items={renderedItems}
        responsive={responsive}
        autoPlayInterval={2000}
        animationDuration={2000}
        autoPlayStrategy={'none'}
      />
      <DefaultButton
        contentData={'Daha çox'}
        handleNavigation={handleNavigateTestimonials}
        classData={`button-detailed-dark ${styles.default_button_margin}`}
      />
    </div>
  );
};

export default GalleryTestimonials;
