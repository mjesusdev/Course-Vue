/* export const myAction = async ({ commit }) => {

} */

import authApi from "../../../api/authApi"

export const createUser = async ({ commit }, user ) => {
    const { name, email, password } = user

    try {
        const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })
        console.log(data)
        console.log(name, commit)
        
        // TODO: Mutation: loginUser

        return { ok: true }
    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }
}