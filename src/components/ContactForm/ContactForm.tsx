import {useImmer} from 'use-immer';

export default function ContactForm() {
    const [formState, updateForm] = useImmer({
        name: '',
        email: '',
        message: '', 
    })

    return (<div className="ContactForm">
        <form>
            <div className="FormField">
                <label htmlFor='name' />
                <input id="name" type="text" name="name" value={formState.name}/>
            </div>
            <div className="FormField">
                <label htmlFor='email' />
                <input id="email" type="email" name="email" value={formState.email}/>
            </div>
            <div className="FormField">
                <label htmlFor='message' />
                <textarea id="message" cols={30} rows={10} name="message" value={formState.message}/>
            </div>
            <button className="btn btn--bg" type="submit">Submit</button>
        </form>
    </div>)
}