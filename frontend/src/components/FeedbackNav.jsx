import React from 'react'
import {CiStopwatch} from 'react-icons/ci'
import Countdown from './Countdown'

const FeedbackNav = () => {
  return (
    <div>
        <div>
            <div>
            <button>Back</button>
            <h2>Test your knowledge on HTML</h2>
            <span>Practise Quiz</span>. <span>1 hour</span>
            </div>
            <div>
                <CiStopwatch/>
                <Countdown/>
            </div>
        </div>
    </div>
  )
}

export default FeedbackNav