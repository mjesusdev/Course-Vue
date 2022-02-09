import useAuth from '@/modules/auth/composables/useAuth'

const mockStore = {
    dispatch: jest.fn(),
    // Commit and Getters
}

jest.mock('vuex', () => ({
    useStore: () => mockStore
}))

describe('Tests in useAuth', () => {

    beforeEach(() => jest.clearAllMocks() )

    test('createUser Successful', async() => {
        const { createUser } = useAuth()

        const newUser = { name: 'Pepe', email: 'pepe@gmail.com' }
        mockStore.dispatch.mockReturnValue({ ok: true })

        const resp = await createUser( newUser )    
        expect( mockStore.dispatch ).toHaveBeenCalledWith('auth/createUser', newUser)
        expect( resp ).toEqual({ ok: true })
    })

    test('createUser failed, because the user exists yet', async() => {
        const { createUser } = useAuth()

        const newUser = { name: 'Pepe', email: 'pepe@gmail.com' }
        mockStore.dispatch.mockReturnValue({ ok: false, message: 'EMAIL_EXISTS' })

        const resp = await createUser( newUser )  
        expect( mockStore.dispatch ).toHaveBeenCalledWith('auth/createUser', newUser)
        expect( resp ).toEqual({ ok: false, message: 'EMAIL_EXISTS' })
    })
})
