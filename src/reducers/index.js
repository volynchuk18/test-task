import {combineReducers} from 'redux';
import ClientsReducers from './clients';
import ActiveClient from './client-active';
import Search from './clients-filter';

const allReducers = combineReducers ({
	clients: ClientsReducers,
	active: ActiveClient,
	search: Search
});

export default allReducers