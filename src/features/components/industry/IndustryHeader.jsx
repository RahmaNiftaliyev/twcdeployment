// @ts-nocheck
import React from 'react'
// !----------------------------------------------------------
import styles from './industry.module.css'

const IndustryHeader = ({ text }) => {
  return (
    <div>
      <div className="article-header-height  d-flex align-center justify-center">
        <h3 className={styles.header_text}>{text}</h3>
      </div>
    </div>
  )
}

export default IndustryHeader
