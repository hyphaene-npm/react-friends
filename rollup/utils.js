import { globals } from './constants';

export const setConfig = (input, output, external, plugins) => ({
	input,
	output,
	external,
	plugins,
});

export const formatBuilder = format => fileName => ({
	file: fileName,
	format,
	name: 'Whatson',
	globals,
});
