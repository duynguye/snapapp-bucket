import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

// Custom Imports
import { SectionTitle, IconButtonLarge } from '../../atoms';
import { OutlinedButton } from '../../buttons';
import { HorizontalDivider } from '../../layout';
import { Tab } from '../../molecules';
import styles from './SectionHeader.module.scss';

interface ITab {
    active?: boolean;
    title: string;
    count: number;
    callback: () => any;
}

interface IFilter {
    callback: () => any;
    icon: string;
    prefix: string;
    tooltip?: string;
}

interface ISectionHeader {
    action?: () => any;
    className?: string | string[] | undefined;
    filters?: any;
    title: string;
    tabs?: any;
}

const SectionHeader = ({ title, tabs = [], className = '', action = undefined, filters = [] }: ISectionHeader) => {
    const tabList = tabs.map((tab: ITab) => (
        <Tab key={tab.title} count={tab.count} onClick={tab.callback} active={tab.active}>{tab.title}</Tab>
    ));

    const filterList = filters.map((filter: IFilter) => (
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