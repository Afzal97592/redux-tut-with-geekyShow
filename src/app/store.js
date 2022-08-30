import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import themeReducer from '../features/theam/theamSlice';

export const store = configureStore({
    reducer : {
      Counter: counterReducer,
      theme: themeReducer,
    },
})