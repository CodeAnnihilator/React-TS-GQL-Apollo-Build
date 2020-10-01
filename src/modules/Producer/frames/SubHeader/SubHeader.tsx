import React from 'react';
import { useLocation } from 'react-router-dom';

import { getCrumb } from './utils/getCrumb';

import styles from './subHeader.module.scss';

const SubHeader = () => {
    const location = useLocation();
    let parts = location.pathname.split('/');
    const place = parts[parts.length - 1];
    parts = parts.slice(1, parts.length - 1);
    return (
        <div className={styles.subHeader}>
            <div className={styles.main}>
                {parts.map(getCrumb)}
                {place}
            </div>
        </div>
    );
};

export default SubHeader;
