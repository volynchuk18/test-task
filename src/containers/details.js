import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
	render () {
		if (!this.props.client) {
			return (<p />)
		}
		return (
			<div className='details'>
			 <table>
			 	<tbody>				 	
			 		<td className='leftcol'>
			 			<img src={this.props.client.general.avatar} alt='cant load img'/><br />
			 		</td>
			 		<td className='detailsText'>
			 			<h2>{this.props.client.general.firstName + ' '}
			 				{this.props.client.general.lastName}
			 			</h2>				 			
			 			<p><b>Company:</b> {this.props.client.job.company}</p>
						<p><b>Title:</b> {this.props.client.job.title}</p>
						<p><b>Email:</b> {this.props.client.contact.email}</p>
		      			<p><b>Phone:</b> {this.props.client.contact.phone}</p>
		      			<p><b>Country:</b> {this.props.client.address.country}</p>
		      			<p><b>City:</b> {this.props.client.address.city}</p>
		      			<p><b>Street:</b> {this.props.client.address.street}</p>
		      			<p><b>ZipCode:</b> {this.props.client.address.zipCode}</p>
		      		</td>
				 	
			 	</tbody>
			 </table>				
				
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		client: state.clients.active
	};
}

export default connect (mapStateToProps)(Details)