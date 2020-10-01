import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from 'components/Logo';

import styles from './navigation.module.scss';

const Navigation = ({ data }: any) => (
    <div className={styles.container}>
        <div className={styles.logo}>
            <Logo type="dash" />
        </div>
        {data.map(({ path, text, Icon }: any) => (
            <NavLink
                key={path}
                to={path}
                className={styles.el}
                activeClassName={styles.active}
            >
                <Icon className={styles.icon} />
                <span>{text}</span>
            </NavLink>
        ))}
    </div>
);

export default Navigation;
