import createHistory from 'history/createHashHistory';
import { composeRoute } from './composeRoute';

export const LOGIN = '/login';
export const DASHBOARD = '/dashboard';
const history = createHistory();

const _redirectTo = path => history.push(path);

const _redirectBuilder = path => () => _redirectTo(path);

export const redirectToLogin = _redirectBuilder(LOGIN);
export const redirectToDashboard = _redirectBuilder(DASHBOARD);

export const redirectTo = (...args) => _redirectTo(composeRoute(...args));
