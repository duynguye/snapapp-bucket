import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import styles from './TableRow.module.scss';

const TableRow = ({ children }) => {
  const [hovering, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);
  const onClick = () => setActive(!active);

  return (
    <div
      className={styles.row}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={classNames(styles.checkbox, hovering || active ? styles.hovering : '')} onClick={onClick}>
        <FontAwesomeIcon icon={[active ? 'fas' : 'fal', 'square']} />
      </div>

      {children}
    </div>
  )
}

export default TableRow;