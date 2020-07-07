export const addTodo = (content) => {
    return {
        // Bắt buộc phải có type
        type: "ADD_TODO",
        // content: content,
        content,
    }
}


export const completedTodo = (id) => {
    return {
        type: "COMPLETED_TODO",
        id,
    }
}


export const filterTodo = (status) => {
    return {
        type: "FILTER_TODO",
        status,
    }
}