import React from 'react';
import FrameComponent12 from '../components/FrameComponent12';
import FrameComponent10 from '../components/FrameComponent10';
import FrameComponent8 from '../components/FrameComponent8';
import FrameComponent7 from '../components/FrameComponent7';
import FrameComponent6 from '../components/FrameComponent6';
import FrameComponent4 from '../components/FrameComponent4';
import FrameComponent3 from '../components/FrameComponent3';
import FrameComponent from '../components/FrameComponent';
import styles from './Desktop.module.css';

const Desktop = () => {
  return (
    <div className={styles.desktopContainer}>
      <FrameComponent12 />
      {/* Other components */}
      <FrameComponent10 />
      <FrameComponent8 />
      <FrameComponent7 />
      {/* ... */}
      <FrameComponent6 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent />
    </div>
  );
};

export default Desktop;