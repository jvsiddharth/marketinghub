import styles from "./FrameComponent21.module.css";

const FrameComponent21 = () => {
  return (
    <section className={styles.iphone13Mini1Inner}>
      <div className={styles.ellipseParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/ellipse-2-11@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.increasenInSalesWrapper}>
            <div className={styles.increasenInSalesContainer}>
              <p className={styles.p}>+ 40%</p>
              <p className={styles.increasenInSales}>increasen in sales</p>
            </div>
          </div>
          <img className={styles.snapchatIcon} alt="" src="/-snapchat-11.svg" />
          <img
            className={styles.telegramIcon}
            loading="lazy"
            alt=""
            src="/-telegram-11.svg"
          />
          <div className={styles.ellipseGroup}>
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <img
              className={styles.ellipseIcon}
              loading="lazy"
              alt=""
              src="/ellipse-1-11@2x.png"
            />
          </div>
        </div>
        <img
          className={styles.twitterIcon}
          loading="lazy"
          alt=""
          src="/-twitter-11.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent21;
