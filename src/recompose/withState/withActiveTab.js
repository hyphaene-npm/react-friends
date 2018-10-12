import { withState } from 'recompose';

export default defaultTab => withState('activeTab', 'setActiveTab', defaultTab);
