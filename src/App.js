import React, { Component } from 'react';
import {createStore} from 'redux';
import './App.css';
import allReducers from './reducers/index';
import {Provider} from 'react-redux';
import WebPage from './components/WebPage';

const store = createStore(allReducers);

class App extends Component {
  render() {
    return <Provider store={store}>
    		<WebPage />
    	   </Provider>
  }
}

export default App;
