import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE, SAVE_TODO, CLEAR } from './types'

export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const deleteTodo = id => {
    return{
        type: DELETE_TODO,
        payload: id
    }
}

export const completeTodo = id => {
    return{
        type: COMPLETE,
        payload: id
    }
}

export const saveTodo = todo => {
    return {
        type: SAVE_TODO,
        payload: todo
    }
}
export const editTodo = toUpdate => {
    return {
        type: EDIT_TODO,
        payload: toUpdate
    }
}

export const clearField = () => {
    return {
        type: CLEAR
    }
}
