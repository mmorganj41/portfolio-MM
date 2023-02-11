import {useImmer} from 'use-immer';
import './ContactForm.css';

export default function ContactForm() {
    const [formState, updateForm] = useImmer({
        name: '',
        email: '',
        message: '', 
    })

    return (<div className="ContactForm">
        <form>
            <div className="FormField">
                <label htmlFor='name'>Name</label>
                <input id="name" type="text" name="name" value={formState.name}/>
            </div>
            <div className="FormField">
                <label htmlFor='email'>Email</label>
                <input id="email" type="email" name="email" value={formState.email}/>
            </div>
            <div className="FormField">
                <label htmlFor='message'>Message</label>
                <textarea id="message" cols={30} rows={10} name="message" value={formState.message}/>
            </div>
            <button className="btn btn--bg" type="submit">Submit</button>
        </form>
    </div>)
}