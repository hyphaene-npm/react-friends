import classnames from 'classnames';
import { withState, withHandlers } from 'recompose';
// ========================= withState
export const withStateActiveTab = defaultTab => withState('activeTab', 'setActiveTab', defaultTab);
export const withStateOpen = withState('isOpen', 'setIsOpen', false);
export const withData = withState('data', 'setData', null);
// ========================= unit handlers

export const styleTabHandler = props => tabId => classnames({ active: props.activeTab === tabId });
export const toggleHandler = props => tab => () => {
	if (props.activeTab !== tab) {
		props.setActiveTab(tab);
	}
};

// ========================= composed handlers
export const withToggle = withHandlers({
	onToggle: toggleHandler,
	onStyleTab: styleTabHandler,
});
