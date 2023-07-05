import React from 'react'
import styles from './forms.module.css'

const Input = ({label,name,type, placeholder, inputValue, setInputValue, setValid, valid}) => {
  return (
    <div className={styles.inputContainer}>
        <label className={styles.label}>{label}</label>
        <div>
            <input
                placeholder={placeholder}
                type={type}
                name={name}
                value={inputValue}
                onChange={() => setValid(!valid)}
                onBlur={e => e.target.placeholder = `${placeholder}`}
                onFocus={e => e.target.placeholder = `Enter a valid ${name}`}
                className={styles.input}
                required
            />
        </div>
    </div>
  )
}


export default Input