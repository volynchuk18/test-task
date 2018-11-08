import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
	render () {
		if (!this.props.client) {
			return (<p />)
		}
		return (
			<div className='details'>
				<h2>{this.props.client.general.firstName} {this.props.client.general.lastName}</h2>
				<img src={this.props.client.general.avatar} /><br />
				<p>Company: {this.props.client.job.company}</p>
				<p>Title: {this.props.client.job.title}</p>
				<p>Email: {this.props.client.contact.email}</p>
      			<p>Phone: {this.props.client.contact.phone}</p>
      			<p>Country: {this.props.client.address.country}</p>
      			<p>City: {this.props.client.address.city}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		client: state.active
	};
}

export default connect (mapStateToProps)(Details)