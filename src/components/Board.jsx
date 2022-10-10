import { useState, useEffect } from "react";
import  { DragDropContext, Droppable } from 'react-beautiful-dnd';
import board_data from "../data";
import Column from "./Column";

function Board (props){

    const initialData = {tasks: {}, columns: {}, columnOrder: []};
    const [board, setBoard] = useState(initialData);

    useEffect(function(){
        setBoard(board_data)}, []);

    // async function fetchBoard() {
    //     const response = await fetch('/board');
    //     const data = await response;
    //     console.log(data);
    //     return data;
    // }

    function onDragEnd(result){
        const {destination, source, draggableId, type} = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index){
            return;
        }

        if (type === 'column'){
            const newColumnOrder = Array.from(board.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            setBoard((prevValue) => {
                return {...prevValue, columnOrder: newColumnOrder,}
            })

            return;
        }
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
            </section>
            )}
        </Droppable>
    </DragDropContext>
   )
};

export default Board;