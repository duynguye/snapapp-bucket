import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButtonSmall } from 'components/buttons';
import { PageTitle } from 'components/text';
import styles from './PageTitleWithButton.module.scss';

const PageTitleWithButton = ({ children, onClick }) => (
    <div className={styles.container}>
        <PageTitle>{children}</PageTitle>

        <span className={styles.button}>
            <IconButtonSmall action={onClick}><FontAwesomeIcon icon={['far', 'plus']} /></IconButtonSmall>
        </span>
    </div>
);

export default PageTitleWithButton;
