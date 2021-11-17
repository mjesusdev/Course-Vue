import { shallowMount } from '@vue/test-utils'

import Entry from '@/modules/daybook/components/Entry.vue'
import { journalState } from '../../../mock-data/test-journal-state'

describe('Tests in Entry Component', () => {

    // mockRouter
    const mockRouter = {
        push: jest.fn()
    }

    const wrapper = shallowMount( Entry, { 
        props: {
            entry: journalState.entries[0]
        },
        global: {
            mocks: {
                $router: mockRouter
            }
        }
    })

    test('should do match with snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('should redirect when clicks in the entry-container', () => {
        const entryContainer = wrapper.find('.entry-container')
        entryContainer.trigger('click')

        expect( mockRouter.push ).toHaveBeenCalledWith(
            {
                name: 'entry',
                params: {
                    id: journalState.entries[0].id
                }
            }
        )
    })

    test('tests in properties computed', () => {
        expect( wrapper.vm.day ).toBe(28)
        expect( wrapper.vm.month ).toBe('Octubre')
        expect( wrapper.vm.yearDay ).toBe('2021, Jueves')
    })
})