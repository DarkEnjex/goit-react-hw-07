import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const { changeFilter } = filterSlice.actions;
export const selectNameFilter = (state) => state.filters.name;
export default filterSlice.reducer;