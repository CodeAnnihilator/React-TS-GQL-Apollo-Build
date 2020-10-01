import React from 'react';
import { Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';

import AuthInput from 'components/Inputs/AuthInput';
import AuthButton from 'components/Buttons/AuthButton';

import loginValidation from './utils/loginValidation';
import handleSubmit from './utils/handleSubmit';

import styles from './register.module.scss';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
};

const Register = () => {
    const history = useHistory();

    return (
        <div className={styles.container}>
            <Formik
                initialValues={initialValues}
                validate={loginValidation}
                onSubmit={handleSubmit(history)}
            >
                {({
                    values,
                    errors,
                    isValid,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    dirty,
                }) => (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <AuthInput
                            required
                            type="firstName"
                            name="firstName"
                            label="first name"
                            placeholder="enter first name"
                            value={values.firstName}
                            error={errors.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete="on"
                        />
                        <AuthInput
                            required
                            type="lastName"
                            name="lastName"
                            label="last name"
                            placeholder="enter last name"
                            value={values.lastName}
                            error={errors.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete="on"
                        />
                        <AuthInput
                            required
                            type="email"
                            name="email"
                            label="email"
                            placeholder="enter email"
                            value={values.email}
                            error={errors.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete="on"
                        />
                        <AuthInput
                            required
                            type="companyName"
                            name="companyName"
                            label="company name"
                            placeholder="enter company name"
                            value={values.companyName}
                            error={errors.companyName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete="on"
                        />
                        <span className={styles.devider} />
                        <AuthButton
                            value="register"
                            type="submit"
                            disabled={isSubmitting || !isValid || !dirty}
                            isLoading={isSubmitting}
                        />
                        <span className={styles.noAccount}>
                            forgot password
                            <Link
                                to="/forgot-password"
                                className={styles.boldedLink}
                            >
                                reset password
                            </Link>
                        </span>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Register;
