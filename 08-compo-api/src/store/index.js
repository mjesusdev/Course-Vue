import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Recolectar las piedras del infinito', completed: false },
      { id: '2', text: 'Piedra del alma', completed: true },
      { id: '3', text: 'Piedra del poder', completed: true },
      { id: '4', text: 'Piedra de realidad', completed: false },
      { id: '5', text: 'Conseguir nuevos secuaces competentes', completed: false },
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    pendingTodos( state, getters, rootState ) {
      return state.todos.filter( todo => !todo.completed )
    },
    allTodos: ( state, getters, rootState ) => {
      return state.todos
    },
    completedTodos: ( state, getters, rootState ) => {
      return state.todos.filter( todo => todo.completed )
    },
  },
  modules: {
  }
})
