import React from 'react'
import './skills.css';
import cube from '../../assets/cube.png'
import rps from '../../assets/rps.png'
import dyl from '../../assets/DYL.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>I am a software developer that has worked on projects varying from game development to websites to embedded software projects using programs like NI LabView and TestStand.</span>
            <div className='skillBars'>
                <a href="https://alextang21.github.io/cube-slider/">
                    <div className='skillBar'>
                        <img src={cube} alt='cube-slider' className='skillBarImg'/>
                        <div className='skillBarText'>
                            <h2>Cube Slider</h2>
                            <p>A website game where you navigate a cube around obstacles</p>
                        </div>
                    </div>
                </a>
                <a href="https://alextang21.github.io/rock-paper-scissors/">
                    <div className='skillBar'>
                        <img src={rps} alt='rockPaperScissors' className='skillBarImg'/>
                        <div className='skillBarText'>
                            <h2>Rock Paper Scissors</h2>
                            <p>A website game where you play rock paper scissors against the computer</p>
                        </div>
                    </div>
                </a>
                <a href="https://alextang21.github.io/DYLwebsite/">
                    <div className='skillBar'>
                        <img src={dyl} alt='DYL' className='skillBarImg'/>
                        <div className='skillBarText'>
                            <h2>Design Your Life</h2>
                            <p>A website built for a Northwestern course, commissioned for DTC-2</p>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}

export default Skills;