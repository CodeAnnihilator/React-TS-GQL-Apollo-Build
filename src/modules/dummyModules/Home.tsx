import React from 'react';

import { useGetMyTodosQuery } from 'generated/graphql';

import styles from './home.module.scss';

const Home = () => {

	const { loading, error, data } = useGetMyTodosQuery();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<div className={styles.header}>
			{
				data?.todos.map(({id, title}) => <div key={id}>{title}</div>)
			}
		</div>
	)
}

export default Home;