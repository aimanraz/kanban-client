import Task from "./Task";
import AddTask from "./AddTask";
import { Draggable, Droppable } from "react-beautiful-dnd";

function Column (props){

    function deleteColumn(columnId, index){
        const columnTasks = props.board.columns[columnId].taskIds; // get all of the old column tasks

        // this will remove any task that related to the deleted column later
        const finalTasks = columnTasks.reduce((prevValue,currValue) => {
            const {[currValue]: oldTasks, ...newTask} = prevValue;
            return newTask;
        }, props.board.tasks)

        const columns = props.board.columns;
        const {[columnId]: oldColumn, ...newColumns} = columns; // separate the removed column with still in use column

        const newColumnOrder = Array.from(props.board.columnOrder);
        newColumnOrder.splice(index, 1);

        props.setBoard({
            tasks: {...finalTasks},
            columns: {...newColumns},
            columnOrder: [...newColumnOrder]
        });

    };

    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            { provided => (
            <div className="border-2 border-slate-300 dark:border-slate-700 dark:bg-slate-800 m-2 rounded-xl w-52 flex flex-col text-center p-2 relative" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                <h1 className=" mt-5 mb-5 font-bold dark:text-cyan-400">{props.column.title}</h1>
                <button className=" absolute right-2 top-2 text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 rounded text-sm px-2 pb-1 text-center"
                onClick={() => deleteColumn(props.column.id, props.index)}>x</button>
                <Droppable droppableId={props.column.id} type='task'>
                    { provided => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {props.tasks.map((task, index) => {
                            return <Task key={task.id} task={task} index={index} columnId={props.column.id} board={props.board} setBoard={props.setBoard}/>
                        })}
                    {provided.placeholder}
                    <AddTask columnId={props.column.id} board={props.board} setBoard={props.setBoard}/>
                    </div>
                    )}
                </Droppable>
            </div>
            )}
        </Draggable>
    )
}

export default Column;