import 'babel-polyfill';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';

import { year, activities } from './reducers';
import AppContainer from './containers/AppContainer';

const reducer = combineReducers({ year, activities });
const store = createStore(reducer);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
