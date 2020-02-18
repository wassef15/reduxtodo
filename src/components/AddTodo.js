import React, { Component } from 'react'
import uuid from 'uuid'
import { addTodo, editTodo, clearField } from '../actions/actions'
import { connect } from 'react-redux';

class AddTodo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            todo: null
        }
    }
    handleChange = e => {
        this.setState({ text: e.target.value });
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.savedTodo){
            this.setState({todo: nextProps.savedTodo, text: nextProps.savedTodo.text})
        }
    }
    editAndClear = () => {
        this.props.updateTodo({...this.state.todo, text: this.state.text})
        this.props.clear()
        this.setState({todo: null, text: ''})
    }
    render(){
        return(
            <div>
                <input value={this.state.text} type="text" onChange={this.handleChange} placeholder="Write new todo..."/>
                <button onClick={
                    () => {
                        this.state.todo ? this.editAndClear()
                        : this.props.addNewTodo({completed: false, text: this.state.text, id: uuid()})
                }}>{this.state.todo ? 'Edit!' : 'Add!'}</button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return{
        addNewTodo: x => dispatch(addTodo(x)),
        updateTodo: todo => dispatch(editTodo(todo)),
        clear: () => dispatch(clearField())
    }
}
const mapStateToProps = state => {
    return{
        savedTodo: state.ToEditReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)