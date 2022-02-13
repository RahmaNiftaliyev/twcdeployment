import React from 'react'
import { ImFacebook, ImLinkedin2 } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
const Gallery = ({images,localClassData}) => {


    const handleDragStart = (e) => e.preventDefault();



        const responsive = {
                    0:{ items:1 },
                    568:{ items: 2 },
                    1024:{ items: 3 },
                };      

    const renderedImages = images.map(image => {
        return (
          <div className={`${localClassData} block-center`}>
                        <img src={image} onDragStart={handleDragStart} width="319"  alt="Think wise professional team member resume" />
                        <h3>Çingiz Novruzzadə</h3>
                        <p>Təsisçi və Direktor <br /> Təhsil: İUBH International Management və Univeristy of East Anglia Investment and Financial Management </p>
                          <ul>
                                <a href="https://www.linkedin.com/company/think-wise-business-consulting"><ImLinkedin2  className={`text-white nav-icon-margin-right`} /></a>
                                <a href="https://www.facebook.com/thinkwiseazerbaijan/"><ImFacebook className={`text-white nav-icon-margin-right`} /></a>
                                <a href="https://www.instagram.com/thinkwise.consulting/"><SiInstagram className="text-white" /></a> 
                        </ul> 
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
        items={renderedImages}  
        autoPlayInterval={1200} 
        animationDuration={1200}
    />

  )
}

export default Gallery