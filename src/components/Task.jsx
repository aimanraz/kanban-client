import { Draggable } from "react-beautiful-dnd";

function Task (props){

    function deleteTask(columnId, index, taskId){
        // to remove the task from taskIds in related column
        const column = props.board.columns[columnId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(index, 1);

        // to remove the task from general tasks in board_data
        const tasks = props.board.tasks;
        const {[taskId]: oldTask, ...newTasks} = tasks;

        props.setBoard({
            ...props.board,
            tasks: {
                ...newTasks
            },
            columns: {
                ...props.board.columns,
                [columnId]: {
                    ...column,
                    taskIds: newTaskIds
                }
            }
        })

    };

    return (
        <Draggable  draggableId={props.task.id} index={props.index}>
            {provided => (
            <div className=" border dark:border-slate-700 rounded-md p-2 mb-2 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-white" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <p className="font-small">
                    {props.task.content}
                </p>
            </div>
            )}
        </Draggable>
    )
}

export default Task;