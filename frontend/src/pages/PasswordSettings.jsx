import React, {useEffect} from 'react'
import { SettingsNavbar } from './GeneralSettings'
import { UserDetails } from './AccountSettings'
import { UpdatePassword } from '../components/UpdateAccount'
import Cookies from 'js-cookie'

const PasswordSettings = () => {
    const verifyCookie = Cookies.get('rememberMe') 
    useEffect(() => {
        {
          !verifyCookie && navigate('/login')
        };
      }, [])
  return (
    <div>
      <SettingsNavbar title='Password'/>
      <div className='mt-[52px] w-fit px-2'><UserDetails/></div>
      <UpdatePassword/>
    </div>
  )
}

export default PasswordSettings
