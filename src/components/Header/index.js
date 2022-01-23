import React from 'react';

function Header(props) {
    const {
        aboutMeSelected, 
        setAboutMeSelected,
        resumeSelected, 
        setResumeSelected,
        portfolioSelected, 
        setPortfolioSelected,
        contactSelected, 
        setContactSelected
    } = props

    function aboutMe() {
        setAboutMeSelected(true)
        setResumeSelected(false) 
        setPortfolioSelected(false) 
        setContactSelected(false)
    }

    function resume() {
        setAboutMeSelected(false)
        setResumeSelected(true) 
        setPortfolioSelected(false) 
        setContactSelected(false)
    }

    function portfolio() {
        setAboutMeSelected(false)
        setResumeSelected(false) 
        setPortfolioSelected(true) 
        setContactSelected(false)
    }

    function contact() {
        setAboutMeSelected(false)
        setResumeSelected(false) 
        setPortfolioSelected(false) 
        setContactSelected(true)
    }

    return (
        <header id="home">
            <div className='flex-row'>
                <p className='smoothscroll mx-1 fonts valign-bottom'>Giovanny</p>

                <nav id="nav-wrap" className="flex-right">
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll mx-1" href="#home">Home</a></li>
                        <li className={`${aboutMeSelected && 'navActive'}`}><a className="smoothscroll mx-1 fonts" href="#about-me" onClick={() => aboutMe()}>About Me</a></li>
                        <li className={`${resumeSelected && 'navActive'}`}><a className="smoothscroll mx-1 fonts" href="#resume" onClick={() => resume()}>Resume</a></li>
                        <li className={`${portfolioSelected && 'navActive'}`}><a className="smoothscroll mx-1 fonts" href="#portfolio" onClick={() => portfolio()}>My Works</a></li>
                        <li className={`${contactSelected && 'navActive'}`}><a className="smoothscroll mx-1 fonts" href="#contact" onClick={() => contact()}>Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;