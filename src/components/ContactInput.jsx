import React, { useState } from 'react'
import { bGround } from './bGround';
// import axios from 'axios';

export const ContactInput = () => {
    const [user, setUser] = useState({name: "", email: "", phone: "", subject: ""});
    const [userMsg, setUserMsg] = useState({message: ""});

    const onChangeUser = (e) => {
        setUser({...user, [e.target.name]: e.target.value })
    };

    const onChangeMsg = (e) => {
        setUserMsg({...userMsg, [e.target.name]: e.target.value})
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // await axios.post('apiendpoint')
        setUser({
            name: "",
            email: "",
            phone: "",
            subject: ""
        })
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
                    value={user.name} 
                    onChange={onChangeUser} 
                    className="contact-input" />
                </label>

                {/* Email */}
                <label className='contact-label' htmlFor='email'>
                    <span className='input-name'>Email</span>
                    <input 
                    type="email"
                    id='email' 
                    name='email' 
                    value={user.email} 
                    onChange={onChangeUser} 
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
                    value={user.phone} 
                    onChange={onChangeUser} 
                    className="contact-input" />
                </label>

                {/* Subject */}
                <label className='mt-6 w-1/2 hidden lg:flex lg:flex-col' htmlFor='subject'>
                    <span className='input-name'>Subject</span>
                    <input 
                    type="text" 
                    id='subject'
                    name='subject' 
                    value={user.subject} 
                    onChange={onChangeUser} 
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
                    value={userMsg.message} 
                    onChange={onChangeMsg} 
                    className="h-44 border border-gray-400 rounded focus:outline-none" />
                </label>
            <button className='w-full lg:w-5/12 mt-6 py-2.5 rounded text-white' style={bGround}>Submit</button>
        </form>
    </div>
  )
}
