import React from 'react';
import styles from './SmallText.module.scss';

interface ISmallTextProps {
    children?: React.ReactNode;
}

const SmallText = ({ children }: ISmallTextProps) => (
    <p className={styles.text}>{ children }</p>
);

export default SmallText;