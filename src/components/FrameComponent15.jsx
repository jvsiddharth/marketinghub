import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent15.module.css";

const FrameComponent15 = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.vuesaxtwotonepolygonMaticParent}>
        <img
          className={styles.vuesaxtwotonepolygonMaticIcon}
          loading="lazy"
          alt=""
          src="/vuesaxtwotonepolygonmatic-1.svg"
        />
        <div className={styles.socialMediaWrapper}>
          <div className={styles.socialMedia}>Social media</div>
        </div>
      </div>
      <FrameComponent2 />
    </section>
  );
};

export default FrameComponent15;
