import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {search} from '../actions/index';
import {Input} from 'semantic-ui-react'

class SearchBar extends Component {

  render() {
    const {search, value} = this.props;
    return (
        <Input icon='search' 
          className='searchBar'
          placeholder='Search...' 
          value={value}
          onChange={(e) => search(e.target.value)}>
        </Input>
 
    );
  }
} 

function mapStateToProps(state) {
  return {value: state.value};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({search}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);