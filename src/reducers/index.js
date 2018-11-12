import {combineReducers} from 'redux';
import ClientsReducers from './clients';

const allReducers = combineReducers ({
	clients: ClientsReducers,
});
export default allReducers