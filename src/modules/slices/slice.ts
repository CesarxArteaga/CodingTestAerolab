import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
import { User } from '../types/user.interface';

// Define a type for the slice state
interface State {
    user?: User,
    refresh: boolean;
}

// Define the initial state using that type
const initialState: State = {
    refresh: false
}

export const appSlice = createSlice({
    name: 'appSlice',
    // `createappSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        }, 
        setRefresh: (state, action: PayloadAction<boolean>) => {
            state.refresh = action.payload;
        }
    },
})

export const { setUser, setRefresh } = appSlice.actions

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value

export default appSlice.reducer