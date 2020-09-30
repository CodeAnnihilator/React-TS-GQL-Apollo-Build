import React from 'react';

import styles from './pageDescription.module.scss';

interface IPageDescription {
	title: string;
	desc: string;
}

const PageDescription = ({title, desc}: IPageDescription) => (
	<div className={styles.container}>
		<div className={styles.title}>{title}</div>
		<div className={styles.desc}>{desc}</div>
	</div>
)

export default PageDescription;