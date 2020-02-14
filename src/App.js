import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import store from './redux/store';
import MainApp from './components';

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
