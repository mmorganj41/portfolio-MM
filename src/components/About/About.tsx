import './About.css';

import React, {forwardRef} from "react";
import Info from "../Info/Info";

const About = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id='about' className='About section secondary' ref={ref}>
            <div className="container">
                <h2 className="heading">
                    <div className="main">About</div>
                    <div className="secondary">I specialize in a wide variety of programming languages and tools due to a love of learning.</div>
                </h2>
                <div className="Data">
                    <Info />
                </div>
            </div>
        </section>
    )
});

export default About