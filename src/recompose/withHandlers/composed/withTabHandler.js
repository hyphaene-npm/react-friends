import { withHandlers } from 'recompose';

import styleTabHandler from '../items/styleTabHandler';
import activeTabHandler from '../items/activeTabHandler';

const withTabHandler = withHandlers({
	onChangeTab: activeTabHandler,
	onStyleTab: styleTabHandler
});

export default withTabHandler;
