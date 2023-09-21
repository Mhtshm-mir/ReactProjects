import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    userName:string|null
    token:string|null
}
const initState:AuthState={
    userName:null,
    token:null,
}
export const loginPage = createSlice({
    name:"login",
    initialState:initState,
    reducers:{


    }

})

// export default loginPage.reducer