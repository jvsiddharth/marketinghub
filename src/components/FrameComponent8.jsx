import FrameComponent9 from "./FrameComponent9";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameGroup}>
            <div className={styles.increasenInSalesWrapper}>
              <div className={styles.increasenInSalesContainer}>
                <p className={styles.p}>+ 40%</p>
                <p className={styles.increasenInSales}>increasen in sales</p>
              </div>
            </div>
            <img
              className={styles.snapchatIcon}
              loading="lazy"
              alt=""
              src="/-snapchat-1.svg"
            />
            <img
              className={styles.telegramIcon}
              loading="lazy"
              alt=""
              src="/-telegram-1.svg"
            />
            <div className={styles.ellipseGroup}>
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
            </div>
          </div>
          <img
            className={styles.twitterIcon}
            loading="lazy"
            alt=""
            src="/-twitter-1.svg"
          />
        </div>
        <FrameComponent9
          bringYourTargetUsers="Bring your target users"
          tigetherOnSocialMedia="together on social media"
        />
      </div>
    </div>
  );
};

export default FrameComponent8;
