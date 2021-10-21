export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), // 123456789
            date: new Date().toDateString(), // thursday 21 October
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ea accusantium, sequi saepe quis obcaecati pariatur aut, molestiae dolor in rerum sit distinctio maiores omnis asperiores tempora laudantium! Nemo, ullam.',
            picture: null // https
        },
        {
            id: new Date().getTime() + 1000, // 1234567893232
            date: new Date().toDateString(), // thursday 21 October
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ea accusantium, sequi saepe quis obcaecati pariatur aut, molestiae dolor in rerum sit distinctio maiores omnis asperiores tempora laudantium! Nemo, ullam.',
            picture: null // https
        },
        {
            id: new Date().getTime() + 2000, // 1234567893232234
            date: new Date().toDateString(), // thursday 21 October
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ea accusantium, sequi saepe quis obcaecati pariatur aut, molestiae dolor in rerum sit distinctio maiores omnis asperiores tempora laudantium! Nemo, ullam.',
            picture: null // https
        }
    ]
})