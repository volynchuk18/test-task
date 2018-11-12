import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectClient, fetchClientsSuccess} from '../actions/index';
import Search from './clients-filter';
import {List, Image} from 'semantic-ui-react'

class ClientsList extends Component {
	componentWillMount() {	
		const xhr = new XMLHttpRequest();
		xhr.open('GET', 'clients.json', true);

		xhr.onreadystatechange = () => { 
		  if (xhr.readyState !== 4) return;
		  if (xhr.status === 200) {
		  	this.props.fetchClientsSuccess(JSON.parse(xhr.responseText))
		  } 
		}
		xhr.send();
	}

	renderList() {
		return this.props.filter.map( (item, id) => {
			return (<List.Item key={id} onClick={() => this.props.selectClient(item)}>				
						<Image avatar src={item.general.avatar} />
							<List.Content>
						     <List.Header as='a'>{item.general.firstName}</List.Header>
							      <List.Description>
							        {item.job.title}
							      </List.Description>
						    </List.Content>						    
					</List.Item>										
			);
		});
	}
	
	render() {

		return (
			<div className='sidebar'>
				<Search />
				<List selection verticalAlign='middle'>		
					{this.renderList()}			
				</List>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		filter: state.clients.filteredClients
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({selectClient, fetchClientsSuccess}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ClientsList);