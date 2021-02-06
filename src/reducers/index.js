import { combineReducers } from 'redux';

function newCommentsReducer(newComments = 12, action) {return newComments}
function newTasksReducer(newTasks = 12, action) {return newTasks}
function newOrdersReducer(newOrders = 2, action) {return newOrders}
function ticketsReducer(tickets = 13, action) {return tickets}
function ordersReducer(orders = 14, action) {return orders}
function tasksReducer(tasks = 15, action) {return tasks}
function messagesReducer(messages = 16, action) {return messages}

export const reducers = combineReducers({
    newCommentsReducer, 
    newTasksReducer, 
    newOrdersReducer, 
    ticketsReducer, 
    ordersReducer, 
    tasksReducer, 
    messagesReducer
})