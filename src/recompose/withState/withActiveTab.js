import { withState } from 'recompose';

const withActiveTab = defaultTab => withState('activeTab', 'setActiveTab', defaultTab);

export default withActiveTab;
