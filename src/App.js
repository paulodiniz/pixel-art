import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './App.css';
import GridContainer from './containers/GridContainer';


function App() {
  return (
    <div className="App">
      <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <GridContainer />
      </Provider>
    </div>
  );
}

export default App;
