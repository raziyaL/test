import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        UserInfo: (state, action) => {
            state.users.push(action.payload)
        }
    }
})
export const { UserInfo } = usersSlice.actions;
export default usersSlice.reducer;