import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {



  return (
    <>
         <AnimatedCursor 
            innerSize={8}
            outerSize={16}
            color='40,40,40'
            outerAlpha={0.2}
            innerScale={0.8}
            outerScale={5}
            />
    </>
  )
}

export default Cursor