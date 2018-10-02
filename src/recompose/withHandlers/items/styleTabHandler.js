import classnames from 'classnames';

const styleTabHandler = props => tabId => classnames({ active: props.activeTab === tabId });

export default styleTabHandler;
