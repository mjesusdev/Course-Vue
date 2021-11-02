import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'

describe('Test in About View', () => {
    test('should run the component correctly', () => {
        const wrapper = shallowMount(Home);
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('should click in a button and redirect to "no-entry" ', () => {
        const mockRouter = {
            push: jest.fn()
        }

        const wrapper = shallowMount(Home, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        })

        wrapper.find('button').trigger('click')
        expect( mockRouter.push ).toHaveBeenCalled()
        expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'no-entry' })
    })
})