import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision';

describe('Component Indecision', () => {

    let wrapper
    let clgSpy

    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }) )

    beforeEach(() => {
        wrapper = shallowMount( Indecision )

        clgSpy = jest.spyOn(console, 'log')

        jest.clearAllMocks()
    })

    test('Should do match with the snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Write in the input not should nothing', async() => {
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')
        await input.setValue('Hello World!')

        expect( clgSpy ).toHaveBeenCalledTimes(1)
        expect( getAnswerSpy ).not.toHaveBeenCalled() 
    })
    
    test('Write "?" should return the getAnswer', async() => {
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )
    
        const input = wrapper.find('input')
        await input.setValue('Hello World?')
    
        expect( clgSpy ).toHaveBeenCalledTimes(1)
        expect( getAnswerSpy ).toHaveBeenCalled()
    })

    test('Test in getAnswer', async() => {
        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeTruthy()
        expect( wrapper.vm.img ).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect( wrapper.vm.answer ).toBe('Sí!')
    })

    test('Test in getAnswer - Error in API', async() => {
        fetch.mockImplementationOnce( () => Promise.reject('API is down') )

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeFalsy()
        expect( wrapper.vm.answer ).toBe('The API cannot start')
    })

})