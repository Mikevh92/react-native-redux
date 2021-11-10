import React from 'react';
import RootStack from './navigation';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <RootStack/>
    </Provider>
  );
}