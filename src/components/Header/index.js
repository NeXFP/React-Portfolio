import React from 'react';

function Header() {
    return (
        <header id="home">
            <div className='flex-row'>
                <p className='smoothscroll mx-1 fonts valign-bottom'>Giovanny</p>

                <nav id="nav-wrap" className="flex-right">
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll mx-1" href="#home">Home</a></li>
                        <li><a className="smoothscroll mx-1 fonts" href="#about-me">About Me</a></li>
                        <li><a className="smoothscroll mx-1 fonts" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll mx-1 fonts" href="#portfolio">My Works</a></li>
                        <li><a className="smoothscroll mx-1 fonts" href="#contact">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;