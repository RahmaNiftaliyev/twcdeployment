import React from 'react'

const Hamburger = ({ bgColor, handleClick }) => {
  return (
    <div className="w-hamburger-container" onClick={handleClick}>
      <div className={bgColor}>{''}</div>
      <div className={bgColor}>{''}</div>
      <div className={bgColor}>{''}</div>
    </div>
  )
}

export default Hamburger
