import React from 'react';
import AliceCarousel from 'react-alice-carousel';

const GalleryTestimonials = ({ testimonialsData, localeClassData }) => {
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 }
  };

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
  );
};

export default GalleryTestimonials;
