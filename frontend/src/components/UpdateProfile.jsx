import { useState } from 'react'
import Api from './forms/services/api'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import AddPhoto from './forms/uploadPhoto/AddPhoto'
import { RotatingLines } from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import axios from 'axios'
import PhoneInput from 'react-phone-number-input'

const UpdateProfile = () => {
    const [email, setEmail] = useState(Cookies.get('email'))
    const [name, setName] = useState(Cookies.get('name'))
    const [contact, SetContact] = useState('')
    const [location, setLocation] = useState('')
    const [gender, setGender] = useState();
    const [errors, setErrors] = useState({})
    const token = useSelector(state=>state.userData.user_token);
  
    const validateField=()=>{
      const newErrors = {}
  
      // Validate email
      if (email.trim() === '') {
        newErrors.email = `Email cannot be empty`
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Email is invalid'
      }
  
      //Validate Name
      if(name.trim() === ''){
        newErrors.name = `Name cannot be empty`
      }
  
      //validate contact
        const contactPattern = /^\d{10}$/; // Validates a 10-digit phone number
        if(contact.trim() === ''){
            newErrors.contact = `Contact cannot be empty`
        }else if(!contactPattern.test(contact)){
            newErrors.contact = 'Contact must be 10 digits'
        }else if(! /^\+?[1-9]\d{1,14}$/.test(contact)){
            newErrors.contact = 'Contact invalid'
        }

        setErrors(newErrors)
    }
  
    const handleProfileUpdate = async e =>{
      const id = Cookies.get('id')
      e.preventDefault()
      const data = {name, email, contact, location, gender}
  
       const isEmpty = Object.values(data).some(value => value === '')
           if (isEmpty) {
      // Prompt the user to fill the empty fields
        toast.warn('Please fill in all the fields')
         return
             }
        if(validateField()){
             try {
        const response = await axios.patch(`https://quiz-master.onrender.com/api/users/account/${id}/details`, data, {
          headers:{
            'Authorization' : `Bearer ${token}`
          }
        })
        if(response.status === 200){
        Cookies.set('name', response.data.name)
        Cookies.set('email', response.data.email)
        toast.success(response.data.message)
        window.location.reload()
      }
      } catch (error) {
        const err = error.response.data.message
        toast.warn(err)
      }
        }
      
    }
  
    return (
      <div className="lg:ml-[5rem] 2xl:ml-[-3rem]" >
        <div className='hidden md:block'><AddPhoto component='updateProfile'/></div>
        <form onSubmit={handleProfileUpdate} className='px-8 md:px-0'>
        <div className="md:mt-[41px] md:grid md:grid-cols-2 md:gap-[1.5rem] md:w-fit">
          <div className=''>
            <label>Full Name* </label>
            <div className="mt-[8px] md:w-fit ">
              <input
                className="border py-[0.5rem] px-[1rem] rounded w-full"
                placeholder={Cookies.get('name')}
                type="text"
                value={name}
                onChange = {e=>setName(e.target.value)}
              />
            </div>
            {errors.name && <div className='text-red-400'>{errors.name}</div>}
          </div>
          <div className=' md:mt-[0px] mt-[24px]'>
            <label htmlFor='email'>Email*</label>
            <div className="mt-[8px] md:w-fit">
              <input
                className="border py-[0.5rem] px-[1rem] rounded w-full"
                placeholder={Cookies.get('email')}
                onChange={e => setEmail(e.target.value)}
                type="email"
                name="email"
                value={email}
              />
            </div>
            {errors.email && <div className='text-red-400'>{errors.email}</div>}
          </div>
          <div className=' md:mt-[0px] mt-[24px]'>
            <label htmlFor='contact'>Contact</label>
            <div className="mt-[8px] md:w-fit">
              <input
                className="border py-[0.5rem] px-[1rem] rounded w-full"
                // type="tel"
                name='contact'
                value={contact}
                onChange={e=>SetContact(e.target.value)}
              />
            </div>
            {errors.contact && <div className='text-red-400'>{errors.contact}</div>}
          </div>
          <div className=' md:mt-[0px] mt-[24px]'>
            <label htmlFor='location'>Location</label>
            <div className="mt-[8px] md:w-fit">
              <input className="border py-[0.5rem] px-[1rem] rounded w-full"
              name='location' 
              value={location}
              onChange={e=>setLocation(e.target.value)}/>
            </div>
          </div>
          <div className="flex gap-[3rem]  md:mt-[0px] mt-[24px]" >
            <div>
              <input className="border" type="radio" value='male' name='gender' onChange={e=>setGender(e.target.value)}/> <label htmlFor='gender'>Male</label>
            </div>
            <div>
              <input className="border" type="radio" value='female' name='gender' onChange={e=>setGender(e.target.value)}/> <label htmlFor='gender'>Female</label>
            </div>
          </div>
        </div>
        <button className="p-[0.5rem] w-max h-fit self-center mt-[34px] bg-[#0267FF]">
          Save changes
        </button>
        </form>
      </div>
    )
  }
  
export default UpdateProfile