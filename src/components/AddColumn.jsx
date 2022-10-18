import { useState } from "react"
import { MdOutlineAddBox } from 'react-icons/md'

function AddColumn(props) {

    const [newColButton, setNewColButton] = useState(true);
    const [value, setValue] = useState('');

    function handleChange(event){
        const {value} = event.target;
        setValue(value);
    };

    function handleInputChange(){
        setNewColButton(true);
        addNewColumn(value);
        setValue('');
    };

    function addNewColumn(title){
        const newColumnId = "column" + Math.floor(Math.random() * 10000000);
        const newColumnOrder = Array.from(props.board.columnOrder);
        newColumnOrder.push(newColumnId)

        const newColumn = {
            id: newColumnId,
            title: title,
            taskIds: []
        };

        props.setBoard({
            ...props.board,
            columns: {
                ...props.board.columns,
                [newColumnId]: newColumn
            },
            columnOrder: newColumnOrder
        })
    }
    return (
        <div className="border-2 border-slate-300 dark:border-slate-700 dark:bg-slate-800 m-2 rounded-xl w-52 flex flex-col justify-center items-center p-2">
            {newColButton ?
            <button onClick={() => setNewColButton(false)}>
                <MdOutlineAddBox className=" text-6xl text-blue-500 hover:text-blue-800 dark:text-gray-500 dark:hover:text-cyan-500 rounded-full"  />
            </button>
            : <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        type="text" value={value} onChange={handleChange} onBlur={handleInputChange} onKeyDown={({key}) => {
                            if (key === 'Enter'){
                                return handleInputChange();
                            }
                        }} /> }
        </div>
    )
}

export default AddColumn;