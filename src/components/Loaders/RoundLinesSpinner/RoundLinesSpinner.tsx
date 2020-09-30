import React from 'react';
import cn from 'classnames';

import styles from './roundLinesSpinner.module.scss';

const RoundLinesSpinner = () => (
	<div className={styles['loader-wrapper']}>
		<div className={styles['loader']}/>

		<div className={cn(styles['loader-section'], styles['section-left'])}/>
		<div className={cn(styles['loader-section'], styles['section-right'])}/>
	</div>
);

export default RoundLinesSpinner;