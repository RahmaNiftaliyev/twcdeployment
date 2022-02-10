// @ts-nocheck
import React, { useState } from 'react'
import whiteArrow from './svg/arrow-white.svg'
import blackArrow from './svg/arrow-black.svg'

const RoundedButton = ({ positioned, color }) => {
  const [animation1, setAnimation] = useState('animated-css-able-1')
  const [animation2, setAnimation2] = useState('animated-css-able-2')

  const enableAnimation = () => {
    setAnimation('')
    setAnimation2('')
  }

  const disableAnimation = () => {
    setAnimation('animated-css-able-1')
    setAnimation2('animated-css-able-2')
  }

  return (
    <button
      className="rounded relative"
      style={{ top: positioned, borderColor: color }}
      onMouseEnter={enableAnimation}
      onMouseLeave={disableAnimation}
    >
      <img
        src={
          color === '#17171766' || color === '#000' ? blackArrow : whiteArrow
        }
        alt="rounded button inside arrow right icon"
        className={`opacity-1 ${animation1}`}
      />

      <img
        src={
          color === '#17171766' || color === '#000' ? blackArrow : whiteArrow
        }
        alt="rounded button inside arrow right icon"
        className={`opacity-0 ${animation2}`}
      />
    </button>
  )
}

export default RoundedButton
