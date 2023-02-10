import React, {forwardRef} from "react";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id='projects' className='Projects section' ref={ref}>
            Projects
        </section>
    )
});

export default Projects;