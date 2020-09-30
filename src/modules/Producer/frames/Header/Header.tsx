import React from 'react';

import { useGetCurrentUserQuery } from 'generated/graphql';

import { ReactComponent as MaintenanceIcon } from 'resources/icons/maintenance.svg';
import { ReactComponent as EngineerIcon } from 'resources/icons/engineer.svg';
import { ReactComponent as DownArrowIcon } from 'resources/icons/down-arrow.svg';
import { ReactComponent as WallClockIcon } from 'resources/icons/wall-clock.svg';

import styles from './header.module.scss';

const generateLetters = ({firstName, lastName}: any) => {
	return firstName.slice(0, 1) + lastName.slice(0,1);
}

const Header = () => {

	const {data, loading} = useGetCurrentUserQuery();

	if (loading) return <div>loading...</div>

	const {site, user}: any = data?.getCurrentUser;

	return (
		<div className={styles.header}>
			<div className={styles.company}>
				<div className={styles.siteContainer}>
					<MaintenanceIcon className={styles.siteIcon}/>
					<span className={styles.siteLabel}>industry: </span>
					<span className={styles.siteName}>{user.company.industry.name}</span>
				</div>
				<div className={styles.siteContainer}>
					<EngineerIcon className={styles.siteIcon}/>
					<span className={styles.siteLabel}>site: </span>
					<span className={styles.siteName}>{site.name}</span>
					<span className={styles.siteList}>(change)</span>
				</div>
				<div className={styles.siteContainer}>
					<WallClockIcon className={styles.siteIcon}/>
					<span className={styles.siteLabel}>pending approvals: </span>
					<span className={styles.siteName}>9</span>
					<span className={styles.siteList}>(view)</span>
				</div>
			</div>
			<div className={styles.userInfoContainer}>
				<div className={styles.userContainer}>
					<div className={styles.userName}>{`${user.firstName} ${user.lastName}`}</div>
					<div>{user.company.name}</div>
				</div>
				<div className={styles.avatar}>
					{generateLetters(user)}
				</div>
				<DownArrowIcon className={styles.arrowDown}/>
			</div>
		</div>
	)
}

export default Header;