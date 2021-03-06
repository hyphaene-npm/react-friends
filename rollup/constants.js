import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

export const plugins = [
	peerDepsExternal(),
	postcss({ extract: true, plugins: [autoprefixer] }),
	babel({ exclude: 'node_modules/**' }),
	localResolve(),
	resolve(),
	commonjs(),
	filesize(),
];

export const classnames = 'classnames';
export const recompose = 'recompose';
export const history = 'history';
export const reactLoadable = 'react-loadable';
export const WHLoading = '@whatsonweb/loading';
export const createHistory = 'history/createHashHistory';
export const withLifeCycle = '@hocs/with-lifecycle';

export const globals = {
	history,
	[reactLoadable]: 'Loadable',
	recompose,
	classnames,
	[WHLoading]: 'Loading',
	[createHistory]: createHistory,
	[withLifeCycle]: withLifeCycle,
};

export const external = [
	history,
	reactLoadable,
	recompose,
	classnames,
	WHLoading,
	createHistory,
	withLifeCycle,
];
export const mainInput = 'src/index.js';
