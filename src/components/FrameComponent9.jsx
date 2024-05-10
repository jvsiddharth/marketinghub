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
          
        </div>
        <div
          className={styles.loremIpsumDolor1}
        >{`  `}</div>
      </div>
    </div>
  );
};

export default FrameComponent9;
