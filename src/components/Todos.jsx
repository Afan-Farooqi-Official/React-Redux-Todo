import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {

    // Fetch todos from the Redux store
    const todos = useSelector(state => state.todos)
    // Get the dispatch function/ runing actions/functionality
    // to change the state in the Redux store
    const dispatch = useDispatch()

    return (
        <>
        <div className="text-xl font-semibold text-white mb-4">Todos</div>
        <ul className='list-none'>
            {/* Map through the todos and display them */}
            {todos.map((todo) => (
                <li 
                    className='flex items-center justify-between bg-white/20 px-3 py-2 rounded-lg mb-2'
                    key={todo.id}
                >
                    <div className='text-white'>{todo.title}</div>
                    <div className='flex items-center gap-x-5'>
                    <button
                        onClick={() => dispatch(removeTodo({ id: todo.id }))}
                        className='text-red-500 hover:text-red-700'
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {/* path for the delete icon */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                    <button
                        onClick={() => dispatch(updateTodo({ id: todo.id, title: prompt("Update Todo", todo.title) || todo.title }))}
                        className='text-blue-500 hover:text-blue-800'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </button>
                    </div>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Todos
