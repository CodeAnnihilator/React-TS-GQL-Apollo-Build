import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import dayjs from 'dayjs';

import { useGetCompanyGroupServicesQuery } from 'generated/graphql';

import PageDescription from 'components/PageDescription';
import Card from 'components/Card';

import insertParams from 'utils/insertParams';

import styles from './group.module.scss';

const Group = () => {

	const {id} = useParams();
	const groupId = parseInt(id, 10);

	const {data, loading, error} = useGetCompanyGroupServicesQuery(insertParams({groupId}))

	const location = useLocation();

	if (loading) return <div>loading...</div>;
	
	const services = data?.getCompanyGroupServices;

	return (
		<div className={styles.container}>
			<PageDescription
				title='service groups'
				desc='kindly select the service group for which you would like to submit benchmarking data'
			/>
			<div className={styles.scrollContainer}>
				<div className={styles.cardsContainer}>
					{
						services?.map(service => (
							<Card
								key={service.serviceId}
								hasError={false}
								title={service.serviceName}
								buttonText='start'
								statusLabel='status'
								status={service.status}
								label={service.label}
								createdAt={dayjs(service.createdAt).format('DD/MM/YYYY')}
								updatedAt={dayjs(service.updatedAt).format('DD/MM/YYYY')}
								linkTo={`${location.pathname}/${service.serviceId}`}
							/>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Group;