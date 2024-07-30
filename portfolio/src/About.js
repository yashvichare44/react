import React from 'react';
import './About.css';
import img1 from './img1.jpeg';
function About() {
  return (

    <div id='about' className='About'>
        <div className='About-title'>
           <h1>About Me</h1>
           
        </div>
        <div className='About-info'>
        <img src={img1} alt="" />
            
            <p>I am a third-year computer science student at Mumbai University. Passionate about web development, I am dedicated to honing my skills and creating innovative digital solutions. With a focus on problem-solving and a keen eye for detail, I aim to craft user-friendly and visually appealing websites and applications. My journey in the field of technology has been an exciting adventure, and I am eager to continue learning and growing in this dynamic field.</p>
        </div>
        <div className='About-skill'>
        <div className='About-skills'><p>REACTJS</p><hr style={{ width: "100%" }} /></div>
        <div className='About-skills'><p>Web Development</p><hr style={{ width: "100%" }} /></div>
        <div className='About-skills'><p>JAVA</p><hr style ={{width:"100%"}} /></div>
        <div className='About-skills'><p>PYTHON</p><hr style ={{width:"100%"}} /></div>
        <div className='About-skills'><p>C language</p><hr style ={{width:"100%"}} /></div>
        <div className='About-skills'><p>SQL</p><hr style ={{width:"100%"}} /></div>
        <div className='About-skills'><p>DSA</p><hr style ={{width:"100%"}} /></div>
        </div>
    <div id='projects' className='About-achivement'>
    <h1>Projects</h1>
        <div className='About-achivements'>
            <h2>Voice Assistant</h2>
            <p>Is an interactive voice activated assistant using python featuring a graphical user</p>
                             <p>interface built with TKinter</p>

        </div>
        <div className='About-achivements'>
            <h2>Retail Management System</h2>
            <p>A comprehensive retail management system developed using python for backend</p>
                                    <p>logic and sql lite for database.</p>
            
        </div>
        <div className='About-achivements'>
            <h2>Website</h2>
            <p>Travel website built using ReactJS</p>
            
        </div>
    </div>
    </div>
  );
}

export default About;