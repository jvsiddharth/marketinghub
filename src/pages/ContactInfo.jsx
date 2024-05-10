import React from 'react';
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfoContainer}>
      <div className={styles.phoneNumber}>Phone: +88 (246) 658-27-10</div>
      <div className={styles.email}>Email: soroushnorozyui@gmail.com</div>
    </div>
  );
};

export default ContactInfo;