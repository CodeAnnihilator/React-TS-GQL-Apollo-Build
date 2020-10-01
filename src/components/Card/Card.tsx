import React from 'react';
import cn from 'classnames';

import { ReactComponent as WarningIcon } from 'resources/icons/warning.svg';
import { ReactComponent as InformationIcon } from 'resources/icons/information.svg';

import styles from './card.module.scss';

interface ICard {
	title: string;
	buttonText: string;
	status: number | string;
	hasError: boolean;
}

const Card = ({title, buttonText, status, hasError}: ICard) => (
	<div className={cn(styles.container, {[styles.hasError]: hasError})}>
				{
			hasError && (
				<div className={styles.error}>
					<WarningIcon className={styles.warningIcon} />
					<span>has issues with provided data</span>
				</div>
			)
		}
		{
			!hasError && (
				<div className={styles.info}>
					<InformationIcon className={styles.informationIcon} />
					provide some data
				</div>
			)
		}
		<div className={styles.title}>{title}</div>
		<div className={styles.statusContainer}>
			<div>
				<span>services: </span>
				<span className={styles.status}>{status}</span>
			</div>
		</div>
		<div className={styles.button}>{buttonText}</div>
	</div>
)

export default Card;