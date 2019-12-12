# Purpose

[![Greenkeeper badge](https://badges.greenkeeper.io/hyphaene-npm/react-friends.svg)](https://greenkeeper.io/)

react-friends is a set of helpers designed to facilitate react development by preparing usefull helpers designed to solve commons problems
For example, some helpers enhance components to automatically be ready to handle tabs ( activeTab value and related setters )
It is therefore opiniated since it heavily relies on recompose for example.

# Installation

```
npm install react-friends
```
or

```
yarn add react-friends
```

# Decorators

## loader

You often use async class methods on your components, and would like to display a spinner or whatever during the call ?

This decorator calls
```javascript
this.props.setLoaded(false)
```
at start and
```javascript
this.props.setLoaded(true)
```
at end

Assuming your component consumes the value in the component, you can operate any conditional rendering depending on wheter the async call is running or not.

It can be used with the LoadedHandler ( see below for complete example )

# Recompose helpers

## 1/ withState

### withActiveTab

```javascript
import { withActiveTab } from 'react-friends';

const defaultActiveTab ='whatever value is set on your default tab'

const TabComponent = ({ activeTab = defaultActiveTab, setActiveTab }) => {
	...
}

const activeTabEnhancer =withActiveTab(defaultTabValue)

const EnhancedTabComponent = compose(activeTabEnhancer)(TabComponent)
```

When wrapped, TabComponent have access to activeTab prop, which can be manipulated through setActiveTab prop.

### withData


```javascript
import { withData } from 'react-friends';

const DataComponent = ({ data = null, setData }) => {
	...
}

const EnhancedDataComponent = compose(withData)(DataComponent)
```

When wrapped, DataComponent have access to data prop, which can be manipulated through setData prop.

### withLoaded


```javascript
import { withLoaded } from 'react-friends';

const DataComponent = ({ loaded, setLoaded }) => {
	...
}

const EnhancedDataComponent = compose(withLoaded)(DataComponent)
```

When wrapped, DataComponent have access to loaded prop, which can be manipulated through setLoaded prop.


Note than we can compose withLoaded and withData, see example below

### withOpen

```javascript
import { withOpen } from 'react-friends';

const PopupComponent = ({ isOpen = false, setIsOpen }) => {
	...
}

const EnhancedPopupComponent = compose(withOpen)(PopupComponent)
```

When wrapped, PopupComponent have access to isOpen prop, which can be manipulated through setIsOpen prop.


## withHandlers

Thanks to recompose, we can define helpers prop functions to let them be consumed by every component which tacles the same problem

### handleTabs

```javascript
import { handleTabs } from 'react-friends';

const TabComponent = ({ activeTab = false, onChangeTab, onStyleTab }) => {
 // ...
	return (
		<Tabs>
			<TabHeader value={tabValue} onClick={onChangeTab(tabValue)} classNames={onStyleTab(tabValue)} />
			...
		<Tabs>

	)
	...
}

const EnhancedTabComponent = compose(handleTabs(defaultTab))(PopupComponent)
```

handleTab expose below props  :
- activeTab ( the value )
- onChangeTab ( which changes only if asked tab is not the current tab )
- onStyleTab, which can be used to display proper class on each tab depending on its 'currentTab' status ( is currentTab or not ) to allow easy styling
Those two functions are aware of activeTab value thanks to composition

It is a composition of withHandlers and withState, please check on the source code if you want to use only parts of this composition. ( partial handlers are also available on import )



## lifecycle

When using recompose, it is nearly impossible to use a ref for a wrapped component, since ref is not passed down.

This handler expose to the parent component any methods you wanna pilot from it.
Very usefull for a recompose-wrapped popup component for example.


# Loadable

This part is a minimalistic layer on loadable, which allow a bit more concise declaration.

Please note that the callback needs to handle the () => import('some/path) declaration part, since it does not handle dymamic import string value, it was not ( AFAIK ) possible to include it into the bundle to make it even more concise.


(PRs are welcome to solve this, but React.lazy which is available in latest versions of React should replace this at short term )

## NullLoadable

```javascript

import { NullLoadable } from 'react-friends';



```

## SpinnerLoadable




# roadmap

- [ ] remove Loading component dependency
- [ ] provide example for lifecyle
