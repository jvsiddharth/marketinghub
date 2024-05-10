import FrameComponent5 from "./FrameComponent5";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  return (
    <section className={styles.desktop1Inner}>
      <div className={styles.giveOurUsersAGreatExperieParent}>
        <h2 className={styles.giveOurUsersContainer}>
          <p className={styles.giveOurUsers}>{`Our customers had a `}</p>
          <p className={styles.greatExperience}>great experience</p>
        </h2>
        <div className={styles.frameParent}>
          <FrameComponent5
            ellipse3="/ellipse-3@2x.png"
            eleanorPena="Eleanor Pena"
          />
          <FrameComponent5
            ellipse3="/ellipse-3-1@2x.png"
            eleanorPena="Cody Fisher"
            propPadding="var(--padding-6xl-2) var(--padding-9xl-1) var(--padding-6xl-2) var(--padding-9xl-2)"
            propMinWidth="90px"
          />
          <FrameComponent5
            ellipse3="/ellipse-3-2@2x.png"
            eleanorPena="Kristin Watson"
            propPadding="var(--padding-6xl-2) var(--padding-9xl)"
            propMinWidth="110px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
