import React, {forwardRef} from "react";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id='contact' className='Contact section' ref={ref}>
            Contact
        </section>
    )
});

export default Contact;