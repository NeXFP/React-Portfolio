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
        setContactSelected,
        homeSelected,
        setHomeSelected
    } = props

    function aboutMe() {
        setHomeSelected(false)
        setAboutMeSelected(true)
        setResumeSelected(false) 
        setPortfolioSelected(false) 
        setContactSelected(false)
    }

    function resume() {
        setHomeSelected(false)
        setAboutMeSelected(false)
        setResumeSelected(true) 
        setPortfolioSelected(false) 
        setContactSelected(false)
    }

    function portfolio() {
        setHomeSelected(false)
        setAboutMeSelected(false)
        setResumeSelected(false) 
        setPortfolioSelected(true) 
        setContactSelected(false)
    }

    function contact() {
        setHomeSelected(false)
        setAboutMeSelected(false)
        setResumeSelected(false) 
        setPortfolioSelected(false) 
        setContactSelected(true)
    }

    function home() {
        setHomeSelected(true)
        setAboutMeSelected(false)
        setResumeSelected(false) 
        setPortfolioSelected(false) 
        setContactSelected(false)
    }

    return (
        <header id="home">
            <div className='flex-row'>
                <p className='smoothscroll mx-1 fonts valign-bottom'>Giovanny</p>

                <nav id="nav-wrap" className="flex-right">
                    <ul id="nav" className="nav">
                        <li className={`${homeSelected && 'navActive'}`}><a className="smoothscroll mx-1" href="#home" onClick={() => home()}>Home</a></li>
                        <li className={`${aboutMeSelected && 'navActive'}`}><a className="smoothscroll mx-1 fonts" href="#about-me" onClick={() => aboutMe()}>About Me</a></li>
                        <li className={`${resumeSelected && 'navActive'}`}><a className="smoothscroll mx-1 fonts" href="#resume" onClick={() => resume()}>Resume</a></li>
                        <li className={`${portfolioSelected && 'ngitavActive'}`}><a className="smoothscroll mx-1 fonts" href="#portfolio" onClick={() => portfolio()}>My Works</a></li>
                        <li className={`${contactSelected && 'navActive'}`}><a className="smoothscroll mx-1 fonts" href="#contact" onClick={() => contact()}>Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;