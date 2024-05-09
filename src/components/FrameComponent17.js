import { useMemo } from "react";
import styles from "./FrameComponent17.module.css";

const FrameComponent17 = ({
  ellipse3,
  eleanorPena,
  propPadding,
  propPadding1,
  propMinWidth,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const eleanorPena1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.frameWrapper} style={frameDiv1Style}>
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
          <div className={styles.eleanorPenaParent} style={frameDiv2Style}>
            <b className={styles.eleanorPena} style={eleanorPena1Style}>
              {eleanorPena}
            </b>
            <div className={styles.ceo}>Ceo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent17;
