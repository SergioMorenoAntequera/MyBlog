const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    users: {
        byId: {
            // "0": {
            //     id: "0",
            //     title: "",
            //     body: "",
            //     createdAt: "",
            //     comments: [""]
            // }
        },
        allIds: [],
    },
    loading: false,
    error: "",
}

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            let newUser = action.payload;
            if(state.users.allIds.includes(newUser.uid)) return state
            state.users.allIds.push(newUser.uid)
            state.users.byId[newUser.uid] = newUser
        }
    }
})

export const { addUser } = userSlice.actions;
const usersReducer = userSlice.reducer;
export default usersReducer;