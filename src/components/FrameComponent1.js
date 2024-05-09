import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ propFlex, propMinWidth, propAlignSelf }) => {
  const formValidationStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const searchBarStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={styles.formValidation} style={formValidationStyle}>
      <div className={styles.contactInfo}>Contact info</div>
      <div className={styles.searchBar} style={searchBarStyle}>
        <div className={styles.toggleSwitches}>
          <img
            className={styles.vuesaxlinearcallIcon}
            loading="lazy"
            alt=""
            src="/vuesaxlinearcall.svg"
          />
          <div className={styles.confirmationBoxes}>+88 (246) 658-27-10</div>
        </div>
        <div className={styles.toggleSwitches1}>
          <img
            className={styles.vuesaxlinearsmsIcon}
            loading="lazy"
            alt=""
            src="/vuesaxlinearsms.svg"
          />
          <div className={styles.soroushnorozyuigmailcom}>
            Soroushnorozyui@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
