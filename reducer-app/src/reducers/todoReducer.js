export const initialTodosState = [
    {
      item: 'Read',
      completed: false,
      id: 1569028265662
    }, 
    {
      item: 'Exercise',
      completed: false,
      id: 1569028255640
    },
    {
      item: 'Todos Project',
      completed: false,
      id: 1569028365554
    }
  ];
 
  export const todoReducer = (state, action) => {
    switch (action.type) {
        case('ADD_TODO'):
        return [
          ...state,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      case('TOGGLE_COMPLETED'):
        return (  
          state.map( (todo) =>{
            if( todo.id === action.payload ) {
              return { ...todo, completed: !todo.completed }
            }
            return todo;
          })
        )
      case('CLEAR_COMPLETED'):
        return (
          state.filter( todo => !todo.completed )
        )
      default: 
        return state;
    }
  };