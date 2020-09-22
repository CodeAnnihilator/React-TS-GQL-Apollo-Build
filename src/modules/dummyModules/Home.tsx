import React from 'react';
import { useQuery, gql } from '@apollo/client';

import styles from './home.module.scss';

const EXCHANGE_RATES = gql`
	query GetExchangeRates {
		rates(currency: "USD") {
			currency
			rate
		}
	}
`;

interface IHome {
  currency: string;
  rate: number;
}

export default function Home() {
	const { loading, error, data } = useQuery(EXCHANGE_RATES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<div className={styles.header}>
			{
				data.rates.map(({currency, rate}: IHome) => (
					<div key={currency}>
						<p>
							{currency}: {rate}
						</p>
					</div>	
				))
			}
		</div>
	)
}