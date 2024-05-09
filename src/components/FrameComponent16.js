import FrameComponent17 from "./FrameComponent17";
import styles from "./FrameComponent16.module.css";

const FrameComponent16 = () => {
  return (
    <section className={styles.iphone13Mini1Inner}>
      <div className={styles.giveOurUsersAGreatExperieParent}>
        <div className={styles.giveOurUsersContainer}>
          <p className={styles.giveOurUsers}>{`Give our users a `}</p>
          <p className={styles.greatExperience}>great experience</p>
        </div>
        <div className={styles.frameParent}>
          <FrameComponent17
            ellipse3="/ellipse-31@2x.png"
            eleanorPena="Eleanor Pena"
          />
          <FrameComponent17
            ellipse3="/ellipse-3-11@2x.png"
            eleanorPena="Cody Fisher"
            propPadding="var(--padding-lgi-7) var(--padding-4xl) var(--padding-lgi-8)"
            propPadding1="0px 0px var(--padding-12xs-1)"
            propMinWidth="74px"
          />
          <FrameComponent17
            ellipse3="/ellipse-3-21@2x.png"
            eleanorPena="Kristin Watson"
            propPadding="var(--padding-lgi-7) var(--padding-4xl) var(--padding-lgi-8)"
            propPadding1="unset"
            propMinWidth="90px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent16;
