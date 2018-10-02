import { withState } from 'recompose';

const withLoaded = withState('loaded', 'setLoaded', true);

export default withLoaded;
