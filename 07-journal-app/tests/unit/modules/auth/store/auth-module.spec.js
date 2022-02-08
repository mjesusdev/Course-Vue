import axios from 'axios'
import createVuexStore from '../../../mock-data/mock-store'

describe('Vuex: Tests in authModule', () => {
    const apiKey = process.env.VUE_APP_APIKEY

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

    test('Getter: username currentState', () => {
        const store = createVuexStore({
            status: 'authenticated',
            user: { name: 'Pepe', email: 'pepe@gmail.com' },
            idToken: 'ABC-123',
            refreshToken: 'XYZ-456'
        })

        expect( store.getters['auth/currentState'] ).toBe('authenticated')
        expect( store.getters['auth/username'] ).toBe('Pepe')
    })

    test('Actions: createUser - Error user exists yet', async() => {
        const store = createVuexStore({
            status: 'not-authenticated',
            user: null,
            idToken: null,
            refreshToken: null
        })

       const newUser = { name: 'Test User', email: 'test@test.com', password: '123456' } 
       
       const resp = await store.dispatch('auth/createUser', newUser)
       expect( resp ).toEqual({ ok: false, message: 'EMAIL_EXISTS' })
       
       const { status, user, idToken, refreshToken } = store.state.auth
       
       expect(status).toBe('not-authenticated')
       expect(user).toBeFalsy()
       expect(idToken).toBeFalsy()
       expect(refreshToken).toBeFalsy()
    })
    
    test('Actions: createUser signInUser - Crea el usuario', async() => {
        const store = createVuexStore({
            status: 'not-authenticated',
            user: null,
            idToken: null,
            refreshToken: null
        })
    
       const newUser = { name: 'Test User', email: 'test2@test.com', password: '123456' }

       // Action: SignIn
       await store.dispatch('auth/signInUser', newUser)
       const { idToken } = store.state.auth

       // Delete user
       const deleteResp = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:delete?key= ' + apiKey, {
           idToken
       })

       // Create user
       const resp = await store.dispatch('auth/createUser', newUser)
       expect(resp).toEqual({ ok:true })

       const { status, user, idToken: token, refreshToken } = store.state.auth
       
       expect(status).toBe('authenticated')
       expect(user).toMatchObject({ name: 'Test User', email: 'test2@test.com' })
       expect(typeof token).toBe('string')
       expect(typeof refreshToken).toBe('string')
    })
})