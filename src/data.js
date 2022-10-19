export const board_data = {
    tasks: {
        task1: {id: 'task1', content: 'Hold the Column or task to drag in between them'},
        task2: {id: 'task2', content: 'Press + on empty column to add new Column'},
        task3: {id: 'task3', content: 'Press + inside column to add task'}
    },
    columns: {
        column1: {
            id: 'column1',
            title: 'New issues',
            taskIds: ['task2', 'task3']
        },
        column2: {
            id: 'column2',
            title: 'In Progress',
            taskIds: ['task1']
        },
        column3: {
            id: 'column3',
            title: 'In Review',
            taskIds: []
        },
        column4: {
            id: 'column4',
            title: 'Done',
            taskIds: []
        }
    },
    columnOrder: ['column1', 'column2', 'column3', 'column4']
}

;