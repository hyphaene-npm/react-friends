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
import href from './helpers/href';
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
// -----------  DECORATORS ------------ //
// ------------------------------------ //
import loader from './decorators/loader';
// ------------------------------------ //
// -----------  LOADABLE ------------ //
// ------------------------------------ //
import { NullLoadable, SpinnerLoadable } from './loadable';
// ------------------------------------ //
// ------------- EXPORTS -------------- //
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
	href,
	ROOT,
	composeRoute,
	getPathID,
	getComplexPathID,
	LOGIN,
	DASHBOARD,
	redirectToLogin,
	redirectToDashboard,
	redirectTo,
	loader,
	NullLoadable,
	SpinnerLoadable,
};
