import React, {forwardRef} from "react";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id='projects' className='Projects section secondary' ref={ref}>
            <div className="container">
                <h2 className="heading">
                    <div className="main">Projects</div>
                    <div className="secondary"></div>
                </h2>
            </div>
        </section>
    )
});

export default Projects;