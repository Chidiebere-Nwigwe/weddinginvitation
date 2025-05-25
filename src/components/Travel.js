import React, { useEffect, useRef, useState } from 'react';
import styles from './Homepage.module.css'

const Travel = () => {

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
      ref={cardRef}
      className={`${styles.travel} ${isVisible ? styles.slideFromLeft : '' }`}>
        <h3>Travel & Accommodation</h3>
        <p>
        We are delighted to welcome you to Calgary. 
        Kindly note that flights, hotel stays, and 
        personal transportation outside of scheduled events will be at guests’ own discretion.
        </p>
        <p>
        To ensure a seamless travel experience, 
        our dedicated concierge service is available for hotel reservations, airport transfers, 
        and local travel assistance.
        </p>
        <a href='mailto:chidonnwigz@gmail.com'>Email: chidonnwigz@gmail.com</a>
    </div>
  )
}

export default Travel