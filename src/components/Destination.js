import React, { useEffect, useRef, useState } from "react";
import styles from "./Homepage.module.css";
import weddingimage from "../images/weddingimage.webp";
import backgroundImg from '../images/background3.jpg'

const Destination = () => {
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
    <div className={`${styles.destination}`} style={{ backgroundImage: `url(${backgroundImg})`}}>
      <div ref={cardRef} 
      className={`${styles.destinationOverallDiv} ${isVisible ? styles.fadeIn: ''}`}
      >
        <div className={styles.wedding}>
          <p>Destination Wedding of</p>
          <p className={styles.highlight}>Emeka & Oby</p>
          <p>31.12.2025</p>
          <p>Calgary, Alberta</p>
        </div>

        <div className={styles.divForSection}>
          <section>
            <p className={styles.sectionP} >Together with our parents</p>
            <p className={styles.sectionP} >We request the honor of your presence</p>
            <p className={styles.sectionP} >at our wedding</p>

            <img src={weddingimage} alt="Wedding" />

            <p className={styles.left}>Kenneth Nwigwe</p>
            <p className={styles.center}> & </p>
            <p className={styles.right}>Obiageli Offorjebe</p>
            <p className={styles.hashtag}>#KenOby2025 #Oby2Ken2025</p>
          </section>
        </div>
      </div>

    </div>
  );
};

export default Destination;
