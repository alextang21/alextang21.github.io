import React from 'react';
import './contact.css';
import resume from '../../assets/resume.png'
import linkedIn from '../../assets/linkedin.png'
import gitHub from '../../assets/github.png'

const Contact = () => {
    return (
        <section id='contactPage'>
            <div id='resume'>
                <h1 className='contactPageTitle'>My Resume</h1>
                <img src={resume} alt='resume' className='resume'/>
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <p className='contactInfo'>alexander.tang21@gmail.com | 224-433-4243</p>
                <div className='links'>
                    <a href="https://www.linkedin.com/in/alex-tang-a5b84821b/">
                        <img src={linkedIn} alt='linkedin' className='link' />
                    </a>
                    <a href="https://github.com/alextang21">
                        <img src={gitHub} alt='github' className='link' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;