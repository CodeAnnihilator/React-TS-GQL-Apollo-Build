import React from 'react';
import cn from 'classnames';

import styles from './logo.module.scss';

const Logo = () => (
	<div className={styles.container}>
		<div className={styles.lanesContainer}>
			<div className={styles.lane} />
			<div className={styles.lane} />
			<div className={cn(styles.lane, styles.lane_active)} />
			<div className={styles.lane} />
		</div>
		<div className={styles.headerText}>WeBench</div>
		<div className={styles.underlineText}>enable competitiveness</div>
	</div>
);

export default Logo;
