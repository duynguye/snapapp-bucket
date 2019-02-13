import React from 'react';
import styles from './TableRow.module.scss';

const TableRow = ({ children }) => (
    <div className={styles.row}>
        {children}
    </div>
);

export default TableRow;