const initialState = {
    todoList: [
        { id: 1, content: 'Làm việc nhà', isCompleted: false },
        { id: 2, content: 'Làm bài tập', isCompleted: false },
        { id: 3, content: 'Tập thể dục', isCompleted: false },
    ],
    filter: 'all'
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const todoList = [
                ...state.todoList,
                {
                    id: Math.random().toString(36).substr(2, 5),
                    content: action.content,
                    isCompleted: false,
                }
            ]

            // state.todoList.push(
            //     {
            //         id: Math.random().toString(36).substr(2, 5),
            //         content: action.content,
            //         isCompleted: false,
            //     }
            // )

            // console.log(state.todoList);
            // return state;jnhmjnmhhhhhhhhhhhhhhhhhhhhhhhhhjjjmjjjnmhhhhhhhjjmnhhhhhhhjmjmnnjmnnjmjj

            // return về Object mới thì data mới đc cập nhật (bắt buộc)
            return {...state, todoList}
        }
        case "COMPLETED_TODO": {
            const todoList = state.todoList.map((todo) => {
                if(todo.id === action.id) {
                    return {
                        ...todo,
                         isCompleted: !todo.isCompleted
                    }
                }

                
                return todo;
            })
            return {...state, todoList}
        }
        case "FILTER_TODO": {
            return {...state, filter: action.status}
        }
        default:
            return state;
    }
}

export default todosReducer;