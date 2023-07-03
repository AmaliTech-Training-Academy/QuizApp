import React, {useState, useEffect} from 'react'
import styles from '../forms/registerForm/register.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import formStyles from '../forms/forms.module.css'
import Api from './services/api'
import { toast } from 'react-toastify'
import { RotatingLines } from 'react-loader-spinner'
import Cookies from 'js-cookie'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const [checkbox, setCheckbox] = useState(false)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(true)
    const verifyCookie = Cookies.get('rememberMe')
    
    const navigate = useNavigate()
    useEffect(()=>{
        verifyCookie && navigate('/profile')
    },[])

    const validateForm = () =>{
        const newErrors = {}
        if (email.trim() === '') {
            newErrors.email = 'Email is required'
          } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid'
          }
          if (password.trim() === '') {
            newErrors.password = 'Password is required'
          } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/.test(password)) {
            newErrors.password = 'Password must contain at least one uppercase,at least one digit and at least one special character from the set @$!%*#?& and min(10)'
          }
          setErrors(newErrors)
          return Object.keys(newErrors).length === 0
    };


    const handleClick = async e =>{
        e.preventDefault();
        if(validateForm()){
            try {
                const data = {email, password , checkbox}
                setLoading(!loading)
                const response = await Api.post('users/login', data)
                toast.success(response.data.message)
                Cookies.set('rememberMe', response.data.accessToken)
                
                Cookies.set('email',response.data.email);
                Cookies.set('id',response.data.id);
                Cookies.set('name', response.data.name);
                setTimeout(() => {
                    setLoading(true)
                  }, 5000);
                  navigate('/profile')
                
            } catch (error) {
                console.log(error)
                const err = error.response.data.message
                toast.warn(err)
                setTimeout(() => {
                    setLoading(true)
                  }, 5000);
            }
        }
    };

  return (
    <form className={formStyles.forms}>
        <div className={styles.title}>
        <h2 className={styles.registerHeading}>Log in</h2>
        <div className={`${styles.authenticationAlt} ${formStyles.newMember}`}>
            <p>New member?</p>
            <NavLink className={styles.AltNavigate} to="/signup">
                Sign Up
            </NavLink>
        </div>
        </div>
        <p className={styles.pageDescription}>"Sign up effortlessly and get started!"</p>
        <button className={`${styles.googleBtn} ${styles.googleMobile}`}>Log in with Google</button>

        <div className={`${styles.loginwithMail}`}><span>Log in with Email</span></div>
        
        {errors.password && <div className={styles.alert}>{errors.password}</div>}

        <div className={styles.inputContainer}>
            <label className={styles.label}>E-mail</label>
            <div>
                <input
                placeholder='johndoe@gmail.com'
                type='email'
                name='email'
                value={email}
                onChange={e=>setEmail(e.target.value)}
                onBlur={e => e.target.placeholder = 'johndoe@gmail.com'}
                onFocus={e => e.target.placeholder = `Enter a valid email`}
                className={styles.input}/>
            </div>
            {errors.email && <div className={styles.alert}>{errors.email}</div>}
    </div>

    <div className={styles.inputContainer}>
        <label className={styles.label}>Password</label>
        <div>
            <input
                placeholder='**************'
                type='password'
                name='password'
                value={password}
                onChange={e=>setPassword(e.target.value)}
                onBlur={e => e.target.placeholder = '**************'}
                onFocus={e => e.target.placeholder = `Enter a valid password`}
                className={styles.input}/>
        </div>
    </div>

    <div className={formStyles.rememberPassword}>
        <div className={formStyles.checkboxWrapper}>
            <input type='checkbox' className={formStyles.checkbox} onChange={e=>setCheckbox(e.target.checked)} checked={checkbox}/>
            {checkbox && console.log('checked')}
            <p>Remember me</p>
        </div>
        <NavLink>Forgot password?</NavLink>
    </div>
    {/* <div className={formStyles.errMsg}>Oops! Your email or password appears to be incorrect. Please double-check your login details and try again.</div> */}
    {!loading ? (
        <RotatingLines strokeColor="grey" strokeWidth="4" animationDuration="0.95" width="40" visible={true}/>
        ): (
            <button className={styles.createBtn} style={{marginTop:'32px', marginBottom:'5px'}} onClick={handleClick}>Login</button>
        )}
    
    <p className={styles.pageDescription}>By continuing you accept our standard terms and conditions and our privacy policy.</p>
    </form>
  )
}

export default Login
