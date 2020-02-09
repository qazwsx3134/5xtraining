import { createStore, combineReducers } from "redux";
import dataReducer from "../reducers/data";


export default ()=>{
    const store = createStore(
        combineReducers({
            data: dataReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    return store;
};

