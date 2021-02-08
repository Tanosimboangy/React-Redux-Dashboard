import { combineReducers } from 'redux';

function newCommentsReducer(newComments = 12, action) {return newComments}
function newTasksReducer(newTasks = 12, action) {return newTasks}
function newOrdersReducer(newOrders = 2, action) {return newOrders}
function ticketsReducer(tickets = 13, action) {return tickets}
function ordersReducer(orders = [], action) {return orders}
function tasksReducer(tasks = [], action) {return tasks}
function messagesReducer(messages = [], action) {return messages}

export const reducers = combineReducers({
    newCommentsReducer, 
    newTasksReducer, 
    newOrdersReducer, 
    ticketsReducer, 
    ordersReducer, 
    tasksReducer, 
    messagesReducer
})