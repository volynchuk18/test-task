export const selectClient = (client) => {
	return {
		type: "CLIENT_SELECTED",
		payload: client
	}
};

export const SEARCH = 'SEARCH';

export function search(value) {
  return {

  	type: SEARCH, 
  	value
  };
}