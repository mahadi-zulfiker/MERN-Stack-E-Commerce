import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user : null,
    isLoading : false,
    isAuthenticated : false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setLoading(state, action) {
            state.isLoading = action.payload
        },
        setAuthenticated(state, action) {
            state.isAuthenticated = action.payload
        }
    }
})

export const { setUser, setLoading, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;