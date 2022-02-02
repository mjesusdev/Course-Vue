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
    })
    
    // Mutations
    test('Mutation: loginUser', () => {
        const store = createVuexStore({
            status: 'authenticating',
            user: null,
            idToken: null,
            refreshToken: null
        })
        
        const payload = {
            user: { name: 'Pepe', email: 'pepe@gmail.com' },
            idToken: 'ABC-123',
            refreshToken: 'XYZ-123'
        }
        
        store.commit('auth/loginUser', payload)
        
        const { status, user, idToken, refreshToken } = store.state.auth
        
        expect(status).toBe('authenticated')
        expect(user).toEqual({ name: 'Pepe', email: 'pepe@gmail.com' })
        expect(idToken).toBe('ABC-123')
        expect(refreshToken).toBe('XYZ-123')
    })

    test('Mutation: logout', () => {
        localStorage.setItem('idToken', 'ABC-123')
        localStorage.setItem('refreshToken', 'XYZ-123')

        const store = createVuexStore({
            status: 'authenticated',
            user: { name: 'Pepe', email: 'pepe@gmail.com' },
            idToken: 'ABC-123',
            refreshToken: 'XYZ-456'
        })

        store.commit('auth/logout')

        const { status, user, idToken, refreshToken } = store.state.auth
        
        expect(status).toBe('not-authenticated')
        expect(user).toBeFalsy()
        expect(idToken).toBeFalsy()
        expect(refreshToken).toBeFalsy()

        expect(localStorage.getItem('idToken')).toBeFalsy()
        expect(localStorage.getItem('refreshToken')).toBeFalsy()
    })
})