export default (values: any) => {

	const errors = {} as any;

	if (!values.email) errors.email = 'Required';
	if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = 'Invalid email address';

	if (!values.password) errors.password = 'Required';
	
	if (values.password.length < 5) {
		errors.password = 'Should be at least 5 characters long';
	} else if (/^\d+$/.test(values.password)) {
		errors.password = 'Should contain characters';
	}
	return errors;
}
