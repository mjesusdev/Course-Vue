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
        expect( mockStore.dispatch ).toHaveBeenCalledWith("auth/createUser", {"email": "pepe@gmail.com", "name": "Pepe"})
        expect( resp ).toBe({ ok: true })
    })
      
})
