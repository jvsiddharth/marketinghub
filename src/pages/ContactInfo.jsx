import React from 'react';
import styles from "./ContactInfo.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const ContactInfo = () => {
  const instagramUrl = "https://www.instagram.com/example";
  const facebookUrl = "https://www.facebook.com/example";

  return (
    <div className={styles.contactInfoContainer}>
      <div className={styles.phoneNumber}>Phone: +91 8208128045 </div>
      <div className={styles.email}>Email: soroushnorozyui@gmail.com</div>
      <div className={styles.email}>Address: On the web</div>
      <div className={styles.socialMediaIcons}>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </div>
  );
};


export default ContactInfo;