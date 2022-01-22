import React from 'react';

function Resume() {
    return (
        <section>
            <div>
                <br /><br />
                <h2 className="flex-center">Resume</h2>
                <br />
                <br />
                <br />

                <div className="flex-center">
                    <h2>Front-end Skills</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Bulma</li>
                    </ul>
                </div>
                <br /><br /><br />
                <div className="flex-center">
                    <h2>Back-end Skills</h2>
                    <ul>
                        <li>Usage of APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, NoSQL and Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>Rest</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Resume;