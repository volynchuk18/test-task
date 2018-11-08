import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {SEARCH} from '../actions';
import {connect} from 'react-redux';
import clients from '../clients.json';
import Search from './clients-filter';

const initialState = {filteredList: clients};

export default function (state = initialState, action) {

  switch(action.type) {
    case SEARCH: {
  
		const filteredList = clients.filter((obj => {
						    	return	Object.values(obj).some(obj2 => {
							    		return Object.values(obj2).some(v => v.toString().includes(action.value))
							    	})
	    					}))
    	const {value} = action;
class ClientsList extends Component {
	showList() {
		return this.props.filteredList.map( (item, id) => {
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
				<Search />
				<div role='list' className='ui selection middle aligned list'>				
					{this.showList()}			
				</div>
			</div>
		);
	}
}
   
     // const clients = state.contents.filter((val) => val.includes(value));
      return {...state, filteredList};      

    }
    default:
      return state;
  }
}