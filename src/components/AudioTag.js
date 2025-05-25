import React, { useRef, useEffect, useState } from 'react';
import { FaCompactDisc } from 'react-icons/fa';
import styles from './Homepage.module.css';

const AudioTag = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.play().catch(() => {
      // Autoplay failed — user needs to click
      setIsPlaying(false);
      setAutoplayBlocked(true);
    });
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
      setAutoplayBlocked(false); // Hide the prompt once playing
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.audioTag}>
      <audio ref={audioRef} src="/music/loveaudio.mp3" loop> Your browser does not support the audio element. </audio>
      <FaCompactDisc
        className={`${styles.icon} ${isPlaying ? styles.spin : ''}`}
        size={40}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
        onClick={toggleAudio}
        style={{ cursor: 'pointer' }}
      />
      {autoplayBlocked && (
        <button
          className={styles.playButton}
          onClick={toggleAudio}
          style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer' }}
        >
          Click to play music
        </button>
      )}
    </div>
  );
};

export default AudioTag;
