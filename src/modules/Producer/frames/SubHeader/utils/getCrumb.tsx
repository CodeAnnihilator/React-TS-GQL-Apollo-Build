import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../subHeader.module.scss';

export const getCrumb = (part: string, partIndex: number, parts: string[]) => {
    const listParts = ['', ...parts.slice(0, partIndex + 1)]
    if (listParts.length === 3) listParts.push('services')
    const path = listParts.join('/');

    return (
        <NavLink className={styles.el} key={partIndex + path} to={path}>
            {part}&nbsp;/&nbsp;
        </NavLink>
    );
};
