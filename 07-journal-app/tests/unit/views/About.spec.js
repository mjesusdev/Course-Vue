import About from '@/views/About'
import { shallowMount } from '@vue/test-utils'

describe('Test in About View', () => {
    test('should run the component correctly', () => {
        const wrapper = shallowMount(About);
        expect( wrapper.html() ).toMatchSnapshot()
    });
})