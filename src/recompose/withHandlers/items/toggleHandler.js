const toggleHandler = props => tab => () => {
	if (props.activeTab !== tab) {
		props.setActiveTab(tab);
	}
};

export default toggleHandler;
