import React, { Component } from 'react'
import { connect } from "react-redux";
import { addTodo, completedTodo, filterTodo } from '../actions/todoActions';

export class TodoApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            content: ""
        }
    }

    handleChange = event => {
        this.setState({
            content: event.target.value
        })
    }

    addTodo = event => {
        console.log(event.target);
        // Cẩn phải gọi action tới store để thêm todo
        this.props.addTodo(this.state.content);
    }

    setCompleteTodo = (id) => {
        // Gọi action completed todo
        // đưa cái action đó vào mapDispatchToProps
        // để action đó trở thành props của component
        this.props.completedTodo(id);
    }

    filterTodo = (status) => {
        // gọi tới cái action set filter
        this.props.filterTodo(status);
    }

    renderTodo = () => {
        // render ds todo dựa trên biến filter
        let todoList = [];

        if (this.props.filter === 'all') {
            todoList = [...this.props.todoList];
        }

        if (this.props.filter === 'completed') {
            todoList = this.props.todoList.filter((item) => item.isCompleted);
        }

        if (this.props.filter === 'active') {
            todoList = this.props.todoList.filter((item) => !item.isCompleted);
        }

        return todoList.map((todo) => {
            return <li key={todo.id} onClick={() => {
                this.setCompleteTodo(todo.id)
            }
            } style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>{todo.content}</li>
        })
    }

    render() {
        console.log(this.props.filter);
        return (
            <div className="w-25 mx-auto">
                <h1>Todos</h1>
                <div className="d-flex">
                    <input type="text" className="form-control" value={this.state.content}
                        // Sự kiện onChange xảy ra khi ta nhập giá trị vào ô input
                        onChange={event => this.handleChange(event)}
                    // This is the same with above
                    // onChange={this.handleChange}
                    />
                    <button className="btn btn-success" onClick={(event) => {
                        this.addTodo(event)
                    }}>Add</button>
                </div>
                <ul>
                    {this.renderTodo()}
                </ul>
                <div className="d-flex">
                    <button className="btn btn-success mr-4" onClick={() =>
                        this.filterTodo("all")
                    }>All</button>
                    <button className="btn btn-success mr-4" onClick={() =>
                        this.filterTodo("active")
                    }>Active</button>
                    <button className="btn btn-success" onClick={() =>
                        this.filterTodo("completed")
                    }>Completed</button>
                </div>
            </div>

        )
    }
}

// Lấy state của store về làm props của component
const mapStateToProps = (state) => {
    return {
        todoList: state.todosReducer.todoList,
        filter: state.todosReducer.filter
    }
}

// Lấy action của store về làm props của component
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (content) => dispatch(addTodo(content)),
        completedTodo: (id) => dispatch(completedTodo(id)),
        filterTodo: (status) => dispatch(filterTodo(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
