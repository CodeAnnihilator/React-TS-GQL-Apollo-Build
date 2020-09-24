import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from 'components/Logo';

import styles from './authLayout.module.scss';

interface IAuthLayout {
	children?: React.ReactNode;
}

const AuthLayout: React.FC = ({ children }: IAuthLayout) => (
	<div className={styles.container}>
		<div className={styles.card}>
			<div className={styles.topContainer}>
				<div className={styles.logoWrapper}>
					<Logo />
				</div>
			</div>
			<div className={styles.bottomContainer}>
				<div className={styles.buttonsContainer}>
					<NavLink
						to='/login'
						className={styles.button}
						activeClassName={styles.button_active}
					>
						login
					</NavLink>

					<NavLink
						to='/register'
						className={styles.button}
						activeClassName={styles.button_active}
					>
						register
					</NavLink>
				</div>
				<div className={styles.children}>
					{children}
				</div>
			</div>
		</div>
	</div>
);

export default AuthLayout;
