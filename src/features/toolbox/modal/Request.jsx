import React, {useState} from 'react';
import styles from './request.module.css';
import arrow from './assets/arrow.svg' ;

const Request = ({classData}) => {


    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setMNumber] = useState('');
    const [content,setContent] = useState('');
    const [toggle,setToggle] = useState(true);

    const isDisable = [fullName,email,number,content].every(Boolean);



    const handleSubmit = (e) => {
        setToggle(false) ; 

        setTimeout(() => setToggle(true),3000);
        e.preventDefault();
    };


  return (
    <div className={`${styles.hidden_absolute_modal} ${toggle ? classData : ""}`} style={{}}>
        <div className={`${styles.modal}`}>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='fullname' 
                    className={`${styles.modal_input}`}
                    id='fullname' 
                    placeholder='Ad və Soyad' 
                    required 
                    value={fullName}      
                    pattern='[(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$]'
                    onChange={(e) => setFullName(e.target.value)}           
                 />

                <input 
                    type='email'
                    name='email' 
                    className={`${styles.modal_input}`}
                    id='email' 
                    placeholder='Email'
                    required 
                    value={email}  
                    pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                   onChange={(e) => setEmail(e.target.value)}      
                />

                <input 
                    type='text' 
                    name='number' 
                    className={`${styles.modal_input}`}
                    id='number' 
                    placeholder='Telefon' 
                    required 
                    value={number}        
                    pattern="/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g"
                    onChange={(e) => setMNumber(e.target.value)}      
                />


                <input 
                    type='text'
                    name='content' 
                    className={`${styles.modal_input}`}
                    id='content' 
                    placeholder='Mövzu başlığı' 
                    required 
                    value={content}   
                    pattern="(?=^.{0,60}$)^[a-zA-Z-]+\s[a-zA-Z-]+$"
                    onChange={(e) => setContent(e.target.value)}      
                 />
                 <textarea className={`${styles.modal_text_area}`} name=""></textarea>
                <button type='submit' disabled={!isDisable}>
                    Göndər <img src={arrow} alt="arrow svg button design" />
                </button>
            </form>
        </div>
    </div>
  )
}

export default Request