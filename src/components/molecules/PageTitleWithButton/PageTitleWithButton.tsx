import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PageTitle, IconButtonSmall } from '../../atoms';
import styles from './PageTitleWithButton.module.scss';

interface IPageTitleButtonProps {
    children?: React.ReactNode;
    onClick: () => {};
}

const PageTitleWithButton = ({ children, onClick }: IPageTitleButtonProps) => (
    <div className={styles.container}>
        <PageTitle>{children}</PageTitle>

        <span className={styles.button}>
            <IconButtonSmall action={onClick}><FontAwesomeIcon icon={['far', 'plus']} /></IconButtonSmall>
        </span>
    </div>
);

export default PageTitleWithButton;
