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
          
        </div>
        <div className={styles.discoverMoreParent}>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
