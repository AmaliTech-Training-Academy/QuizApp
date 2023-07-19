import React,{useEffect} from 'react'
import { SettingsNavbar } from './GeneralSettings'
import { UserDetails } from './AccountSettings'
import Cookies from 'js-cookie'
import Api from '../components/forms/services/api'
import UserQuizzes from '../components/UserQuizzes'

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
      <div className='w-fit m-auto'><UserQuizzes/></div>
    </div>
  )
}

export default MyQuizzes

// export const UserQuizzes = () =>{
//   const id = Cookies.get('id')
//   const getQuizzes = async () =>{
//     const response = await Api.get(`users/${id}/quizzes`)
//   }
//   return(
//     <></>
//   )
// }
