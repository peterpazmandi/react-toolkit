const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    nomOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.nomOfCakes--;
        },
        restocked: (state, action) => {
            state.nomOfCakes += action.payload;
        }
    }
})

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;