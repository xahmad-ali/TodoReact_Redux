import React, { useState } from "react";
import { addTodo } from "../Redux/Slicer/todoSlicer";
import {useDispatch } from "react-redux"

function AddTodo() {

  const [value, setValue] = useState("")
  const dispatcher =useDispatch()

  const handleAdd=(e)=>{
    e.preventDefault()
    dispatcher(addTodo(value))
    setValue('')
  }

  return (
    <form onSubmit={handleAdd} className="space-x-3 mt-12" >
      <input
        className='className="bg-gray-800 rounded border border-gray-700 
        focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base 
        outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        type="text"
        value={value}
        placeholder="Description here..."
        onChange={(e) => setValue(e.target.value)}
      />

      <button
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        // here button is wrapped in form so it does'nt need onClick //
        type="submit"
      >
        Add todo +
      </button>
    </form>
  );
}

export default AddTodo;
