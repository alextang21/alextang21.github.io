import React from 'react';
import './intro.css';
import profile from '../../assets/alex.png'

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'> I'm  <span className='introName'>Alex</span> <br /> Software Engineer</span>
                <p className='introPara'>
                    I'm an alum at Northwestern University with a Bachelors of Science in Computer Science. Throughout my time there I've been 
                    involved as a <span>Peer Adviser</span>, <span>Peer Mentor</span>, and <span>Fire Dynasty Head</span> of their Chinese 
                    Students Association.
                    <br></br>
                    <br></br>
                    I currently work as an Associate Embedded Software Engineer at Northtop Grumman. I started here in January of 2024 and during 
                    my time here I've learned National Instruments' LabView and TestStand programs. My work mostly consists of continuous improvement
                    projects but I have recently started heading a project to virtualize the sensor hardware to increase the efficiency of the
                    operations team.
                    <br></br>
                    <br></br>
                    Outside of the office I enjoy playing volleyball, running, playing video games, and, most recently, recreational rock climbing! 
                    I learn best from watching, so I'll often be on YouTube or other streaming services learning how to either improve at the 
                    activities I listed above, or trying to get better at newer activities like cooking and baking.
                </p>
            </div>
            <img src={profile} alt='profile' className='bg' />
        </section>
    )
}

export default Intro;