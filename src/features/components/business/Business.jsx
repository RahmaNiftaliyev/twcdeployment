
// @ts-nocheck
import React from 'react';
import styles from './biznis.module.css';

const Business = ({ renderedIndustries, display, setDisplay }) => {
  return (
    <div className={styles.business_categories_container}>
      <div className={styles.business_categories}>{renderedIndustries}</div>
      <div
        className={`${styles.view_more}`}
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Daha çox
      </div>
    </div>
  );
}

export default Business