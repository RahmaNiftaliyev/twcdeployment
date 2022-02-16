import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import RoundedButton from './../buttons/RoundedButton'
import 'react-alice-carousel/lib/alice-carousel.css'
const GalleryServices = ({data,boxContainerClass,boxClass,imgClass,spanClass}) => {

        const handleDragStart = (e) => e.preventDefault();



        const responsive = {
                    0:{ items:1 },
                    568:{ items: 2 },
                    1024:{ items: 3 },
                    1440: { items: 4 }
            };  

            const renderedServices = data.map(item => {
                return (
                    <div
                    className={`${boxContainerClass} container-testimonials-data`}
                >
                    <div
                        className={boxClass}
                        key={item.id}
                    >
                        <img
                            src={item.img}
                            alt="think-wise services logo item"
                            className={imgClass}
                            onDragStart={handleDragStart}
                        />
                        <span className={spanClass}>
                            {item.name}
                        </span>
                        <RoundedButton top="10px" color="#17171766" />
                    </div>
                </div> 
                )
            })


  return (
    <AliceCarousel
        mouseTracking 
        disableDotsControls
        disableButtonsControls
        autoPlay 
        infinite={true}
        autoPlayStrategy={'none'}
        responsive={responsive} 
        items={renderedServices}  
        autoPlayInterval={2400} 
        animationDuration={2400}
     />
  )
}

export default GalleryServices