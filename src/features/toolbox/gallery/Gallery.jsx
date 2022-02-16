// @ts-nocheck
import React from 'react'
import { ImFacebook, ImLinkedin2 } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';
import dividerSvg from './assets/team-shape.svg'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
const Gallery = ({images}) => {


    const handleDragStart = (e) => e.preventDefault();



        const responsive = {
                    0:{ items:1 },
                    568:{ items: 2 },
                    1024:{ items: 3 },
                };      



    const renderedImages2 = images.map(image => {
      return (

        <div className='container-team-data' key={image.id}>
            <div>
            <div className="img-section-team-data">
             <img src={image.img} onDragStart={handleDragStart} width="319"  alt="Think wise professional team member resume" />
             <div className='absolute social-section-team-data'>
               <ImFacebook />
                <br />
               <ImLinkedin2 />
               <br />
               <SiInstagram />
             </div>
          </div>
          <div className='svg-section-team-data'>
            <img src={dividerSvg} alt="" />
          </div>
          <div className='content-section-team-data'>
              <h4>{image.name}</h4>
              <span>{image.position}</span>
              <p>{image.education}</p>
          </div>
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
        items={renderedImages2}  
        autoPlayInterval={2400} 
        animationDuration={2400}
    />

  )
}

export default Gallery