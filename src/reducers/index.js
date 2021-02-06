import { combineReducers, createStore } from 'redux'
import newCommentsReducer from "../components/Comments";
import newTasksReducer from "../components/Tasks";
import newOrdersReducer from "../components/Orders";
import ticketsReducer from "../components/Tickets";
import ordersReducer from "../components/Orders";
import tasksReducer from "../components/Tasks";
import messagesReducer from "../components/MessagePreview";
// const {combineReducers, createStore} = redux;

const rootReducer = combineReducers ({
    newComments : newCommentsReducer,
    newTasks : newTasksReducer,
    newOrders : newOrdersReducer,
    tickets : ticketsReducer,
    orders : ordersReducer,
    tasks : tasksReducer,
    messages : messagesReducer,
})

const store = createStore(rootReducer());

store.subscribe(() => {
    console.log(store.getState())
})

export default store;