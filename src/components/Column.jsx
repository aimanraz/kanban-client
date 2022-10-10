import Task from "./Task";
import AddTask from "./AddTask";
import { Draggable, Droppable } from "react-beautiful-dnd";

function Column (props){
    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            { provided => (
            <div className="border-2 border-slate-500 m-2 rounded-sm w-52 flex flex-col text-center p-2"  {...provided.draggableProps} ref={provided.innerRef}>
                <h1 className=" mt-2 mb-4" {...provided.dragHandleProps}>{props.column.title}</h1>
                <Droppable droppableId={props.column.id} type='task'>
                    { provided => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {props.tasks.map((task, index) => {
                            return <Task key={task.id} task={task} index={index} columnId={props.column.id} />
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