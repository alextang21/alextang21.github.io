import React from 'react';
import './works.css';
import NG from '../../assets/NG.png'
import JLL from '../../assets/JLL.png'
import NU from '../../assets/NU.png'
import AS from '../../assets/arcticSpoon.png'

const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>My Experience</h2>
            <span className='worksDesc'>I've worked at Northrop Grumman, Jones Lang LaSalle, as a Software Engineering Intern, Northwestern University as a Peer Mentor and Peer Adviser, and Arctic Spoon as a manager.</span>
            <div className='worksImgs'>
                <img src={NG} alt='' className='worksImg' />
                <img src={JLL} alt='' className='worksImg' />
                <img src={NU} alt='' className='worksImg' />
                <img src={AS} alt='' className='worksImg' />
            </div>
        </section>
    )
}

export default Works;