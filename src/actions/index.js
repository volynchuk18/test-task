export const selectClient = (client) => {
	return {
		type: "CLIENT_SELECTED",
		payload: client
	}
};