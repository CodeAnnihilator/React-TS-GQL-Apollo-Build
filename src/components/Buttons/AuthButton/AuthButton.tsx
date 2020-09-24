import React from 'react';
import cn from 'classnames';

import SubmitSpinner from 'components/Loaders/SubmitSpinner';

import styles from './authButton.module.scss';

interface IAuthButton {
	value: string;
	disabled?: boolean;
	isLoading?: boolean;
	type?: 'submit' | 'reset' | 'button';
}

const AuthButton = ({
	value,
	disabled,
	isLoading,
	type
}: IAuthButton) => (
	<button
		type={type}
		className={cn(styles.button, { [styles.disabled]: disabled })}
	>
		{
			isLoading
				? <SubmitSpinner />
				: <span>{value}</span>
		}
	</button>
);

export default AuthButton;
