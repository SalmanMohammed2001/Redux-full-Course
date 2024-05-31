import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice.js";
import postReducer from "../feature/post/postSlice.js";

export  const  store=configureStore({
    reducer:{
        counter : counterReducer,
        posts: postReducer
    }
})