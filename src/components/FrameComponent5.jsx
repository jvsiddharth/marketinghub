import { useMemo } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({
  ellipse3,
  eleanorPena,
  propPadding,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const eleanorPenaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.frameWrapper} style={frameDivStyle}>
      <div className={styles.frameParent}>
        <div className={styles.loremIpsumDolorSitAmetConWrapper}>
          <div className={styles.loremIpsumDolor}>
            ““
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.eleanorPenaParent}>
            <b className={styles.eleanorPena} style={eleanorPenaStyle}>
              {eleanorPena}
            </b>
            <div className={styles.ceo}>Ceo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
