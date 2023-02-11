import './Main.css';

import React, {forwardRef} from "react";

const Main = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id='main' className='Main section' ref={ref}>
            <h1 style={{textTransform: 'uppercase'}}>Hi, I'm <a href='#about'><span className='name'>Michael Morgan</span></a></h1>
            <p> A Fullstack software engineer with an interest in technology, health, and learning.</p>
            <a href='#projects'><button className='btn btn--bg'>Projects</button></a>
        </section>
    )
});

export default Main;