// @ts-nocheck
import React from 'react'
import styles from './biznis.module.css';


const BusinessModel = ({ renderedIndustries, display, setDisplay }) => {
  const modal = (
    <div className={`${styles.modal} d-flex justify-center align-center`}>
      <div className={styles.business_categories_modal}>
        <span
          className={`${styles.close_btn}`}
          onClick={() => {
            setDisplay(!display);
          }}
        >
          x
        </span>
        {renderedIndustries}
      </div>
    </div>
  );
  return <div>{display ? modal : null}</div>;
}

export default BusinessModel;