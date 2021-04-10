import {configureStore} from "@reduxjs/toolkit";
import subRedditReducer from "../Features/subRedditSlice";
import childrenReducer from "../Features/childrenSlice";

const store = configureStore({
    reducer: {
        subReddit: subRedditReducer, 
        children: childrenReducer
    }
})

export default store;