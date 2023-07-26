import React, {useState, useEffect} from 'react'
import styles from '../forms/registerForm/register.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import formStyles from '../forms/forms.module.css'
import Api from './services/api'
import { toast } from 'react-toastify'
import { RotatingLines } from 'react-loader-spinner'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../features/userSlice'
import axios from 'axios'
import { getQuizzes } from '../../features/popularQuizzesSlice'



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const [checkbox, setCheckbox] = useState(false)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(true)
    const verifyCookie = Cookies.get('rememberMe')

    
    const navigate = useNavigate()
    const dispatch = useDispatch()
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


    const handleClick = async (e) =>{
        e.preventDefault();
        if(validateForm()){
            console.log(true);
            try {
                const data = {email, password, checkbox}
                setLoading(!loading)
                const response = await axios.post('https://quiz-master.onrender.com/api/users/login', data)
                console.log(response);
                toast.success(response.data.message)
                Cookies.set('rememberMe', response.data.accessToken)
                
                dispatch(addUser(response.data))

                Cookies.set('email',response.data.email);
                Cookies.set('id',response.data.id);
                Cookies.set('name', response.data.name);
                Cookies.set('image', response.data.profileImage)
                setTimeout(() => {
                    setLoading(true)
                }, 3000);
                navigate('/profile')
                
            } catch (error) {
                const err = error.response.data.message
                console.log(err);
                toast.warn(err)
                setTimeout(() => {
                    setLoading(true)
                  }, 3000);
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
        <NavLink to={"/forgetpassword"}>Forgot password?</NavLink>
    </div>
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
