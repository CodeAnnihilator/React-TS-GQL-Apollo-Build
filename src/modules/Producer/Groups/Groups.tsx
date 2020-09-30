import React from 'react';

import PageDescription from 'components/PageDescription';

import styles from './groups.module.scss';

const Groups = () => {

	

	return (
		<div className={styles.container}>
			<PageDescription
				title='service groups'
				desc='kindly select the service group for which you would like to submit benchmarking data'
			/>
		</div>
	)
}

export default Groups;