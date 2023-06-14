import React from 'react'
import styles from '../forms/registerForm/register.module.css'
import { NavLink } from 'react-router-dom'
import formStyles from '../forms/forms.module.css'

const Login = () => {
  return (
    <form className={formStyles.forms}>
        <div className={styles.title}>
        <h2 className={styles.registerHeading}>Log in</h2>
        <div className={styles.authenticationAlt}>
            <p>New member?</p>
            <NavLink className={styles.AltNavigate} to="/login">
          Sign Up
        </NavLink>
        </div>
        </div>

        <div className={styles.inputContainer}>
            <label className={styles.label}>E-mail</label>
            <div>
                <input
                placeholder='johndoe@gmail.com'
                type='email'
                name='email'
                value=''
                // onChange={}
                onBlur={e => e.target.placeholder = 'johndoe@gmail.com'}
                onFocus={e => e.target.placeholder = `Enter a valid email`}
                className={styles.input}
            />
        </div>
    </div>

    <div className={styles.inputContainer}>
        <label className={styles.label}>Password</label>
        <div>
            <input
                placeholder='**************'
                type='password'
                name='password'
                value=''
                // onChange={}
                onBlur={e => e.target.placeholder = '**************'}
                onFocus={e => e.target.placeholder = `Enter a valid password`}
                className={styles.input}
                required
            />
        </div>
    </div>

    <div className={formStyles.rememberPassword}>
        <div className={formStyles.checkboxWrapper}>
            <input type='checkbox' className={formStyles.checkbox}/>
            <p>Remember me</p>
        </div>
        <NavLink>Forgot password?</NavLink>
    </div>
    <div className={formStyles.errMsg}>Oops! Your email or password appears to be incorrect. Please double-check your login details and try again.</div>
    <button className={styles.createBtn}>Login</button>
    </form>
  )
}

export default Login
