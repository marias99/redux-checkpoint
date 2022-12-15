export const stateSlice = {
    name: "state",
    initialState: {
        dogs: [],
        cats: [],
        petToPreview: {},
        petToAdopt: {}
    },
reducers: {
    preview(state, action) {
        state.petToPreview = action.payload
    },
    adoptPet(state, action) {
        state.petToAdopt = action.payload
    },
    addNewDog(state, action) {
        state.dogs.push(action.payload)
    },
    removeDog(state, action) {
    
    state.dogs = state.dogs.filter((dog) => dog.id !== action.payload)
    },
    removeCat(state, action) {
        state.cats = state.cats.filter((cat) => cat.id !== action.payload)
    }
}

}; //replace {} with your code

export const store = {
    reducer: {

    }
}; //replace {} with your code!!!!!


