import React, {forwardRef} from "react";

const About = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id='about' className='About section' ref={ref}>
            About
        </section>
    )
});

export default About