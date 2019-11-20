import React from 'react';

export default function Todo({todo, dispatch}) {
    const toggleCompleted = (e) => {
      dispatch({
        type: 'TOGGLE_COMPLETED',
        payload: todo.id
      })
    }

   return (
     <div
       onClick={toggleCompleted} 
       className={`todo${todo.completed ? " completed" : ""}`}>
       <p>{todo.item}</p>
     </div>
   );
 }
