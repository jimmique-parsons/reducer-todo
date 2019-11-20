import React, { useReducer } from 'react';

 import Todo from './Todo';
 import TodoForm from './TodoForm';
 import { todoReducer, initialTodosState } from '../reducers/todoReducer';

 export default function TodoList() {
    const [ state, dispatch ] = useReducer(todoReducer, initialTodosState);

   return (
    <div className="todolist">
      {
         state.map( (todo) => {
            return <Todo todo={todo} key={todo.id} dispatch={dispatch} />
         })
       }
       <TodoForm dispatch={dispatch} />
     </div>
   );
 }