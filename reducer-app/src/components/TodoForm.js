import React, { useState } from 'react';

export default function TodoForm({dispatch}) {
    const [ newTodoText, setNewTodoText ] = useState('');

    const handleChanges = (e) => {
      setNewTodoText(e.target.value);
    };
 
    const addTodo = (e) => {
      e.preventDefault();
      setNewTodoText('');
      dispatch(
        { type: "ADD_TODO",
          payload: newTodoText
        }
      );
      setNewTodoText('');
    };

    const clearCompleted = (e) => {
        e.preventDefault();
        dispatch(
          {
            type: "CLEAR_COMPLETED"
          }
        );
      }   

    return (
        <>
          <form className="todoform">
          <input 
           className="todoform__input"
           type="text" 
           placeholder="New Todo" 
           name="newTodoText"
           value={newTodoText}
           onChange={handleChanges}
         />
        <div className="btn-container">
           <button 
             className="btn-container__btn btn-container__btn--add" 
             onClick={addTodo}>Add Todo</button>
           <button 
             className="btn-container__btn btn-container__btn--clear"
             onClick={clearCompleted}>Clear Completed</button>
         </div>
       </form>
     </>
   )
}