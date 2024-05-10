import styles from "./MessageForm.module.css";

const MessageForm = () => {
  return (
    <form className={styles.messageForm}>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default MessageForm;