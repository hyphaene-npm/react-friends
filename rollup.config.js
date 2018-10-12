import pkg from './package.json';
import { external, mainInput, plugins } from './rollup/constants';
import { formatBuilder, setConfig } from './rollup/utils';

const jsExt = formatBuilder('umd');
const mainOutput = [jsExt(pkg.browser)];
const mainConfig = setConfig(mainInput, mainOutput, external, plugins);
const config = [mainConfig];

export default config;
