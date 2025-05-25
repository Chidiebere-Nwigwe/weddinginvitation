import React, { useEffect, useRef, useState } from "react";
import styles from "./Homepage.module.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import backgroundImg from '../images/background3.jpg'

const RSVPForm = () => {
  const [response, setResponse] = useState(false);
  const [displayForm, setDisplayForm] = useState("");

  //my form fields
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    guests: "",
    song: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  //for handling input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisplayForm("none");
    setResponse(true);
    setError("");
    try {
      await addDoc(collection(db, "rsvps"), {
        ...formData,
        guests: parseInt(formData.guests, 10),
        timestamp: new Date(),
      });
      setSubmitted(true);
      setFormData({ name: "", attendance: "", guests: "", song: "" });
    } catch (err) {
      setError("Failed to send RSVP. Try again.");
      console.error(err);
    }
  };

  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // true when in view, false when out
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
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
    <div className={styles.RSVPFormParentDiv} style={{ backgroundImage: `url(${backgroundImg})`}}>
      <div
        ref={cardRef}
        className={`${styles.RSVPFormOverallDiv} ${
          isVisible ? styles.fadeIn : ""
        }`}
      >
        <div className={styles.RSVPForm} style={{ display: displayForm}}>
          <h3>RSVP</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <br></br>
              <input
                type="text"
                id="name"
                required
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
              />
            </div>

            <div>
              <label htmlFor="attendance">Confirmation of Attendance</label>
              <br></br>

              <select
                id="attendance"
                name="attendance"
                onChange={handleChange}
                required
                value={formData.attendance}
                placeholder="Attendance"
              >
                <option value="" disabled hidden>Select one</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label htmlFor="guests">Number of Guests: </label>
              <br></br>

              <input
                type="number"
                id="guests"
                required
                onChange={handleChange}
                value={formData.guests}
                placeholder="Guests"
              />
            </div>

            <div>
              <label htmlFor="song">I can't help but dance when I hear..</label>
              <br></br>

              <input
                type="text"
                id="song"
                required
                onChange={handleChange}
                value={formData.song}
                placeholder="Song"
              />
            </div>

            <button type="submit">Reply Now</button>
          </form>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* THANK YOU DIV */}
        <div className={`${response ? styles.showResponse : styles.hideResponse}`}>
          <p>Thank you</p>
          <p>Your response has been submitted</p>
        </div>
      </div>
    </div>
  );
};

export default RSVPForm;
