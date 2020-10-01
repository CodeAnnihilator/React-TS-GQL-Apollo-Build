import React from 'react';

import { useGetCompanyGroupsQuery } from 'generated/graphql';

import PageDescription from 'components/PageDescription';
import Card from 'components/Card';

import styles from './groups.module.scss';

const Groups = () => {

	const {data, loading, error} = useGetCompanyGroupsQuery();
	
	if (loading) return <div>loading...</div>;
	
	const groups = data?.getCompanyGroups;

	return (
		<div className={styles.container}>
			<PageDescription
				title='service groups'
				desc='kindly select the service group for which you would like to submit benchmarking data'
			/>
			<div className={styles.scrollContainer}>
				<div className={styles.cardsContainer}>
					{
						groups?.map(group => (
							<Card
								key={group.groupId}
								hasError={group.hasError}
								title={group.serviceGroupName}
								buttonText='start'
								status={group.servicesCount}
							/>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Groups;