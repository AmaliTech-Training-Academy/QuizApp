import React, { useState, useEffect } from 'react'
import styles from './register.module.css'
import { NavLink} from 'react-router-dom'
import google from '../../../assets/DesktopView/Icons/googleLogo.png'
import { useDispatch} from 'react-redux'
import { increaseCount } from '../../../features/stepperSlice'
import Api from '../services/api'
import { toast } from 'react-toastify'
import { RotatingLines } from 'react-loader-spinner'
import Cookies from 'js-cookie'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState('');

  const dispatch = useDispatch()  

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
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/.test(password)) {
      newErrors.password = 'Must contain atleast one uppercase, one digit and one special character from the set @$!%*#?& and min(10)'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  };

  const handleClick = async () => {
    if (validateForm()) {
      try {
        const data = { name: username, email, password }
      setLoading(!loading)
      const response = await Api.post('users', data)
      if(response.data.success === true){
        const userId = response.data.user._id;
        Cookies.set('userId', userId);
        setUserId(userId);
        toast.success('account created successfully')
        setTimeout(() => {
          dispatch(increaseCount())
        }, 4000);
      }
      setTimeout(() => {
        setLoading(true)
      }, 4000);
        
      } catch (error) {
        const err = error.response.data.message
        toast.warn(err)
        setTimeout(() => {
          setLoading(true)
        }, 5000);
      }
      
    }
  };

  const handleGoogleLogin = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then(googleUser => {
      const id_token = googleUser.getAuthResponse().id_token;
      Api.post('users', { id_token })
        .then(response => {
          // Handle the response from the server
          console.log(response.data);
        })
        .catch(error => {
          // Handle any errors that occur during the API request
          console.error(error);
        });
    });
  };

  useEffect(() => {
    // Load the Google Sign-In API script
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id:
            '387373038848-c507h2u37ddgtugst4le2psbjf8q6l5s.apps.googleusercontent.com',
        });
      });
    };
    document.body.appendChild(script);

    // Check if userId exists in cookies and set it in the state
    const userIdFromCookie = Cookies.get('userId');
    if (userIdFromCookie) {
      setUserId(userIdFromCookie);
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.formsStep1}>
      {errors.password && (
          <div className={styles.alert}>{errors.password}</div>
        )}
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
        <button className={styles.googleBtn} onClick={handleGoogleLogin}>
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
