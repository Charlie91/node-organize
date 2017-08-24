import React, { Component } from 'react';
import Input from './Input';
import NoteList from './NoteList';
import { connect } from 'react-redux';
import Filter from './Filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Input />
        <NoteList />
        <Filter />
      </div>
    );
  }
}

export default connect(
  state => ({
    store:state
  }),
  dispatch => ({})
)(App);
