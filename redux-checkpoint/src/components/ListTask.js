import React from 'react'
import Task from './Task'

import {useSelector} from 'react-redux'
const ListTask = () => {
    const todo = useSelector(state => state.todo)
    return (
        <div className="list-tasks">
          
          {todo.map(todo => (
                <Task key={todo.id} todo={todo} />
            
            ))}
          
          
        </div>
    )
}
export default ListTask;
