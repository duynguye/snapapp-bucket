import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import styles from './OutlinedButton.module.scss';

interface IOutlinedButtonProps {
    prefix: any;
    icon: any;
    onClick: () => {};
    classes: string | [string];
}

const OutlinedButton = ({ prefix, icon, onClick, classes }: IOutlinedButtonProps) => (
    <button className={classNames(styles.button, classes)} onClick={onClick}>
        <FontAwesomeIcon icon={[prefix, icon]} className={styles.icon} />
    </button>
);

export default OutlinedButton;
