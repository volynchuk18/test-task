import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectClient} from '../actions/index';

class ClientsList extends Component {
	showList() {
		return this.props.clients.map( (item, id) => {
			return (<div role='listitem' className='item' key={id} onClick={() => this.props.selectClient(item)}>				
						<img className='ui avatar image' src={item.general.avatar} />
							<div className='content'>
						      <p className='header'>{item.general.firstName}</p>
							      <div className='description'>
							        {item.job.title}
							      </div>
						    </div>						    
					</div>										
			);
		});
	}

	render() {
		return (
			<div className='sidebar'>
				<div role='list' className='ui selection middle aligned list'>				
					{this.showList()}			
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		clients: state.clients
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({selectClient: selectClient}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ClientsList);