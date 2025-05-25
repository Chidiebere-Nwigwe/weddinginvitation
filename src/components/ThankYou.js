import React from 'react';
import styles from './Homepage.module.css';
import backgroundImg from '../images/weddingimage.webp';

const ThankYou = () => {
  return (
    <div className={styles.thankYou}>
      <div
        className={styles.backgroundBlur}
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />
      <div className={styles.overlay}>
        <p>Thank You</p>
      </div>
    </div>
  );
};

export default ThankYou;
