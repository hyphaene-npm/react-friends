const activeTabHandler = props => tab => () => {
	if (props.activeTab !== tab) {
		props.setActiveTab(tab);
	}
};

export default activeTabHandler;
