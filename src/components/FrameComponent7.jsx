import FrameComponent9 from "./FrameComponent9";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <FrameComponent9
          bringYourTargetUsers={`Build your brand & reach`}
          tigetherOnSocialMedia="out to social followers"
          propTextAlign="left"
        />
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/frame-28.svg"
              />
            </div>
            <div className={styles.engageWithYourContainer}>
              <p className={styles.engage}>{`Engage `}</p>
              <p className={styles.withYourFollowers}>with your followers</p>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.increasenInSalesParent}>
                <div className={styles.increasenInSalesContainer}>
                  <p className={styles.p}>+ 40%</p>
                  <p className={styles.increasenInSales}>increase in sales</p>
                </div>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/ellipse-2-2@2x.png"
                />
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group.svg"
                />
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent2}>
                  <div className={styles.layer2Wrapper}>
                    <img
                      className={styles.layer2Icon}
                      loading="lazy"
                      alt=""
                      src="/layer-2.svg"
                    />
                  </div>
                  <div className={styles.engageWithYourContainer1}>
                    <p className={styles.engage1}>{`Engage `}</p>
                    <p className={styles.withYourFollowers1}>
                      your followers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
