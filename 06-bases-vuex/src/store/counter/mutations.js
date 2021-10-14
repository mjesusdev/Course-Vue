export const increment = ( state ) => {
    state.count++
    state.lastMutation = 'increment'
}

export const incrementBy = ( state, value ) => {
    state.count += value
    state.lastMutation = 'incrementBy ' + value
    state.lastRandomInt = value
}

export const setLoading = ( state, value ) => {
    state.isLoading = value
    state.lastMutation = 'setLoading ' + value
}