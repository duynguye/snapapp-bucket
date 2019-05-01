import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TweenMax } from 'gsap';

import styles from './Notification.module.scss';

export default ({ children }) => {
  const wrapper = useRef(null);
  const container = useRef(null);
  const [initialHeight, setInitialHeight] = useState(0);

  useEffect(() => {
    if (wrapper.current) {
      setInitialHeight(wrapper.current.offsetHeight);
    }
  }, [wrapper]);

  useEffect(() => {
    if (initialHeight > 0) {
      TweenMax.set(wrapper.current, { height: 0, position: 'initial' });

      setTimeout(() => {
        TweenMax.to(wrapper.current, 0.35, { height: initialHeight });
        TweenMax.to(container.current, 0.35, { opacity: 1 });
      }, 1000);
    }
  }, [initialHeight]);

  return (
    <div className={styles.wrapper} ref={wrapper}>
      <div className={styles.container} ref={container}>
        <FontAwesomeIcon icon={['fas', 'times-circle']} className={styles.icon} />
        <span className={styles.text}>{ children }</span>
      </div>
    </div>
  );
};