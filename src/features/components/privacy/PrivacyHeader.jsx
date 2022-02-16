// @ts-nocheck
import React from 'react'
import styles from './privacy.module.css'

const PrivacyHeader = ({ text }) => {
  return (
    <div className="article-header-height d-flex align-center justify-center">
      <h3 className={styles.header_text}>{text}</h3>
    </div>
  )
}

export default PrivacyHeader
