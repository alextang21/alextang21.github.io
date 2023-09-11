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
                    I'm a senior at Northwestern University studying Computer Science. Throughout my time here I've been involved as a <span>Peer Adviser</span>, <span>Peer Mentor</span>, and <span>Fire Dynasty Head</span> of our Chinese Students Association.
                    <br></br>
                    <br></br>
                    Off-campus I enjoy playing volleyball, running, playing video games, and, most recently, soccer! I learn best from watching, so I'll often be on YouTube or other streaming services learning how to either improve at the activities I listed above, or trying to get better at newer activities like cooking and baking.

                
                </p>
            </div>
            <img src={profile} alt='profile' className='bg' />
        </section>
    )
}

export default Intro;