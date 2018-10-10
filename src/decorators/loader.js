const loader = (target, name, descriptor) => {
	var oldValue = descriptor.value;

	descriptor.value = async function (...args) {
		this.props.setLoaded(false);
		const value = await oldValue.apply(this, args);
		this.props.setLoaded(true);
		return value;
	};
	return descriptor;
};

export default loader