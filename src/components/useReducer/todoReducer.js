
// Add TODO
const add = (state, payload) => [...state, payload];

// TODO completed
const completed = (state, payload) => state.map(todo => 
    (todo.id === payload)
    ? { ...todo, done: !todo.done }
    : todo
)

const actionDict = {
    '@todo/add': add,
    '@todo/completed': completed,
    '@todo/delete': (state, payload) => state.filter(todo => todo.id !== payload)
}

export const todoReducer = (state = [], action) => {
    const selection = actionDict[action.type];
    return selection ? selection(state, action.payload) : state;
}