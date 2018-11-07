import {combineReducers} from 'redux';
import ClientsReducers from './clients';
import ActiveClient from './client-active';

const allReducers = combineReducers ({
	clients: ClientsReducers,
	active: ActiveClient
});

export default allReducers