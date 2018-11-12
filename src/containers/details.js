import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
	render () {
		if (!this.props.client) {
			return (<p />)
		}
		return (
			<div className='details'>
			 <table width="100%" cellSpacing="0" cellPadding="0">
			 	<tbody>
				 	<tr> 
				 		<td className='leftcol'>
				 			<img src={this.props.client.general.avatar} alt='cant load img'/><br />
				 		</td>
				 		<td className='detailsText'>
				 			<h3>{this.props.client.general.firstName}
				 				{this.props.client.general.lastName}
				 			</h3>
				 			<p>Company: {this.props.client.job.company}</p>
							<p>Title: {this.props.client.job.title}</p>
							<p>Email: {this.props.client.contact.email}</p>
			      			<p>Phone: {this.props.client.contact.phone}</p>
			      			<p>Country: {this.props.client.address.country}</p>
			      			<p>City: {this.props.client.address.city}</p>
			      			<p>Street: {this.props.client.address.street}</p>
			      			<p>ZipCode: {this.props.client.address.zipCode}</p>
				 		</td>
				 	</tr>
			 	</tbody>
			 </table>
				<h2></h2>
				
				
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