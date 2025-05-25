import React, {useState, useEffect} from 'react'
import slide1 from '../images/slide1.avif'
import slide2 from '../images/slide2.avif'
import slide3 from '../images/slide3.avif'
import slide4 from '../images/slide4.avif'
import area1Img from '../images/area1img.avif'

import styles from './Homepage.module.css'


const images = [
  slide1,
  slide2,
  slide4,
  slide3
];


const HeroSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
       goToNext();
    }, 2000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);



  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.container}>
        <div className={styles.area1} id='bibleTextArea'>
            <img src={area1Img} alt='Flower Bouquet' />
            <p>"So they are no longer two, but one flesh. Therefore what God has joined together, let no copilot separate."
                <br></br>
                (Matthew 19:6)
            </p>
        
        </div>

        {/* <div className={styles.area2} id='imageArea'>
          <img src={weddingimage} alt='Flower Bouquet' />
        </div> */}


    

        <div className={styles.slider}>
            <div
              className={styles.sliderInner}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Slide ${index + 1}`} />
            ))}
          </div>
        </div>

        {/* Manual buttons */}
        <div className={styles.heroSectionBtnDiv}>
          <button className={styles.prevButton} onClick={goToPrev}>
            ‹
          </button>
          <button className={styles.nextButton} onClick={goToNext}>
            ›
          </button>
        </div>

        <div className={styles.dotsContainer}>
            {
              images.map((_, index) =>(
                <span
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.activeDot : '' }`}
                  onClick={() => goToSlide(index)}
                  >
                </span>
              ))
            }
        </div>





    </div>
  )
}

export default HeroSection