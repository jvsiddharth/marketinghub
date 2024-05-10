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
            Leads are our work, Make your business shout out in the market,
            don't sit quiet while rest sell their best, we will do our best for you.
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <FrameComponent11
            digitalMarketingPlan="/digital-marketing-plan.svg"
            digitalMarketinPlan="Digital marketing"
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
              <div className={styles.digitalMarketingPlanParent}>
                <img
                  className={styles.searchEngineOptimization}
                  loading="lazy"
                  alt=""
                  src="/search-engine-optimization.svg"
                />
                <div className={styles.loremIpsumDolor}>
                </div>
                Search engine optimization
              </div>
              <div className={styles.loremIpsumDolor1}>
              </div>
              <div className={styles.socialMediaMarketing}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
