import React,{useEffect} from 'react'
import { SettingsNavbar } from './GeneralSettings'
import { UserDetails } from './AccountSettings'
import Cookies from 'js-cookie'

const MyQuizzes = () => {
    const verifyCookie = Cookies.get('rememberMe') 
    useEffect(() => {
        {
          !verifyCookie && navigate('/login')
        };
      }, [])
  return (
    <div>
      <SettingsNavbar title ='My Quizzes'/>
      <div className='mt-[52px] w-fit px-2'><UserDetails/></div>
    </div>
  )
}

export default MyQuizzes
