import createVuexStore from '../../../mock-data/mock-store'

describe('Vuex: Tests in authModule', () => {
    test('initial state', () => {
        const store = createVuexStore({
            status: 'authenticating',
            user: null,
            idToken: null,
            refreshToken: null
        })

        const { status, user, idToken, refreshToken } = store.state.auth

        expect(status).toBe('authenticating')
        expect(user).toBe(null)
        expect(idToken).toBe(null)
        expect(refreshToken).toBe(null)
    });
    
})
