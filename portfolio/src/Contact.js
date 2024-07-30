import React from 'react';
import './Contact.css';
function Contact() {
  return (
    <div id ='contact' className='Contact'>
      <h1>Let's get connected</h1>
      <form className='Contact-info'>
      <label htmlFor=''>Your name</label>
      <input type='text' placeholder='enter your name 'name= 'name'/>
      <label htmlFor=''>Your Email</label>
      <input type='text' placeholder='enter your email 'name= 'name'/>
      <label htmlFor=''> message </label>
      <textarea name='message' rows='8' placeholder='leave message'/>
      <button type='submit' className='Contact-submit'>submit now</button>
      </form>
    </div>
  );
}

export default Contact;
