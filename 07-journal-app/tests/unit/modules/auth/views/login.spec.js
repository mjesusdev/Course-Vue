import { shallowMount } from '@vue/test-utils'
import Login from '@/modules/auth/views/login.vue'

import createVuexStore from '../../../mock-data/mock-store'

import Swal from 'sweetalert2'
jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
    showLoading: jest.fn(),
    close: jest.fn()
}))

describe('Tests in Login Component', () => {

    const store = createVuexStore({
        status: 'not-authenticated',
        user: null,
        idToken: null,
        refreshToken: null
    })

    store.dispatch = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('should do match with SnapShot', () => {
        const wrapper = shallowMount(Login, {
            global: {
                plugins: [ store ]
            }
        })
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('user or password wrong', async() => {
        store.dispatch.mockReturnValueOnce({ ok: false, message: 'Error in credentials' })

        const wrapper = shallowMount(Login, {
            global: {
                plugins: [ store ]
            }
        })
        
        await wrapper.find('form').trigger('submit')
        expect( store.dispatch ).toHaveBeenCalledWith('auth/signInUser', { email: '', password: '' })
        expect( Swal.fire ).toHaveBeenCalledWith('Error', 'Error in credentials', 'error')
    })
    
    test('should redirect to route no-entry', async() => {
        store.dispatch.mockReturnValueOnce({ ok: true })
    
        const wrapper = shallowMount(Login, {
            global: {
                plugins: [ store ]
            }
        })

        const [ txtEmail, txtPassword ] = wrapper.findAll('input')
        await txtEmail.setValue('pepe@gmail.com')
        await txtPassword.setValue('123456')

        await wrapper.find('form').trigger('submit')

        expect( store.dispatch ).toHaveBeenCalledWith('auth/signInUser', { email: 'pepe@gmail.com', password: '123456' })
        expect( wrapper.router.push ).toHaveBeenCalledWith({ 'name': 'no-entry' })
    })
})