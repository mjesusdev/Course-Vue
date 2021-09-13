import Counter from '@/components/Counter'
import { shallowMount, mount } from '@vue/test-utils'

describe('Counter Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })
    
    /* test('should match with Snapshot', () => {
        const wrapper = shallowMount( Counter )
        expect( wrapper.html() ).toMatchSnapshot()
    }) */

    test('h2 should have the value by default "Counter"', () => {
        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect( h2Value ).toBe('Counter')
    })

    test('the value by default should be 100 on the <p>', () => {
        // 2.Step - Find the <p> with attribute "data-testid"
        const value = wrapper.find('[data-testid="counter"]').text()

        // 3.Step - Assert the value
        expect( value ).toBe( '100' )
    })

    test('the value should be incremented and decrement the counter', async() => {
        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button')
        
        // Simulate the click event
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        
        const value = wrapper.find('[data-testid="counter"]').text()
        
        expect( value ).toBe('101');
    })

    test('the value should be set up by default', () => {
        const { start } = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( Number(value) ).toBe( start )
    })

    test('the prop title should be show', () => {
        
        const title = 'Hola Mundo'

        const wrapper = shallowMount( Counter, {
            props: {
                title
            }
        })

        expect( wrapper.find('h2').text() ).toBe(title);
    })

})