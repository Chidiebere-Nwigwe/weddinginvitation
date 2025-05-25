import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Homepage.module.css'
import CountDownTimer from './CountDownTimer';

const InvitationCard = () => {

  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // true when in view, false when out
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={styles.invitationCardParentDiv}
    >
        <div  
          ref={cardRef}    
          className={`${styles.invitationCard} ${isVisible ? styles.slideIn : ''}`}
        >
            <h2><span className={styles.span1}>Wedding Ceremony</span></h2>
            <h2>Thursday, 31st Dec 2025</h2>
            <h2>15:00 PM</h2>

            <hr></hr>

            <p>Calgary, Alberta</p>
            <h2>Sunday Brunch</h2>

            <hr></hr>

            <p>"Cocktails and photos to follow after the cermony"</p>
            <h2>Wedding Reception</h2>

            <hr></hr>

            <p>Till Midnight</p>
            <h2>To keep the excitement alive,
                we're keeping the venue a surprise until closer to the big day. 
                Full details will be shared with you soon.
            </h2>

            <div>
                <p>“Dinner ! Drinks ! And don’t forget to bring your dancing shoes💃🏾💃🕺🏾🕺”</p>
            </div>

            <h2>Countdown to Wedding Day</h2>

            <CountDownTimer targetDate="2025-12-31T15:00:00" />
            <h2><span>Save the date</span></h2>


        </div>
    </div>

  )
}

export default InvitationCard