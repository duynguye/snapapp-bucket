import React, { Component, ReactNode } from 'react';

import { HorizontalDivider } from '../';
import { IconButton } from '../../buttons';
import { DashboardSectionTitle } from '../../text';
import styles from './CollapsableContainer.module.scss';

interface ICollapse {
  children?: ReactNode;
  title: string;
}

class CollapsableContainer extends Component<ICollapse> {
  render() {
    const { children, title } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <DashboardSectionTitle className={styles.title}>
            <IconButton icon={['fal', 'angle-down']} className={styles.icon} size={10} />
            { title }
          </DashboardSectionTitle>
        </div>

        <HorizontalDivider className={styles.divider} />

        <div>{ children }</div>
      </div>
    );
  }
}

export default CollapsableContainer;