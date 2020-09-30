import React from 'react';

import styles from './subHeader.module.scss';

const SubHeader = () => (
	<div className={styles.subHeader}>
		<span className={styles.breadcrumbs}>{`home / groups / services`}</span>
	</div>
)

export default SubHeader;