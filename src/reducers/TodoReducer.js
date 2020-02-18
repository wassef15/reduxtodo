import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE } from '../actions/types'
import uuid from 'uuid'

const initialState = [
    {
        id: uuid(),
        text: 'Throw the trash',
        completed: false
    },
    {
        id: uuid(),
        text: 'Workshop Redux',
        completed: false
    }
]

const TodoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO: // if(action.type === ADD_TODO)
            return state.concat(action.payload) // [...state, action.payload]
        case DELETE_TODO:
            return state.filter(el => el.id !== action.payload)
        case COMPLETE:
            return state.map(el => el.id === action.payload ? {...el, completed: !el.completed} : el)
        case EDIT_TODO:
            return state.map(el => el.id === action.payload.id ? action.payload : el)
        default:
            return state
    }
}

export default TodoReducer