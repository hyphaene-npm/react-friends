import Loadable from 'react-loadable';
import Loading from '@whatsonweb/loading';

export const NullLoadable = callback =>
	Loadable({
		loader: () => callback(),
		loading: () => null,
	});

export const SpinnerLoadable = path =>
	Loadable({
		loader: () => import(path),
		loading: Loading,
	});
