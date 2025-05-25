import React, {useEffect, useState} from 'react'
import { WiDayShowers } from 'react-icons/wi';


const CountDownTimer = ({ targetDate}) => {

    const calculateTimeLeft = () =>{
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {}

        if(difference > 0){
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        }
        else{
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    }

    const[timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() =>{
        const timer = setInterval(() =>{
            setTimeLeft(calculateTimeLeft());
        }, 1000)

        return () => clearInterval(timer)
    }, [targetDate]);

  return (
    <div>
        <p> <strong>{timeLeft.days}</strong> Days </p>
        <p> <strong>{timeLeft.hours}</strong> Hours </p>
        <p> <strong>{timeLeft.minutes}</strong> Minutes </p>
        <p> <strong>{timeLeft.seconds}</strong> Seconds </p>
    </div>
  )
}

export default CountDownTimer