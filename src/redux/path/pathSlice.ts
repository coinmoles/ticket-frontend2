import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, PathOptions } from "./utils"

export const pathSlice = createSlice({
    name: 'path',
    initialState,
    reducers: {
        toPath: (state, action: PayloadAction<PathOptions>) => {
            state.currentPath = action.payload
        }
    }
})

export const { toPath } = pathSlice.actions
export default pathSlice.reducer