const ID = ':id';
export const ROOT = '/';

export const composeRoute = (...args) => args.join(ROOT);
export const getPathID = route => composeRoute(route, ID);
export const getComplexPathID = (...args) => composeRoute(...args, ID);
