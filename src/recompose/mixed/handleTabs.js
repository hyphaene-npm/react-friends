import withTabHandler from '../withHandlers/composed/withTabHandler';

import withActiveTab from '../withState/withActiveTab';

const handleTabs = [withActiveTab, withTabHandler];

export default handleTabs;
