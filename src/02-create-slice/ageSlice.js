export const ageSlice = {
    name: "age",
    initialState: 0,
    reducers: {
        hadBirthday(state) {
            return state + 1
        }
    }
}; 
//replace {} with your code

export default ageSlice.reducer;
