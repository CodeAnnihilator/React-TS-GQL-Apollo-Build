import React from 'react';
import cn from 'classnames';
import {Link} from 'react-router-dom';

import { ReactComponent as WarningIcon } from 'resources/icons/warning.svg';
import { ReactComponent as InformationIcon } from 'resources/icons/information.svg';
import { ReactComponent as CheckIcon } from 'resources/icons/check.svg';

import styles from './card.module.scss';

interface ICard {
	title: string;
	buttonText: string;
	status: number | string;
	hasError: boolean;
	linkTo: string;
	statusLabel: string;
	createdAt?: string;
	updatedAt?: string;
	label?: string;
}

const Card = ({
	title,
	buttonText,
	status,
	hasError,
	linkTo,
	statusLabel,
	createdAt,
	updatedAt,
	label,
}: ICard) => (
	<div className={cn(
		styles.container,
		{[styles.hasError]: hasError},
		{[styles.isApproved]: label === 'Approved' && !hasError},
	)}>
		{
			label === 'Approved' && !hasError && (
				<div className={styles.success}>
					<CheckIcon className={styles.successIcon} />
					<span>data has been approved</span>
				</div>
			)
		}
		{
			hasError && (
				<div className={styles.error}>
					<WarningIcon className={styles.warningIcon} />
					<span>has issues with provided data</span>
				</div>
			)
		}
		{
			label !== 'Approved' && !hasError && (
				<div className={styles.info}>
					<InformationIcon className={styles.informationIcon} />
					provide some data
				</div>
			)
		}
		<div className={styles.title}>{title}</div>
		<div className={styles.statusContainer}>
			<div>
				<span>{statusLabel}: </span>
				<span className={styles.status}>{status}</span>
			</div>
			{
				updatedAt && createdAt !== 'Invalid Date' && (
					<div className={styles.faded}>
						<span>createdAt: </span>
						<span className={styles.status}>{createdAt}</span>
					</div>
				)
			}
			{
				updatedAt && updatedAt !== 'Invalid Date' && (
					<div className={styles.faded}>
						<span>updatedAt: </span>
						<span className={styles.status}>{updatedAt}</span>
					</div>
				)
			}
		</div>
		<Link to={linkTo} className={styles.button}>{buttonText}</Link>
	</div>
)

export default Card;