import React from 'react';
import img from '../../IMG20211221082335.jpg'
import './About.css'
const About = () => {
    return (
        <div>
            <div className='clinet-info'>
                <h1>About us</h1>
                <p style={{ textAlign: "center", margin: '0 90px' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit blanditiis quo qui dicta, ex corporis, doloribus molestias ut assumenda quam quos accusantium ab laborum ea nam necessitatibus earum animi numquam.</p>
            </div>
            <div className='about'  >
                <img src={img} style={{width:'200px'}} alt="" />
                <h3>The CEO of our car company of APNA CAR</h3>
                <h5><span>ABOUT: </span>My name is ABDUR RAHIM. i am a student of class ten | i am the ceo of apna car company and beside i am   FRONTEND WEBDEVELOPER </h5>

            </div>





        </div>
    );
};

export default About;