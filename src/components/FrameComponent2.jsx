import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.formLayout}>
      <div
        className={styles.loremIpsumDolor}
      >{`“Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. `}</div>
      <div className={styles.iconLibrary}>
        <div className={styles.enterYourEmailWrapper}>
          <div className={styles.enterYourEmail}>Enter your email</div>
        </div>
        <button className={styles.tabContainer}>
          <div className={styles.subscribe}>Subscribe</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent2;
