/* export const myAction = ( state ) => {

} */

export const setEntries = ( state, entries ) => {
    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false
}

export const updateEntry = () => {

}

export const addEntry = () => {

}