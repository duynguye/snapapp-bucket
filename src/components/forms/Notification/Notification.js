import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TweenMax } from 'gsap';

import styles from './Notification.module.scss';

export default ({ children, display = false }) => {
  const wrapper = useRef(null);
  const container = useRef(null);
  const [initialHeight, setInitialHeight] = useState(0);

  useEffect(() => {
    if (wrapper.current) {
      const containerStyles = getComputedStyle(container.current);
      TweenMax.set(wrapper.current, { display: 'block' });

      setInitialHeight(wrapper.current.offsetHeight + parseInt(containerStyles.marginBottom));
    }
  }, [wrapper]);

  useEffect(() => {
    if (initialHeight > 0) {
      TweenMax.set(wrapper.current, { height: 0, position: 'initial' });
    }
  }, [initialHeight]);

  useEffect(() => {
    if (display) {
      TweenMax.to(wrapper.current, 0.35, { height: initialHeight });
      TweenMax.to(container.current, 0.5, { delay: 0.15, opacity: 1 });
    }
  }, [display, initialHeight]);

  return (
    <div className={styles.wrapper} ref={wrapper}>
      <div className={styles.container} ref={container}>
        <FontAwesomeIcon icon={['fas', 'times-circle']} className={styles.icon} />
        <span className={styles.text}>{ children }</span>
      </div>
    </div>
  );
};