import React from 'react';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import GridContainer from './containers/GridContainer';
import ColorPicker from './containers/ColorPicker';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <ColorPicker />
        <GridContainer />
      </Provider>
    </div>
  );
}

export default App;
