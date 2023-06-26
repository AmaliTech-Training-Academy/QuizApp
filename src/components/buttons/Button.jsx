import React from 'react'
import styles from './button.module.css'
const Button = ({
  variant,
  type,
  children,
  borderType,
  page,
  setCount,
  count,
  done,
  setCompleted,
  disabled,
}) => {
  const handleClick = () => {
    if (page === 'signup') {
      setCount(count + 1)
    }
    if (done === 'true') {
      setCompleted(true)
    }
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className={`${styles.button} ${styles[variant]} ${styles[type]} ${styles[borderType]}`}
        disabled={disabled}>
        {children}
      </button>
    </div>
  )
}
export default Button

