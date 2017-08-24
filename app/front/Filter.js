import React, { Component } from 'react';
import { connect } from 'react-redux';


class Filter extends Component {
  changeFilter(e){
    var elem = e.target.options;
    //console.log(elem[elem.selectedIndex].value);
    this.props.onChangeFilter(elem[elem.selectedIndex].value);
  }
  render() {
    return (
      <select onChange={this.changeFilter.bind(this)} id="filterForm">
        <option value="SHOW_ALL">Показать все</option>
        <option value="SHOW_UNCOMPLETED">Показать незавершенные</option>
      </select>
    );
  }
}

export default connect(
  state => ({
    store:state
  }),
  dispatch => ({
    onChangeFilter:(filter) => {
      dispatch({type:'SET_VISIBILITY_FILTER', filter:filter });
    }
  })
)(Filter);
