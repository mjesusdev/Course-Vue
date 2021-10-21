export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), // 123456789
            date: new Date().toDateString(), // thursday 21 October
            text: 'Test',
            picture: null // https
        },
        {
            id: new Date().getTime() + 1000, // 1234567893232
            date: new Date().toDateString(), // thursday 21 October
            text: 'Test 2',
            picture: null // https
        },
        {
            id: new Date().getTime() + 2000, // 1234567893232234
            date: new Date().toDateString(), // thursday 21 October
            text: 'Test 3',
            picture: null // https
        }
    ]
})