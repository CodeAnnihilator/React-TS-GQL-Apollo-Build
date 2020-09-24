import React from 'react';

import styles from './authInput.module.scss';

interface IAuthInput {
	name: string;
	label?: string;
	value: string | number;
	placeholder: string;
	onChange: any;
	error?: any;
	required?: boolean;
	type: string;
	onBlur: any;
}

const Input = ({
	name,
	label,
	type,
	value,
	placeholder,
	onChange, 
	error,
	required,
}: IAuthInput) => {

	const requiredLabel = required ? '*' : '';

	return (
		<div className={styles.inputContainer}>
			<div className={styles.labelWrapper}>
				<label className={styles.label} htmlFor={name}>{`${label} ${requiredLabel}`}</label>
				{error && <span className={styles.error}>{error}</span>}
			</div>
			<input
				id={name}
				type={type}
				required={true}
				onChange={onChange}
				className={styles.input}
				placeholder={placeholder}
				value={value}
			/>
		</div>
	);
};

export default Input;
