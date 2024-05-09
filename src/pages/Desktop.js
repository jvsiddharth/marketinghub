import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent from "../components/FrameComponent";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop1}>
      <FrameComponent12 />
      <section className={styles.desktop1Inner}>
        <div className={styles.frameParent}>
          <FrameComponent10 />
          <FrameComponent8 />
          <FrameComponent7 />
        </div>
      </section>
      <section className={styles.valueInput}>
        <div className={styles.outputCombiner}>
          <div className={styles.yearsOfExperienceContainer}>
            <p className={styles.p}>15</p>
            <p className={styles.yearsOfExperience}>Years of experience</p>
          </div>
          <div className={styles.kSocialFollowersContainer}>
            <p className={styles.k}>36K</p>
            <p className={styles.socialFollowers}>Social followers</p>
          </div>
          <div className={styles.projectCompleted}>
            <p className={styles.p1}>6428</p>
            <p className={styles.projectCompleted1}>Project completed</p>
          </div>
          <div className={styles.kSocialProfilesContainer}>
            <p className={styles.k1}>92K</p>
            <p className={styles.socialProfiles}>Social profiles</p>
          </div>
        </div>
      </section>
      <FrameComponent6 />
      <section className={styles.desktop1Child}>
        <div className={styles.frameGroup}>
          <div className={styles.logicalOperatorParent}>
            <div className={styles.logicalOperator}>
              <div className={styles.qwhatSupportAnd}>
                Q.What support and service package are available?
              </div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
                pellentesque tortor. Sed massa sit vehicula in ut id donec
                urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
                pellentesque tortor. Sed massa sit vehicula in ut id donec urna.
              </div>
            </div>
            <div className={styles.qhowCanIMakeThePaymentParent}>
              <div className={styles.qhowCanI}>
                Q.How can i make the payment?
              </div>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
                pellentesque tortor. Sed massa sit vehicula in ut id donec
                urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
                pellentesque tortor. Sed massa sit vehicula in ut id donec urna.
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.qhowLongWillIHaveAccessParent}>
              <div className={styles.qhowLongWill}>
                Q.How long will i have access to the service?
              </div>
              <div className={styles.loremIpsumDolor2}>
                Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
                pellentesque tortor. Sed massa sit vehicula in ut id donec
                urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
                pellentesque tortor. Sed massa sit vehicula in ut id donec urna.
              </div>
            </div>
            <div className={styles.qdoYouProvideAnyRefoundParent}>
              <div className={styles.qdoYouProvide}>
                Q.Do you provide any refound?
              </div>
              <div className={styles.loremIpsumDolor3}>
                Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
                pellentesque tortor. Sed massa sit vehicula in ut id donec
                urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
                pellentesque tortor. Sed massa sit vehicula in ut id donec urna.
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent4 />
      <section className={styles.frameSection}>
        <div className={styles.frameDiv}>
          <FrameComponent3 />
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default Desktop;
