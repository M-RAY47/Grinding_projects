import Redux from 'react-redux'
//
const ADD = "ADD";

const addMessage = (msg) => {
  return {
    type: "ADD", msg
  }
}

// action reducer
const messageReducer = (state = [], action) =>{
	switch(action.type) {
		case ADD:
			return [...state, action.msg]
		default:
			return state
	}
}

const store = Redux.createStore(messageReducer)
