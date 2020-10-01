export default (values: any) => {
    const errors = {} as any;

    const regExpFirstAndLastName = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;

    if (!values.email) errors.email = 'Required';
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
        errors.email = 'Invalid email address';

    if (!values.firstName) errors.firstName = 'Required';
    if (!regExpFirstAndLastName.test(values.firstName))
        errors.firstName = 'Invalid first name';

    if (!values.lastName) errors.lastName = 'Required';
    if (!regExpFirstAndLastName.test(values.lastName))
        errors.lastName = 'Invalid last name';

    if (!values.companyName) errors.companyName = 'Required';
    if (!/^[0-9A-Za-z'!-]+(?:\s[0-9A-Za-z'!-]+)*$/.test(values.companyName))
        errors.companyName = 'Invalid company name';

    return errors;
};
