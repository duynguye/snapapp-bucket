import React, { Component } from 'react';

import { HorizontalDivider } from 'components/layout';
import { IconButton } from 'components/buttons';
import { DashboardSectionTitle } from 'components/text';
import styles from './CollapsableContainer.module.scss';

class CollapsableContainer extends Component {
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