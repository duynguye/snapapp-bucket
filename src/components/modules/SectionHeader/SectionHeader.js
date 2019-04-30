import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

// Custom Imports
import { IconButtonLarge, OutlinedButton } from 'components/buttons';
import { SectionTitle } from 'components/text';
import { HorizontalDivider } from 'components/layout';
import { Tab } from 'components/molecules';
import styles from './SectionHeader.module.scss';

const SectionHeader = ({ title, tabs = [], className = '', action = undefined, filters = [] }) => {
    const tabList = tabs.map(tab => (
        <Tab key={tab.title} count={tab.count} onClick={tab.callback} active={tab.active}>{tab.title}</Tab>
    ));

    const filterList = filters.map(filter => (
        <OutlinedButton key={filter.icon} prefix={filter.prefix} icon={filter.icon} onClick={filter.callback} classes={styles.filter} tooltip={filter.tooltip} />
    ));

    return (
        <div className={classnames(styles.container, className)}>
            <div className={styles.titleContainer}>
                <SectionTitle classes={styles.title}>{title}</SectionTitle>
                {tabs.length > 0 && tabList}
            </div>

            <div className={styles.divider}>
                <HorizontalDivider />
                { action && 
                    <IconButtonLarge action={action} classes={styles.button}>
                        <FontAwesomeIcon icon={['fal', 'plus']} />
                    </IconButtonLarge>
                }
            </div>

            <div style={{ display: 'flex' }}>
                {filters.length > 0 && filterList}
            </div>
        </div>
    );
};

export default SectionHeader;