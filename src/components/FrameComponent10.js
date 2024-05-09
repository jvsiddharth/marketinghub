import FrameComponent11 from "./FrameComponent11";
import styles from "./FrameComponent10.module.css";

const FrameComponent10 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.takeTheLeadInSmartlySociaParent}>
        <h1 className={styles.takeTheLeadContainer}>
          <p className={styles.takeTheLead}>Take the lead in smartly</p>
          <p className={styles.socialMediaMarketing}>social media marketing</p>
        </h1>
        <div className={styles.log}>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec urna.
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <FrameComponent11
            digitalMarketingPlan="/digital-marketing-plan.svg"
            digitalMarketinPlan="Digital marketin plan"
            vuesaxlineararrowRight="/vuesaxlineararrowright.svg"
          />
          <FrameComponent11
            digitalMarketingPlan="/social-media-strategy.svg"
            digitalMarketinPlan="Social media strategy"
            vuesaxlineararrowRight="/vuesaxlineararrowright-1.svg"
            propWidth="56px"
          />
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.searchEngineOptimizationParent}>
                <img
                  className={styles.searchEngineOptimization}
                  loading="lazy"
                  alt=""
                  src="/search-engine-optimization.svg"
                />
                <div className={styles.searchEngineOptimization1}>
                  Search engine optimization
                </div>
              </div>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
                pellentesque tortor. Sed massa sit vehicula in ut id donec
                urna.Lorem ipsum dolor sit amet consectetur. Cras
              </div>
              <div className={styles.discoverMoreParent}>
                <div className={styles.discoverMore}>Discover more</div>
                <img
                  className={styles.vuesaxlineararrowRightIcon}
                  alt=""
                  src="/vuesaxlineararrowright-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
