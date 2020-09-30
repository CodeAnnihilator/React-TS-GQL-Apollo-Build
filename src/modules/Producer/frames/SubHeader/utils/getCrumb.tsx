import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../subHeader.module.scss';

export const getCrumb = (part: string, partIndex: number, parts: string[]) => {
    const path = ['', ...parts.slice(0, partIndex + 1)].join('/');
    return (
        <NavLink className={styles.el} key={path} to={path}>
            {part}&nbsp;/&nbsp;
        </NavLink>
    );
};
