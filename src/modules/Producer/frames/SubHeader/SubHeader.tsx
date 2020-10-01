import React from 'react';
import { useLocation } from 'react-router-dom';

import { getCrumb } from './utils/getCrumb';

import styles from './subHeader.module.scss';

const SubHeader = () => {
    const location = useLocation();
    const services = 'services'
    let parts = location.pathname.split('/');
    let place = parts[parts.length - 1];
    if (parts.length === 3 && !isNaN(parseInt(place))) {
        parts.push(services)
        place = services
    }
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
