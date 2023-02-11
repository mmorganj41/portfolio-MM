import {FormEventHandler, useState} from 'react';
import {useImmer} from 'use-immer';
import { send } from '@emailjs/browser';

import './ContactForm.css';

export default function ContactForm() {
    const [formState, updateForm] = useImmer({
        name: '',
        email: '',
        message: '', 
    })

    const [status, setStatus] = useState('')

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const key = e.target.name;
        
        updateForm(draft => {
            (draft as Record<string, string>)[key] = e.target.value;
        });
           
    }

    async function handleSubmit(e: any) {
        e.preventDefault();
        try {
            setStatus('loading');
            await send('service_v2vp1tp', 'template_ltbxcma', formState, '3M13N5dcfiSL1vOlK');
            setStatus('sent')
        } catch(err) {
            console.log(err);
            setStatus('error');
        }
    }

    return (<div className="ContactForm">
        <form>
            <div className="FormField">
                <label htmlFor='name'>Name</label>
                <input id="name" type="text" name="name" value={formState.name} onChange={handleChange}/>
            </div>
            <div className="FormField">
                <label htmlFor='email'>Email</label>
                <input id="email" type="email" name="email" value={formState.email} onChange={handleChange}/>
            </div>
            <div className="FormField">
                <label htmlFor='message'>Message</label>
                <textarea id="message" cols={30} rows={3} name="message" value={formState.message} onChange={handleChange}/>
            </div>
            <button className="btn" type="submit" disabled={ status=== 'sent' || status==='loading'} onClick={handleSubmit}>{status === 'loading' ? (<i className="fa fa-spinner" aria-hidden="true" />) : status === 'sent' ? 'Sent!' : 'Submit'}</button>
        </form>
    </div>)
}