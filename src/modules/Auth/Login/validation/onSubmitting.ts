export default (values: any, { setSubmitting }: any) => {
	setTimeout(() => {
		alert(JSON.stringify(values, null, 2));
		setSubmitting(false);
	}, 400);
}