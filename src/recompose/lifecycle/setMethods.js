import withLifecycle from '@hocs/with-lifecycle';

const setMethods = getMethods =>
	withLifecycle({
		onDidMount(props) {
			props.setMethods(getMethods(props));
		},
		onWillUnmount(props) {
			props.setMethods(null);
		},
	});
export default setMethods;
