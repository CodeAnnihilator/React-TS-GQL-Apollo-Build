import React from 'react';
import { Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';

import { useLoginUserMutation } from 'generated/graphql';

import AuthInput from 'components/Inputs/AuthInput';
import AuthButton from 'components/Buttons/AuthButton';

import loginValidation from './utils/loginValidation';
import handleSubmit from './utils/handleSubmit';

import styles from './login.module.scss';

const initialValues = {
	email: '',
	password: ''
};

const Login = () => {

	const history = useHistory();
	const [loginUserMutation] = useLoginUserMutation();

	return (
		<div className={styles.container}>
			<Formik
				initialValues={initialValues}
				validate={loginValidation}
				onSubmit={handleSubmit(loginUserMutation, history)}
			>
				{({
					values,
					errors,
					isValid,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					dirty
				}) => (
					<form className={styles.form} onSubmit={handleSubmit}>
						<AuthInput
							required
							type='email'
							name='email'
							label='email'
							placeholder='enter email'
							value={values.email}
							error={errors.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<AuthInput
							required
							type='password'
							name='password'
							label='password'
							placeholder='enter password'
							value={values.password}
							error={errors.password}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<span className={styles.devider} />
						<AuthButton
							value='login'
							type='submit'
							disabled={isSubmitting || !isValid || !dirty}
							isLoading={isSubmitting}
						/>
						<span className={styles.noAccount}>
							forgot password
							<Link to='/forgot-password' className={styles.boldedLink}>
								reset password
							</Link>
						</span>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default Login;