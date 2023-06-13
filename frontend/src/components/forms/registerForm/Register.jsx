import React, { useState, useEffect } from 'react'
import styles from './register.module.css'
import { NavLink } from 'react-router-dom'
import google from '../../../assets/Desktop View/Icons/Google logo.png'
import { useGoogleLogin } from '@react-oauth/google'
import { useDispatch, useSelector } from 'react-redux'
import { increaseCount } from '../../../features/stepperSlice'
import Api from '../services/api'
import { toast } from 'react-toastify'
import { RotatingLines } from 'react-loader-spinner'
import { RotateLoader } from 'react-spinners'
import Cookies from 'js-cookie'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  //google auth
  const [user, setUser] = useState([])
  const [profile, setProfile] = useState([])
  const { count } = useSelector(store => store.counter)

  // const login = useGoogleLogin({
  //   onSuccess: codeResponse => setUser(codeResponse),
  //   onError: error => console.log('Login Failed:', error),
  // })

  // useEffect(() => {
  //   if (user) {
  //     axios
  //       .get(
  //         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${user.access_token}`,
  //             Accept: 'application/json',
  //           },
  //         }
  //       )
  //       .then(res => {
  //         setProfile(res.data)
  //       })
  //       .catch(err => console.log(err))
  //   }
  // }, [user])

  const validateForm = () => {
    const newErrors = {}
    // Validate name
    if (username.trim() === '') {
      newErrors.username = 'Name is required'
    }

    // Validate email
    if (email.trim() === '') {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid'
    }

    // Validate password
    if (password.trim() === '') {
      newErrors.password = 'Password is required'
    } else if (password.length < 8) {
      newErrors.password = 'Password should contain atleast 8 characters'
    }

    setErrors(newErrors)

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0
  }

  const handleClick = async () => {
    if (validateForm()) {
      try {
        const data = { name: username, email, password }
      setLoading(!loading)
      const response = await Api.post('registerUser', data)
      console.log(response);
      if(response.data.success === true){
        Cookies.set('userId', response.data.user._id)
        toast.success('account created successfully')
        setTimeout(() => {
          dispatch(increaseCount())
        }, 4000);
      }
      setTimeout(() => {
        setLoading(true)
      }, 5000);
        
      } catch (error) {
        const err = error.response.data.message
        console.log(err)
        toast.warn(err)
        setTimeout(() => {
          setLoading(true)
        }, 5000);
      }
      
    }
  }

  return (
    <div className={styles.formsStep1}>
      <h2 className={styles.registerHeading}>Create Account</h2>
      <p className={styles.pageDescription}>
        "Sign up effortlessly and get started!"
      </p>

      <div className={styles.inputContainer}>
        <label className={styles.label}>Name</label>
        <div>
          <input
            placeholder="John Doe"
            type="text"
            name="name"
            value={username}
            onChange={e => setUsername(e.target.value)}
            onBlur={e => (e.target.placeholder = `John Doe`)}
            onFocus={e => (e.target.placeholder = `Enter a valid name`)}
            className={styles.input}
          />
        </div>
        {errors.name && <div className={styles.alert}>{errors.username}</div>}
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label}>Email</label>
        <div>
          <input
            placeholder="johndoe@gmail.com"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onBlur={e => (e.target.placeholder = `email`)}
            onFocus={e => (e.target.placeholder = `Enter a valid email`)}
            className={styles.input}
          />
        </div>
        {errors.email && <div className={styles.alert}>{errors.email}</div>}
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label}>Password</label>
        <div>
          <input
            placeholder="***********"
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onBlur={e => (e.target.placeholder = `password`)}
            onFocus={e => (e.target.placeholder = `Enter a valid password`)}
            className={styles.input}
            minLength={10}
          />
        </div>
        {errors.password && (
          <div className={styles.alert}>{errors.password}</div>
        )}
      </div>

      <div className={styles.createAccountBtn}>
        {!loading ? (
        <RotatingLines strokeColor="grey" strokeWidth="4" animationDuration="0.95" width="40" visible={true}/>
        ): (
        <button onClick={handleClick} className={styles.createBtn}>
          Create Account
        </button>
        )}
        
      </div>

      <div className={styles.googleContainer}>
        <button className={styles.googleBtn} onClick={() => login()}>
          <img src={google} alt="google logo" className={styles.googleLogo} />
          <span className={styles.signup}>Sign up with Google</span>
        </button>
      </div>

      <div className={styles.authenticationAlt}>
        <p>Already have an account?</p>
        <NavLink className={styles.AltNavigate} to="/login">
          Log In
        </NavLink>
      </div>
    </div>
  )
}

export default Register
