// ------------------------------------ //
// -----------  RECOMPOSE ------------- //
// ------------------------------------ //
import withData from './recompose/withState/withData';
import withActiveTab from './recompose/withState/withActiveTab';
import withLoaded from './recompose/withState/withLoaded';
import withOpen from './recompose/withState/withOpen';
// ------------------------------------ //
import styleTabHandler from './recompose/withHandlers/items/styleTabHandler';
import toggleHandler from './recompose/withHandlers/items/toggleHandler';
// ------------------------------------ //
import withTabHandler from './recompose/withHandlers/composed/withTabHandler';
// ------------------------------------ //

// ------------------------------------ //
// -----------  HELPERS ------------- //
// ------------------------------------ //
import blank from './helpers/blank';
// ------------------------------------ //
import { ROOT, composeRoute, getPathID, getComplexPathID } from './helpers/composeRoute';
import {
	LOGIN,
	DASHBOARD,
	redirectToLogin,
	redirectToDashboard,
	redirectTo,
} from './helpers/redirectTo';
// ------------------------------------ //
// -----------  EXPORTS ------------- //
// ------------------------------------ //
export {
	withActiveTab,
	withData,
	withLoaded,
	withOpen,
	toggleHandler,
	styleTabHandler,
	withTabHandler,
	blank,
	ROOT,
	composeRoute,
	getPathID,
	getComplexPathID,
	LOGIN,
	DASHBOARD,
	redirectToLogin,
	redirectToDashboard,
	redirectTo,
};
