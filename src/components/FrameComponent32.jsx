import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.wantToTalkToAMarketingExParent}>
          <h1 className={styles.wantToTalkContainer}>
            <p className={styles.wantToTalk}>Talk to a</p>
            <p className={styles.marketingExpert}>marketing expert</p>
          </h1>
          <img
            className={styles.shapesIcon}
            loading="lazy"
            alt=""
            src="/shapes-1.svg"
          />
        </div>
        <div className={styles.frameContainer}>
        <div className={styles.contactWithUs}>Contact with us</div>
        </div>
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group-2.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
