import React, {forwardRef} from "react";

const Main = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id='main' className='Main section'>
            Main
        </section>
    )
});

export default Main;