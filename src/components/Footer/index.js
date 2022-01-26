import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="flex-center">
                <div className="flex-row">
                    <div className="flex-row">

                        <div>
                            <a href="https://github.com/NeXFP" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-github icons icon mx-2"></i>
                            </a>
                        </div>

                        <div>
                            <a href="https://www.linkedin.com/in/giovanny-cardoso-065a961a9/" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-linkedin icons icon mx-2"></i>
                            </a>
                        </div>

                        <div>
                            <a href="mailto:giovannycardoso50@gmail.com">
                                <i className="fa fa-envelope icons icon mx-2"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;