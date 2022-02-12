// @ts-nocheck
import React, {useState} from 'react';
import styles from './request.module.css';
import arrow from './assets/arrow.svg' ;
import alertify from 'alertifyjs'

const Request = ({classData,classRemover}) => {

    
    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setMNumber] = useState('');
    const [content,setContent] = useState('');


    const isDisabled = [fullName,email,number,content].every(Boolean)


    const handleErrorView = () => {
        classRemover()
    }
 


    const handleSubmit = (e) => {

        if(isDisabled) {
             alertify.alert('TWC.AZ', `${fullName} TWC ailəsinə xoş gəldiniz`);
             classRemover()
        } 

        e.preventDefault();
    };


  return (
    <div className={`${styles.hidden_absolute_modal} ${classData}`}>
        <div className={`${styles.modal}`}>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='fullname'
                    id='fullname'
                    placeholder='Ad və Soyad'
                    // pattern='[(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$]'
                    className={`${styles.modal_input}`}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                 />

                <input 
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    // pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                    className={`${styles.modal_input}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input 
                    type='text'
                    name='number'
                    id='number'
                    placeholder='Telefon'
                    // pattern="|(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?|g"
                    className={`${styles.modal_input}`}
                    value={number}
                    onChange={(e) => setMNumber(e.target.value)}
                    required
                />


                <input 
                    type='text'
                    name='content'
                    id='content'
                    placeholder='Mövzu başlığı' 
                    // pattern="(?=^.{0,60}$)^[a-zA-Z-]+\s[a-zA-Z-]+$"
                    className={`${styles.modal_input}`}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    
                 />
                 <textarea className={`${styles.modal_text_area}`} name=""></textarea>
                <button type='submit'disabled={!isDisabled}>
                    Göndər <img src={arrow} alt="arrow svg button design" />
                </button>
                &nbsp;
                &nbsp;
                <button type='button'  onClick={handleErrorView} >
                    Geri qayıt 
                </button>
            </form>
        </div>
    </div>
  )
}

export default Request