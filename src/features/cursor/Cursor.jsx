import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {
  
  return (
    <>
         <AnimatedCursor 
            innerSize={8}
            outerSize={16}
            color='50,50,50'
            outerAlpha={0.1}
            innerScale={1.5}
            outerScale={7}
          />
    </>
  )
}

export default Cursor

