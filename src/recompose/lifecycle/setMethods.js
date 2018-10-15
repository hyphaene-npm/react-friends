import { lifecycle } from 'recompose';

const setMethods = (onMount, onUnmount = null) =>
	lifecycle({
		componentDidMount() {
			this.props.setMethods(onMount);
		},
		componentWillUnmount() {
			this.props.setMethods(onUnmount);
		},
	});

export default setMethods;
