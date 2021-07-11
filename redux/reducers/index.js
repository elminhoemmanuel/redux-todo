import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
    addTodo:todoReducer,
});