import React from 'react';

function Portfolio() {
    return (
        <section className='my-5 section' id='portfolio'>
            <h1 className='flex center'>My Work</h1>
            <div className='my-5'>
                <header>
                    <center><p>Examples of Works below!</p></center>
                </header>
                <div class="examples">
                    <ul>
                        <li>
                            <a class="works" href="https://nexfp.github.io/HoriseonSolutionServices/" target="_blank">
                                <span>Horiseon</span>
                                <img src="https://i.imgur.com/ypvxXzL.png" alt="Example of Horiseon website work challenge" />
                            </a>
                        </li>
                        <li>
                            <a class="works" href="https://nexfp.github.io/Pokemon-Battle-Simulator/" target="_blank">
                                <span>Pokemon Battle Simulator</span>
                                <img src="https://i.imgur.com/phqktdM.png" alt="Example of Pokemon Battle Simulator" />
                            </a>
                        </li>
                        <li>
                            <a class="works" href="https://entertainmentreview.herokuapp.com/login" target="_blank">
                                <span>Entertainment Review</span>
                                <img src="https://i.imgur.com/ynO7bea.png" alt="Example of Entertainment Review" />
                            </a>
                        </li>
                        <li>
                            <a class="works" href="https://nexfp.github.io/Weather-Dashboard/" target="_blank">
                                <span>Weather-Dashboard</span>
                                <img src="https://i.imgur.com/aD5Fzbb.png" alt="Example of Weather-Dashboard" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Portfolio