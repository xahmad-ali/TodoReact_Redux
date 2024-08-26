import { createSlice, nanoid } from '@reduxjs/toolkit'


// This is initail state of todo 
// Here todos is array of objects
const initialState ={
    todos: [{id:1, text: "initial todo"}]
}


/*
const test_reducer=()=>{
    console.log("HI there")
} */

//This part contains name (which is a predefined parameter of redux), intial state, and 
// Reucers (Reducers are the functions through which the value of variabel(state) changes 
export const todoSlice = createSlice({
    name:"Todos",
    initialState,
    reducers:{
       /* addTodo: test_reducer  //here i am creating function test_reducer which is used as refernce to
       a reducer's function*/

       /*state is the current state for example here state is todos
         action is the value that is passed and prameter of a function */
       addTodo: (state,action)=>{
        const todo={
            id:nanoid(),
            text: action.payload
        }
        state.todos.push(todo)
       },

       removeTodo: (state,action)=>{
        state.todos = state.todos.filter((todo) => todo.id !== action.payload )
       },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer