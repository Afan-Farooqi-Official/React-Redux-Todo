import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {

    // Fetch todos from the Redux store
    const todos = useSelector(state => state.todos)
    // Get the dispatch function/ runing actions/functionality
    // to change the state in the Redux store
    const dispatch = useDispatch()

    return (
        <>
        <div>Todos</div>
        <ul className='list-none'>
            {/* Map through the todos and display them */}
            {todos.map((todo) => (
                <li 
                    className='flex justify-between items-center bg-white/20 px-3 py-2 rounded-lg mb-2'
                    key={todo.id}
                >
                    <div className='text-white'>{todo.title}</div>
                    <button
                        onClick={() => dispatch(removeTodo({ id: todo.id }))}
                        className='text-red-500 hover:text-red-700'
                    >
                        <svg
                            xmlns=""
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Todos
