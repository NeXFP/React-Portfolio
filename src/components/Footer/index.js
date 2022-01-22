import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Footer(){
    return (
        <footer className="flex-row center">
            <div className="flex-row center">
                <ul className="social">
                    <a href="https://www.linkedin.com/in/giovanny-cardoso-065a961a9/" target="_blank" rel="noreferrer" className="button btn github-btn"><i className="fa fa-linkedin"></i>LinkedIn</a>
                    <a href="https://github.com/NeXFP" target="_blank" rel="noreferrer" className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
                    <a href="mailto:giovannycardoso50@gmail.com" className="button btn github-btn"><i className="fa fa-envelope"></i></a>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;