import React from 'react';
import logo from '../../assets/icons/favicon.png';

function AboutMe(){
    return (
        <section id='about-me' className='my-5 section'>
            <div className="flex-center">
                <h2>About Me</h2>
            </div>
            <div className="flex-center">
                <img src={logo} alt="icon"/>
            </div>

            <div className="text-center">
                <p>
                    Nice to meet you. My name is Giovanny Cardoso. Many know me as NeXFP.
                    Currently I'm a bootcamp attendee in hopes of becoming a full stack developer,
                    with a focus on UI/UX design. I'm also a fairly recent graduate of the Criminal Law
                    bachelor's of science program at Rowan University with a graduating GPA of a 3.2. 
                    With the help of this program, I would like to be on the path of becoming a UI or UX 
                    designer.

                </p>
            </div>
        </section>
    )
}

export default AboutMe;