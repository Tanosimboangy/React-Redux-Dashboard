import redux, { createStore } from 'redux';

export function newCommentsReducer(state, action) {
    switch(action.type) {
        case "NEW_COMMENTS_REDUCER":
            return state
    }
}
export function newTasksReducer(state, action) {
    switch(action.type) {
        case "NEW_TASKS_REDUCER":
            return state
    }
}
export function newOrdersReducer(state, action) {
    switch(action.type) {
        case "NEW_ORDERS_REDUCER":
            return state
    }
}
export function ticketsReducer(state, action) {
    switch(action.type) {
        case "TICKETS_REDUCER":
            return state
    }
}
export function ordersReducer(state, action) {
    switch(action.type) {
        case "ORDERS_REDUCER":
            return state
    }
}
export function tasksReducer(state, action) {
    switch(action.type) {
        case "TASKS_REDUCER":
            return state
    }
}
export function messagesReducer(state, action) {
    switch(action.type) {
        case "MESSAGES_REDUCER":
            return state
    }
}

    const {combineReducers, createStore} = redux;

    const rootReducer = combineReducers ({

    })

    const store = createStore(rootReducer);

    store.subscribe(() => {
        console.log(store.getState())
    })

    export default store;