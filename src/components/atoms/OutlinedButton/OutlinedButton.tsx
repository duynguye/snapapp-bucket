import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './OutlinedButton.module.scss';

interface IOutlinedButtonProps {
    prefix: any;
    icon: any;
    onClick: () => {};
}

const OutlinedButton = ({ prefix, icon, onClick }: IOutlinedButtonProps) => (
    <button className={styles.button} onClick={onClick}>
        <FontAwesomeIcon icon={[prefix, icon]} className={styles.icon} />
    </button>
);

export default OutlinedButton;
