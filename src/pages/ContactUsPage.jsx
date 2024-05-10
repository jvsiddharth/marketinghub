import FrameComponent32 from "../components/FrameComponent32";
import ContactInfo from "./ContactInfo";
import MessageForm from "./MessageForm";
import styles from "./ContactUsPage.module.css";

const ContactUsPage = () => {
  return (
    <div className={styles.desktopContainer}>
      <FrameComponent32 />
      <ContactInfo />
    </div>
  );
};

export default ContactUsPage;