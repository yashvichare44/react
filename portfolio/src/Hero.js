import React from 'react';
import './Hero.css';
import img1 from './img1.jpeg';
function Hero() {
  return (
    <div id ='home' className='Hero'>
      <img src={img1} alt="" />
      <h1>Welcome to my portfolio!</h1>
      <p><span>I am Yash Vichare</span>, a computer science student from Mumbai. I am a passionate and dedicated web developer with a flair for creating immersive digital experiences. With a keen eye for design and a knack for problem-solving, I specialize in crafting elegant and user-friendly websites and web applications.</p>
      <div className='Hero-info'>
        <div className='Hero-resume'>Resume</div>
        <div className='Hero-connect'>Connect Me</div>
      </div>
    </div>
  );
}

export default Hero;
