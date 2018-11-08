import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {search} from '../actions/index';


class SearchBar extends Component {
  render() {
    const {search, value} = this.props;
    return (
        <div className="ui icon input" >
          <input type="text" 
            placeholder="search" 
            value="" 
            id="15"
            tabIndex="0" 
            className="searchBar" 
            autoComplete="off" 
            value={value}
            onChange={(e) => search(e.target.value)}
            >
          </input>
          <i aria-hidden="true" className="search icon"></i>
        </div>
 
    );
  }
} 

function mapStateToProps({clients}) {
  return {value: clients.value};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({search}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);