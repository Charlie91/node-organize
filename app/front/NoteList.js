import React, { Component } from 'react';
import { connect } from 'react-redux';


class NoteList extends Component {
  changeComplete(e){
    this.props.onToggleNote(e.target.dataset.item);
  };
  render() {
    return (
      <div className="noteList">
          {this.props.store.notes.map((track, i) =>
            (track.completed && this.props.store.visibilityFilter === 'SHOW_UNCOMPLETED') ? '' :
            <div
              className={(track.completed) ? "note completed"  : 'note'}
              key={i}
            >
              {track.content}
              <button data-item={i} onClick={this.changeComplete.bind(this)}>
                {(track.completed) ? '✓' : ''}
              </button>
            </div>
          )}
      </div>
    );
  }
}
//
export default connect(
  state => ({
    store:state
  }),
  dispatch => ({
    onToggleNote:(index) => {
      dispatch({type:'TOGGLE_NOTE', index:+index })
    }
  })
)(NoteList);
