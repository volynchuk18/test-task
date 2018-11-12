import {FETCH_CLIENTS_SUCCESS, SEARCH, CLIENT_SELECTED} from '../actions';

const initialState = {clients: [], filteredClients: []}

function filterCLients(clients, parameters){
  				return clients.filter((obj => {
			    	return	Object.values(obj).some(obj2 => {
				    		return Object.values(obj2).some( v => parameters.every( p => v.toString().toLowerCase().includes(p.toLowerCase())))
				    	})
					}))
	  	}

export default function (state=initialState, action) {

	switch(action.type) {

    	case FETCH_CLIENTS_SUCCESS:
    		return {
		    	...state,
		        clients: action.clients,
		        filteredClients: action.clients
	   		}
	   	case SEARCH:
	   		const filterParameters = action.value.trim().split(' ');
	   		const filteredClients = filterCLients(state.clients, filterParameters);
     	 	return {
     	 		...state, 
     	 		filteredClients
     	 	};

     	case CLIENT_SELECTED:
			return {
				...state, 
				active: action.payload
			};
		
	   	default: 
	   		return state;
    }
}