import { selectAllIndustries } from '../industry/industriesSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './biznis.module.css';
import button from '../../toolbox/buttons/svg/button.svg';

export default function Bizniz({ renderedIndustries, display, setDisplay }) {

  return (

        <div className={styles.business_categories_container}>

            <div className={styles.business_categories}>
                {renderedIndustries}


            </div>
            <div className={`${styles.view_more}`} onClick={() => { setDisplay(!display) }}>view more</div>

        </div>





    )
}