import {configureStore} from '@reduxjs/toolkit';
import usersSlice from './Slice';


export const store = configureStore({
    reducer: {
        users: usersSlice
    }
})

