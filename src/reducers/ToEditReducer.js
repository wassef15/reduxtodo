import { SAVE_TODO, CLEAR } from '../actions/types'

const ToEditReducer = (state = null, action) => {
    switch(action.type){
        case SAVE_TODO:
            return action.payload
        case CLEAR:
            return null
        default:
            return state
    }
}

export default ToEditReducer;