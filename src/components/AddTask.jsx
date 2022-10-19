import { useState } from "react";
import { MdOutlineAddBox } from 'react-icons/md'
function AddTask(props){
    const [newTaskButton, setNewTaskButton] = useState(true);
    const [value, setValue] = useState('');

    function handleChange(event){
        const {value} = event.target;
        setValue(value)
    };

    function handleInputChange(){
        setNewTaskButton(true);
        addNewTask(props.columnId, value);
        setValue('');
    };
    
    function addNewTask(columnId, content){
        const newTaskId = "task-" + Math.floor(Math.random() * 10000000);
        const column = props.board.columns[columnId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.push(newTaskId)

        const newTask = {
            id: newTaskId,
            content: content
        };

        props.setBoard({
            ...props.board,
            tasks: {
                ...props.board.tasks,
                [newTaskId]: newTask
            },
            columns: {
                ...props.board.columns,
                [columnId]: {
                    ...props.board.columns[columnId],
                    taskIds: newTaskIds
                }
            }
        })
    }



    return (
        <div>
            {
            newTaskButton ? <button
            onClick={() => setNewTaskButton(false)}>
                <MdOutlineAddBox className="text-4xl transition-colors hover:delay-75 text-blue-500 hover:text-blue-700 dark:text-gray-500 dark:hover:text-cyan-500"/>
            </button>: 
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
                        type="text" value={value} onChange={handleChange} onBlur={handleInputChange}/>
            }
        </div>
    )
}

export default AddTask;