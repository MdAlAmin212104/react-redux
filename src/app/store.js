import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counters/CounterSlice";
import postsReducer from "../features/Posts/PostSlice";

const store = configureStore({
    reducer: {
        counter : counterReducer,
        posts: postsReducer,
    }
})

export default store;