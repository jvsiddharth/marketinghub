import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <footer className={styles.dataAggregatorParent}>
      <div className={styles.dataAggregator}>
        <div className={styles.imageGalleryParent}>
          <div className={styles.imageGallery}>
            <img
              className={styles.vuesaxtwotonepolygonMaticIcon}
              loading="lazy"
              alt=""
              src="/vuesaxtwotonepolygonmatic-1.svg"
            />
            <div className={styles.dropdownMenu}>
              <div className={styles.socialMedia}>MarketingHub</div>
              All rights recieved @2024
            </div>
          </div>
        </div>
      </div>
      <div className={styles.alertBoxesParent}>
        <div className={styles.alertBoxes}></div>
        
          <FrameComponent1 />
      </div>
    </footer>
  );
};

export default FrameComponent;
