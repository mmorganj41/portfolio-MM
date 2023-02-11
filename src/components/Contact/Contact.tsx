import React, {forwardRef} from "react";
import ContactForm from "../ContactForm/ContactForm";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id='contact' className='Contact section secondary' ref={ref}>
            <div className="container">
                <h2 className="heading">
                    <div className="main">Contact</div>
                    <div className="secondary">Questions? Comments? Opportunities? Let me know.</div>
                </h2>
                <ContactForm />
            </div>
        </section>
    )
});

export default Contact;