import React from 'react';
import Works from '../Works';

function Portfolio() {
    return (
        <section className='my-1'>
            <h1 className='flex center'>My Work</h1>
            <div className='my-5'>
                <Works />
            </div>
        </section>
    )
}

export default Portfolio