import { useMemo } from "react";
import styles from "./FrameComponent9.module.css";

const FrameComponent9 = ({
  bringYourTargetUsers,
  tigetherOnSocialMedia,
  propTextAlign,
}) => {
  const bringYourTargetContainerStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.bringYourTargetUsersTigethParent}>
        <h1
          className={styles.bringYourTargetContainer}
          style={bringYourTargetContainerStyle}
        >
          <p className={styles.bringYourTarget}>{bringYourTargetUsers}</p>
          <p className={styles.tigetherOnSocial}>{tigetherOnSocialMedia}</p>
        </h1>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
          pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem
          ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque
          tortor. Sed massa sit vehicula in ut id donec urna.
        </div>
        <div
          className={styles.loremIpsumDolor1}
        >{`Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet `}</div>
      </div>
    </div>
  );
};

export default FrameComponent9;
