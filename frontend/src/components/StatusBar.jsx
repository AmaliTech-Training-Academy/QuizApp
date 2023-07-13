import React from 'react'

const StatusBar = ({score}) => {
    let message;
    if (score >= 80) {
        message = `Congratulations! You passed! Grade received ${score}`;
    } else {
      message = `Sorry! You failed! Grade received  ${score}`;
    }
  return (
    <div>
        <div>
            {message}
            <p>To pass 80% or higher</p>
        </div>
        <div>
            <button>Next item</button>
        </div>
    </div>
  )
}

export default StatusBar