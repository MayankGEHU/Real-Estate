import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Button from './Button';
import styles from './ContactForm.module.css'
import image1 from '../../assets/image2.png'
import { useState } from 'react';
const ContactForm = () => {

  const onSubmit = (event) => {
  };

  return (
    <section className={styles.form_section}>
        <div>
          <div className={styles.contact_form}>
              <div className={styles.top_btn}>
                  <Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize='20px'/>}/>
                  <Button text='VIA CALL' icon={<FaPhoneAlt fontSize='20px'/>}/>
              </div>
              <Button isOutline='true' text='VIA EMAIL FROM' icon={<HiMail fontSize='20px'/>}/>
          </div>
          <form 
          onSubmit={onSubmit}
            className={styles.form}>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' placeholder='Jhon Peter'/>
            </div>

            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="text" name='email' placeholder='abc@example.com'/>
            </div>

            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea type="text" name='text' placeholder='Discription'/>
            </div>
            <div className={styles.submit}>
              <Button text='SUBMIT'/>
            </div>
         
          </form>
          </div>
        <div className={styles.contact_image}>
          <img src={image1} alt="" />
        </div>
    </section>
    
  )
}

export default ContactForm;