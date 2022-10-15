import { useState, useEffect } from "react";
import  { DragDropContext, Droppable } from 'react-beautiful-dnd';
import {board_data} from "../data";
import AddColumn from "./AddColumn";
import Column from "./Column";

function Board (props){

    const initialData = {tasks: {}, columns: {}, columnOrder: []};
    const [board, setBoard] = useState(initialData);

    useEffect(() => {
        setBoard(board_data)}, []);

    // async function fetchBoard() {
    //     const response = await fetch('/board');
    //     const data = await response;
    //     console.log(data);
    //     return data;
    // }

    function onDragEnd(result){
        const {destination, source, draggableId, type} = result;
        // if there is no changes then so be it (nothing changes returns nothing)
        if (!destination) {
            return;
        }
        // if they pick and drop on the same place then so be it
        if (destination.droppableId === source.droppableId && destination.index === source.index){
            return;
        }
        // if there is column being swap this task will trigger
        if (type === 'column'){
            const newColumnOrder = Array.from(board.columnOrder); // copy from original column sequences
            newColumnOrder.splice(source.index, 1); // based on the source of the column dragged, deletes its original position
            newColumnOrder.splice(destination.index, 0, draggableId); // then add its to the new location index. Refer Array.splice method

            // now set the column order to the new order created.
            setBoard({
                ...board,
                columnOrder: newColumnOrder,
            })

            return;
        }
        
        // rearrange the task ids for each column that changed
        const start = board.columns[source.droppableId]; // started column (the original location of column of task that get to be moved)
        const finish = board.columns[destination.droppableId]; // the finish location column (final location of column of task that dragged)
        
        // check up if the task moved on the same column or moved to the other
        if (start === finish){
            const newTaskIds = Array.from(start.taskIds)
            newTaskIds.splice(source.index,1);
            newTaskIds.splice(destination.index,0,draggableId)

            const newColumn = {
                ...start,
                taskIds: newTaskIds
            }

            setBoard({
                ...board,
                columns: {
                    ...board.columns,
                    [newColumn.id]: newColumn
                }
            });

            return;
        }

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStartColumn = {
            ...start,
            taskIds: startTaskIds
        }

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinishColumn = {
            ...finish,
            taskIds: finishTaskIds
        }

        setBoard({
            ...board,
            columns: {
                ...board.columns,
                [newStartColumn.id]: newStartColumn,
                [newFinishColumn.id]: newFinishColumn
            }
        });
        
    };

   return (
    <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {provided => (
            <section className="m-10 flex" {...provided.droppableProps} ref={provided.innerRef}>
                {board.columnOrder.map((columnId, index) => {
                    const column = board.columns[columnId];
                    const tasks = column.taskIds.map(taskIds => board.tasks[taskIds]);
                    return (
                        <Column key={column.id} column={column} tasks={tasks} index={index} board={board} setBoard={setBoard}/>
                    )
                })}
            {provided.placeholder}
            <AddColumn board={board} setBoard={setBoard}/>
            </section>
            )}
        </Droppable>
    </DragDropContext>
   )
};

export default Board;