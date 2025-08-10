import React from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        //then make it clean (for good practice)
        setInput('')
    }
    return (
        <form onSubmit={addTodoHandler} className="flex items-center justify-center ">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-10% border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5 m-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="rounded-lg px-5 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}

export default AddTodo
