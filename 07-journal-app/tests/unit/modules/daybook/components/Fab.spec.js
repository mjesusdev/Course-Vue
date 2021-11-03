import Fab from '@/modules/daybook/components/Fab'
import { shallowMount } from '@vue/test-utils'

describe('Test in FAB component', () => {

    test('should show the icon by default', () => {
        //* fa-plus
        const wrapper = shallowMount( Fab )
        const iTag = wrapper.find('i')

        expect( wrapper.html() ).toMatchSnapshot()
        expect( iTag.classes('fa-plus') ).toBeTruthy()
    })

    test('should show the icon when clicked', () => {
        //* fa-circle
        const wrapper = shallowMount( Fab, {
            props: {
                icon: 'fa-circle'
            }
        })

        const iTag = wrapper.find('i')
        expect( iTag.classes('fa-circle') ).toBeTruthy()
    })

    test('should emit the event "on:click" when do click', () => {
        //* wrapper.emitted('on:click')
        const wrapper = shallowMount( Fab )

        wrapper.find('button').trigger('click')
        expect( wrapper.emitted('on:click') ).toHaveLength(1)
    });

});