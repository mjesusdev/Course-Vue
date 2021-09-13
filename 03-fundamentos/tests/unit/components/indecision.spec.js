import Indecision from '@/components/Indecision';
import { shallowMount, mount } from '@vue/test-utils'

describe('Component Indecision', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount( Indecision )
    })

    test('should do match with the snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot();
    })

})