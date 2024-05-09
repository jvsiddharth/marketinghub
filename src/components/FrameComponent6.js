import styles from "./FrameComponent6.module.css";

const FrameComponent6 = () => {
  return (
    <section className={styles.desktop1Inner}>
      <div className={styles.frameParent}>
        <div className={styles.maskGroupParent}>
          <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
          <div className={styles.frameGroup}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/frame-30.svg"
            />
            <button className={styles.inputSplitter}>
              <img
                className={styles.vuesaxboldplayCircleIcon}
                alt=""
                src="/vuesaxboldplaycircle-1.svg"
              />
              <div className={styles.watchADemo}>Watch a demo</div>
            </button>
          </div>
        </div>
        <div className={styles.theEasiestWayToPromoteSocParent}>
          <h1 className={styles.theEasiestWayContainer}>
            <p className={styles.theEasiestWay}>The easiest way to</p>
            <p className={styles.promoteSocialMedia}>promote social media</p>
          </h1>
          <div className={styles.buildACommunity}>Build a community</div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec urna.
          </div>
          <div className={styles.videoLive}>{`Video & live streaming`}</div>
          <div
            className={styles.loremIpsumDolor1}
          >{`Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet `}</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
