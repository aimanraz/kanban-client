import { Draggable } from "react-beautiful-dnd";

function Task (props){
    return (
        <Draggable  draggableId={props.task.id} index={props.index}>
            {provided => (
            <div className=" border rounded-sm p-2 mb-2 bg-slate-200" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                {
                    props.task.content
                } 
            </div>
            )}
        </Draggable>
    )
}

export default Task;