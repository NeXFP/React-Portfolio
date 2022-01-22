import React from 'react';

function Header() {
    return (
        <header id="home">
            <nav id="nav-wrap" className="flex-center">
                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#aboutMe">About Me</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">My Works</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;