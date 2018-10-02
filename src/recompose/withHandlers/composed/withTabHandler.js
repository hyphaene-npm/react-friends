import { withHandlers } from 'recompose';

import styleTabHandler from '../items/styleTabHandler';
import toggleHandler from '../items/toggleHandler';

const withTabHandler = withHandlers({
	onToggle: toggleHandler,
	onStyleTab: styleTabHandler,
});

export default withTabHandler;
