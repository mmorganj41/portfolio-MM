import React, {forwardRef} from "react";

const Main = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id='main' className='Main section' ref={ref}>
            Main
        </section>
    )
});

export default Main;