import React from 'react';
import ClientsList from '../containers/clients-list';
import Details from '../containers/details';
import Search from '../containers/clients-filter';

const WebPage = () => (
	<div>
		<ClientsList />
		<Details />

	</div>
);

export default WebPage;