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
            “Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. “
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src={ellipse3}
          />
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
