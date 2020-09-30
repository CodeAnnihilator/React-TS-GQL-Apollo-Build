import React from 'react';
import cn from 'classnames';

import styles from './logo.module.scss';

const Logo = ({ type='auth' }: any) => (
	<div className={styles.container}>
		<div className={cn(styles.lanesContainer, styles[`lanesContainer_${type}`])}>
			<div className={styles.lane} />
			<div className={styles.lane} />
			<div className={cn(styles.lane, styles.lane_active)} />
			<div className={styles.lane} />
		</div>
		<div className={cn(styles.headerText, styles[`headerText_${type}`])}>WeBench</div>
		<div className={cn(styles.underlineText, styles[`underlineText_${type}`])}>enable competitiveness</div>
	</div>
);

export default Logo;
