import React,{useEffect} from 'react'
import UpdateProfile from '../components/UpdateProfile'
import { UserDetails } from './AccountSettings'
import {MdOutlineClose} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const GeneralSettings = () => {
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
            <div className='py-[29px] bg-[#0267FF] text-white flex pl-[1.25rem] font-bold text-xl justify-between'>
                <MdOutlineClose className='self-center' onClick={()=>navigate('/account-settings')}/>
                <p >{title}</p>
                <p style={{visibility: 'hidden'}}>Hello</p>
            </div>
            <div className='flex py-[10px] px-[2rem] justify-between bg-[#F2F2F2]'>
                <p style={title ==='General' ? {color:'#0267FF'} : null} className='w-[100]'>General</p>
                <p style={title ==='Password' ? {color:'#0267FF'} : null} className='w-[100]'>Password</p>
                <p style={title ==='My Quizzes' ? {color:'#0267FF'} : null} className='w-[100]'>My quizzes</p>
            </div>
        </div>
    )
}