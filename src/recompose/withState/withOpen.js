import { withState } from 'recompose';

const withOpen = withState('isOpen', 'setIsOpen', false);

export default withOpen;
