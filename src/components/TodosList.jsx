import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../Redux/Slicer/todoSlicer';

function TodosList() {

    const todos = useSelector((state) =>state.todos)
    const dispatcher = useDispatch();

  return (
    <>
    <div>Todos list</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button 
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            type='text'
            onClick={()=>dispatcher(removeTodo(todo.id))}>
                 X remove to do 
            </button>
            </li>
        ))}
      </ul>
    </>
  )
}

export default TodosList