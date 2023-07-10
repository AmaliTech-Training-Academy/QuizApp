import React,{useEffect} from 'react'
import { UpdateProfile } from '../components/UpdateAccount'
import { UserDetails } from './AccountSettings'
import {MdOutlineClose} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const GeneralSettings = ({general, password}) => {
    const verifyCookie = Cookies.get('rememberMe') 
    useEffect(() => {
        {
          !verifyCookie && navigate('/login')
        };
      }, [])
  return (
    <div>
        <SettingsNavbar title='General'/>
        <div className='mt-[52px] w-fit px-2'><UserDetails/></div>
      <UpdateProfile/>
    </div>
  )
}

export default GeneralSettings

export const SettingsNavbar = ({title})=>{
    const navigate = useNavigate()
    return(
        <div>
            <div className='py-[29px] bg-[#0267FF] text-white flex pl-[1.25rem] font-bold text-xl'>
                <MdOutlineClose className='self-center' onClick={()=>navigate('/account-settings')}/>
                <p className='ml-[7.5rem]'>{title}</p>
            </div>
            <div className='flex py-[10px] px-[4.188rem] justify-between bg-[#F2F2F2]'>
                <p style={title ==='General' ? {color:'#0267FF'} : null}>General</p>
                <p style={title ==='Password' ? {color:'#0267FF'} : null}>Password</p>
                <p style={title ==='My Quizzes' ? {color:'#0267FF'} : null}>My quizzes</p>
            </div>
        </div>
    )
}