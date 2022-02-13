// @ts-nocheck
import React from 'react'
import styles from './header.module.css';
import { Typewriter } from 'typewriting-react';

const Header = ({textColor,textData}) => {

    


    return (
        <div className='mobile-padding normalize-padding header-height'>
            <h1 className={`${textColor} ${styles.header_head_text}`}><Typewriter words={[`${textData}`,`${textData}`]} /></h1>
            
        </div>
    )
}

export default Header
