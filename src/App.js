import React, { Component } from 'react';
import {createStore} from 'redux';
import './App.css';
import allReducers from './reducers/index';
import {Provider} from 'react-redux';
import ClientsList from './containers/clients-list';
import Details from './containers/details';

const store = createStore(allReducers);

class App extends Component {
  render() {
    return  <Provider store={store}>
				<div>
					<ClientsList/>
					<Details/>
				</div>
    	    </Provider>
  }
}

export default App;
