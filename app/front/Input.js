import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {


  addNote(e){
    this.props.onAddNote(this.trackInput.value);
    this.trackInput.value = '';
  };
  render() {
    return (
      <div className="Input">
        <textarea id="input" ref = {(input) => { this.trackInput = input}}type="textarea" placeholder="Введите текст заметки"/>
        <button onClick={this.addNote.bind(this)} id="addButton"> Добавить </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    store:state.notes
  }),
  dispatch => ({
    onAddNote:(trackName) => {
      dispatch({type:'addNote', noteContent:{content:trackName,completed:false} })
    }
  })
)(Input);
