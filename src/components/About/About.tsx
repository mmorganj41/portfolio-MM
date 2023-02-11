import React, {forwardRef} from "react";

const About = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id='about' className='About section secondary' ref={ref}>
            <div className="container">
                <h2 className="heading">
                    <div className="main">About</div>
                    <div className="secondary"></div>
                </h2>
            </div>
        </section>
    )
});

export default About