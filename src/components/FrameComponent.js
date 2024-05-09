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
              <div className={styles.socialMedia}>Social media</div>
            </div>
          </div>
          <FrameComponent2 />
        </div>
      </div>
      <div className={styles.alertBoxesParent}>
        <div className={styles.alertBoxes}>
          <div className={styles.services}>Services</div>
          <div className={styles.accordionPanels}>
            <div className={styles.incidentResponder}>Incident responder</div>
            <div className={styles.secureManagedIt}>Secure managed it</div>
            <div className={styles.checkWebsiteUrl}>Check website url</div>
            <div className={styles.lockerSecurity}>Locker security</div>
          </div>
        </div>
        <div className={styles.listView}>
          <div className={styles.breadcrumbTrail}>
            <div className={styles.treeView}>
              <div className={styles.aboutUs}>About us</div>
              <div className={styles.calendarPicker}>
                <div className={styles.payment}>Payment</div>
                <div className={styles.rangeSliders}>
                  <div className={styles.makeSavingMore}>Make saving more</div>
                  <div className={styles.taxCaculator}>Tax caculator</div>
                  <div className={styles.talkToUs}>Talk to us</div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent1 />
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
