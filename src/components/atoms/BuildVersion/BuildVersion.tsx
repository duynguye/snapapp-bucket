import React from 'react';
import styles from './BuildVersion.module.scss';

interface IBuildVersionProps {
    children?: React.ReactNode;
    version: string;
}

const BuildVersion = ({ version }: IBuildVersionProps) => (
    <p className={styles.build}>{ `Build: ${version}` }</p>
);

export default BuildVersion;