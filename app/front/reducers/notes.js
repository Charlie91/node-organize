const initialState = [
  {content:'My first Note',completed:false}
];

export default function noteList(state = initialState, action){
  if(action.type === 'addNote'){
    return [
      action.noteContent,
      ...state
    ]
  }
  else if(action.type === 'TOGGLE_NOTE'){
    return state.map((note,i) => {
        if( i === action.index){
          return Object.assign({}, note, {
            completed: !note.completed
          })
        }
        return note;
    })

  }
  return state;
}


/*  if(i === action.index){
    return Object.assign({}, note, {
      completed: !note.completed
    })
  }*/
