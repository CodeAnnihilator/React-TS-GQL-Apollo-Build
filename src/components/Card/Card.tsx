import React from 'react';

import styles from 'card.module.scss';

interface ICard {
	title: string;
	buttonText: string;
	status: string;
}

const Card = ({title, buttonText, status}: ICard) => (
	<div className={styles.container}>
		<div className={styles.title}>{title}</div>
		<div className={styles.button}>{buttonText}</div>
		<div className={styles.status}>{status}</div>
	</div>
)

export default Card;