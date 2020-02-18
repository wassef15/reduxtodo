import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, completeTodo, saveTodo } from '../actions/actions'

const TodoList = (props) => {
    return (
        <div>
            {
                props.todos.map(el => (
                    <div key={el.id}>
                        <p style={{textDecoration: el.completed ? 'line-through' : 'none'}}>{el.text}</p>
                        <button onClick={() => props.complete(el.id)}>
                            {el.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => props.remove(el.id)}>Delete</button>
                        <button onClick={()=>props.save(el)}>Edit</button>
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => {
    return{
        todos: state.TodoReducer
    }
}
const mapDispatchToProps = dispatch => {
    return{
        remove: id => dispatch(deleteTodo(id)),
        complete: id => dispatch(completeTodo(id)),
        save: todo => dispatch(saveTodo(todo))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
