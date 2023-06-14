import React, { useState } from 'react'
import { bGround } from './bGround';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const ContactInput = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const notify = () => toast("Your message has been sent!", {theme:"light",})
    const URL = "https://quiz-master.onrender.com/api/message";


    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {name, email, phoneNumber, subject, message}
        const response = await axios.post(URL, data)
        if(response.status === 201){
            console.log('success')
            notify();
            setName('');
            setEmail(''); 
            setPhoneNumber(''); 
            setSubject('');
            setMessage('')
        }else{
            console.log('error');
        }
        
    };

  return (
    <div className='w-full lg:w-6/12 xl:w-4/6'>
          {/* Inputs */}
        <form className='xl:ml-16' onSubmit={onSubmit}>

          {/* Top half */}
            <div className='flex flex-col lg:flex-row gap-6'>
                {/* Name */}
                <label className='contact-label' htmlFor='name'>
                    <span className='input-name'>Name</span>
                    <input 
                    type="text" 
                    id='name' 
                    name='name' 
                    value={name} 
                    onChange={e=>setName(e.target.value)} 
                    className="contact-input" />
                </label>

                {/* Email */}
                <label className='contact-label' htmlFor='email'>
                    <span className='input-name'>Email</span>
                    <input 
                    type="email"
                    id='email' 
                    name='email' 
                    value={email} 
                    onChange={e=>setEmail(e.target.value)} 
                    className="contact-input" />
                </label>
            </div>

            {/* Bottom half */}

            <div className='flex gap-6'>

                {/* Phone */}
                <label className='mt-6  w-1/2 hidden lg:flex lg:flex-col' htmlFor='phone'>
                    <span className='input-name'>Phone Number</span>
                    <input 
                    type="phone"
                    id='phone' 
                    name='phone' 
                    value={phoneNumber}
                    // onChange={onChangeUser} 
                    onChange={(e) =>{setPhoneNumber(e.target.value)}}
                    className="contact-input" />
                </label>

                {/* Subject */}
                <label className='mt-6 w-1/2 hidden lg:flex lg:flex-col' htmlFor='subject'>
                    <span className='input-name'>Subject</span>
                    <input 
                    type="text" 
                    id='subject'
                    name='subject' 
                    value={subject} 
                    // onChange={onChangeUser} 
                    onChange={e=>setSubject(e.target.value)}
                    className="contact-input" />
                </label>
            </div>

                {/*Message */}
                <label className='mt-6 flex flex-col' htmlFor='subject'>
                    <span className='input-name'>Message</span>
                    <input 
                    type="textara" 
                    id='message' 
                    name='message' 
                    value={message} 
                    onChange={e=>{setMessage(e.target.value)}} 
                    className="h-44 border text-left px-4 border-gray-400 rounded focus:outline-none" />
                </label>
            <button className='w-full lg:w-5/12 mt-6 py-2.5 rounded text-white' onClick={onSubmit} style={bGround}>Submit</button>
        </form>
    </div>
  )
}
