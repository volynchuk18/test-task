export const CLIENT_SELECTED = 'CLIENT_SELECTED';
export const SEARCH = 'SEARCH';
export const CLIENTS = 'CLIENTS';
export const FETCH_CLIENTS_REQUEST = 'FETCH_CLIENTS_REQUEST';
export const FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCESS';
export const FETCH_CLIENTS_ERROR = 'FETCH_CLIENTS_ERROR';

export const selectClient = (client) => {
  return {
    type: CLIENT_SELECTED,
    payload: client
  }
};

export const search = (value) => {
  return {
  	type: SEARCH, 
  	value: value
  };
}

export const clientsList = () => {
  return {
  	type: CLIENTS
  };
}

export const fetchClients = () => {
  return {
  	type: FETCH_CLIENTS_REQUEST
  };
}

export const fetchClientsSuccess = (clients) => {
  return {
  	type: FETCH_CLIENTS_SUCCESS,
    clients
  };
}

export const fetchCLientsError = (error) => {
  return {
  	type: FETCH_CLIENTS_ERROR,
            error
  };
}