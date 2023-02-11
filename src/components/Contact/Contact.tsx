import React, {forwardRef} from "react";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id='contact' className='Contact section secondary' ref={ref}>
            <div className="container">
                <h2 className="heading">
                    <div className="main">Contact</div>
                    <div className="secondary">Questions? Comments? Opportunities? Let me know.</div>
                </h2>
            </div>
        </section>
    )
});

export default Contact;