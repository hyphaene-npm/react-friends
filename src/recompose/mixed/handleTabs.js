import withTabHandler from '../withHandlers/composed/withTabHandler';

import withActiveTab from '../withState/withActiveTab';

const handleTabs = defaultTab => [withActiveTab(defaultTab), withTabHandler];

export default handleTabs;
