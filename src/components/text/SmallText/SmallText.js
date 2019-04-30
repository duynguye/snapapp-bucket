import React from 'react';
import styles from './SmallText.module.scss';

const SmallText = ({ children }) => (
    <p className={styles.text}>{ children }</p>
);

export default SmallText;