import Counter from '@/components/Counter'
import { shallowMount, mount } from '@vue/test-utils'

describe('Counter Component', () => {

    /* test('should match with Snapshot', () => {
        const wrapper = shallowMount( Counter )
        expect( wrapper.html() ).toMatchSnapshot()
    }) */

    test('h2 should have the value by default "Counter"', () => {
        const wrapper = shallowMount( Counter )
    
        /* expect( wrapper.find('h10').exists() ).toBeTruthy() */

        const h2Value = wrapper.find('h2').text()

        expect( h2Value ).toBe('Counter')
    })

    test('the value by default should be 100 on the <p>', () => {
        // 1.Step - Mount the component with wrapper
        const wrapper = shallowMount( Counter )

        // 2.Step - Find the <p> with attribute "data-testid"
        const value = wrapper.find('[data-testid="counter"]').text()

        // 3.Step - Assert the value
        expect( value ).toBe( '100' )
    })

})