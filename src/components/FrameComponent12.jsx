import React, { useEffect, useRef } from 'react';
import styles from './FrameComponent12.module.css'; // Update with your CSS module path
import { Link } from "react-router-dom";

const FrameComponent12 = () => {
  // Use a ref to trigger the animation once the component mounts
  const svgRef = useRef(null);

  useEffect(() => {
    // Function to apply animation class to all SVGs
    const applyAnimationToSVGs = () => {
      if (svgRef.current) {
        const svgElements = svgRef.current.querySelectorAll('img'); // Select all img elements
        svgElements.forEach(svg => svg.classList.add(styles.popupSvgIcon)); // Add animation class to each SVG
      }
    };

    // Trigger the animation when the component mounts
    applyAnimationToSVGs();
  }, []);


  return (
    <section className={styles.functionTree}>
      <div className={styles.functionTreeChild} />
      <header className={styles.inputCluster}>
        <div className={styles.memoryLane}>
          <div className={styles.vuesaxtwotonepolygonMaticParent}>
            <img
              className={styles.vuesaxtwotonepolygonMaticIcon}
              alt=""
              src="/vuesaxtwotonepolygonmatic.svg"
            />
            <div className={styles.socialMedia}>MarketingHub</div>
          </div>
          <nav className={styles.backgroundshadow}>
            <div className={styles.signInParent}>
        <button 
        className={styles.getStartedFreeWrapper}
        onClick={() => {
          const middleOfPage = document.documentElement.scrollHeight / 5;
          window.scrollTo({ top: middleOfPage, behavior: 'smooth' });
        }}>
          Our Initiative
        </button>
        </div>
          </nav>
        </div>
        <Link to="/contact">
          <button className={styles.contact}>Contact</button>
        </Link>
      </header>
      <div className={styles.frameParent}>
        <div className={styles.vectorParent} ref={svgRef}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.facebookParent}>
              <img
                className={styles.facebookIcon}
                alt=""
                src="/-facebook.svg"
              />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.theBestUseOfSocialMediaMParent}>
                <h1 className={styles.theBestUseContainer}>
                  <p className={styles.theBestUse}>The best use of social</p>
                  <p className={styles.mediaMarketing}>media marketing</p>
                </h1>
              </div>
              <img
                className={styles.shapesIcon}
                loading="lazy"
                alt=""
                src="/shapes.svg"
              />
            </div>
            <div className={styles.loremIpsumDolorSitAmetConParent}>
              <div className={styles.loremIpsumDolor}>
                Use the best of the marketing and web services of our generation............
                We will look after your Marketing and Leads, so you can continue to work your best.
              </div>
              <img
                className={styles.discordIcon}
                loading="lazy"
                alt=""
                src="/-discord.svg"
              />
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.youtubeParent}>
              <img className={styles.youtubeIcon} alt="" src="/-youtube.svg" />
              <div className={styles.snapchatWrapper}>
                <img
                  className={styles.snapchatIcon}
                  loading="lazy"
                  alt=""
                  src="/-snapchat.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.telegramParent}>
            <img className={styles.telegramIcon} alt="" src="/-telegram.svg" />
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent1}>
                <div className={styles.frameWrapper3}>
                  <div className={styles.frameParent2}>
                    <button className={styles.start14DaysFreeTrialWrapper}>
                      <div className={styles.start14Days}>
                        Contact Us
                      </div>
                    </button>
                    <button className={styles.vuesaxboldplayCircleParent}>
                      <img
                        className={styles.vuesaxboldplayCircleIcon}
                        alt=""
                        src="/vuesaxboldplaycircle.svg"
                      />
                      <div className={styles.watchADemoWrapper}>
                        <div className={styles.watchADemo}>Watch a demo</div>
                      </div>
                    </button>
                  </div>
                </div>
                <img
                  className={styles.twitterIcon}
                  loading="lazy"
                  alt=""
                  src="/-twitter.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
