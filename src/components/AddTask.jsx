import { useState } from "react";

function AddTask(props){
    const [newTaskButton, setNewTaskButton] = useState(true);
    const [value, setValue] = useState('');

    function handleChange(event){
        const {value} = event.target;
        setValue(value)
    };

    function handleInputChange(event){
        setNewTaskButton(true);
        addNewTask(props.columnId, value)
        setValue('');
    };

    function addNewTask(columnId, content){
        const newTaskId = "task-" + Math.floor(Math.random() * 10000000);
        const column = props.board.columns[columnId];
        const newTaskIds = Array.from(column.tasksIds);
        newTaskIds.push(newTaskId)
    }

    return (
        <div>
            {newTaskButton ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setNewTaskButton(false)}>
                Add
            </button>: <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        type="text" value={value} onChange={handleChange} onBlur={handleInputChange}/>}
        </div>
    )
}

export default AddTask;