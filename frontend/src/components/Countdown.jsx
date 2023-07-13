
import { useEffect, useRef, useState} from 'react'

const Countdown = () => {
    const [timer, setTimer] = useState("00:00:00")
    const Ref = useRef()
    function getTimeRemaining(e) {
        const total = Date.parse(e) - Date.parse(new Date())
        const hour = Math.floor(total(1000 * 60 * 60) %24);
        const minutes = Math.floor((total / 1000) %60);
        const seconds = Math.floor((total / 1000/ 60) %60);

        return {total, hour, minutes, seconds};
    }
    function startTimer(e) {
        let {total, hour, minute, seconds} = getTimeRemaining(e);
        if(total >= 0) {
            setTimer(
                (hour > 9 ? hour : '0' + hour) + ':' +
                (minute > 9 ? minute : '0' + minute) + ':' +
                (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
    function clearTimer(e) {
        setTimer("01:00:00")
        if(Ref.current) clearInterval(Ref.current);
          const id = setInterval(()=> {
            startTimer(e)
        }, 1000)
        Ref.current=id;
    }
    function getDeadTime() {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }
    useEffect(()=>{
        getDeadTime()
        },[])
  return (
    <div>
        {timer}
    </div>
  )
}

export default Countdown