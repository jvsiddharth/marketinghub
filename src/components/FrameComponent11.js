import { useMemo } from "react";
import styles from "./FrameComponent11.module.css";

const FrameComponent11 = ({
  digitalMarketingPlan,
  digitalMarketinPlan,
  vuesaxlineararrowRight,
  propWidth,
}) => {
  const digitalMarketingPlanStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.digitalMarketingPlanParent}>
          <img
            className={styles.digitalMarketingPlan}
            loading="lazy"
            alt=""
            src={digitalMarketingPlan}
            style={digitalMarketingPlanStyle}
          />
          <div className={styles.digitalMarketinPlan}>
            {digitalMarketinPlan}
          </div>
        </div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
          pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem
          ipsum dolor sit amet consectetur. Cras
        </div>
        <div className={styles.discoverMoreParent}>
          <div className={styles.discoverMore}>Discover more</div>
          <img
            className={styles.vuesaxlineararrowRightIcon}
            loading="lazy"
            alt=""
            src={vuesaxlineararrowRight}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
