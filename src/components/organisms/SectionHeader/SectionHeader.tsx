import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Custom Imports
import { HorizontalDivider, SectionTitle, IconButtonLarge, OutlinedButton } from '../../atoms';
import { Tab } from '../../molecules';
import styles from './SectionHeader.module.scss';

interface ITab {
    active?: boolean;
    title: string;
    count: number;
    callback: () => {};
}

interface IFilter {
    callback: () => {};
    icon: string;
    prefix: string;
}

interface ISectionHeader {
    action: () => {};
    filters: [];
    title: string;
    tabs: [];
}

const SectionHeader = ({ title, tabs, action, filters }: ISectionHeader) => {
    const tabList = tabs.map((tab: ITab) => (
        <Tab key={tab.title} count={tab.count} onClick={tab.callback} active={tab.active}>{tab.title}</Tab>
    ));

    const filterList = filters.map((filter: IFilter) => (
        <OutlinedButton key={filter.icon} prefix={filter.prefix} icon={filter.icon} onClick={filter.callback} classes={styles.filter} />
    ));

    return (
        <div className={styles.container}>
            { /* Title and Tab Group */ }
            <div className={styles.titleContainer}>
                <SectionTitle classes={styles.title}>{title}</SectionTitle>
                {tabList}
            </div>

            { /* Divider and Action Button */ }
            <div className={styles.divider}>
                <HorizontalDivider />
                <IconButtonLarge action={action} classes={styles.button}>
                    <FontAwesomeIcon icon={['fal', 'plus']} />
                </IconButtonLarge>
            </div>

            { /* Filter Buttons */ }
            <div>
                {filterList}
            </div>
        </div>
    );
};

export default SectionHeader;