export const board_data = {
    tasks: {
        task1: {id: 'task1', content: 'Hold the Column or task to drag in between them'},
        task2: {id: 'task2', content: 'Press + on empty column to add new Column'},
        task3: {id: 'task3', content: 'Press + inside column to add task'},
        task4: {id: 'task4', content: 'cloud migration'}
    },
    columns: {
        column1: {
            id: 'column1',
            title: 'New issues',
            taskIds: ['task2', 'task3']
        },
        column2: {
            id: 'column2',
            title: 'Product backlog',
            taskIds: ['task1']
        },
        column3: {
            id: 'column3',
            title: 'Sprint Backlog',
            taskIds: []
        },
        column4: {
            id: 'column4',
            title: 'In Progress',
            taskIds: ['task4']
        },
        column5: {
            id: 'column5',
            title: 'Review/QA',
            taskIds: []
        },
        column6: {
            id: 'column6',
            title: 'Done',
            taskIds: []
        }
    },
    columnOrder: ['column1', 'column2', 'column3', 'column4', 'column5', 'column6']
}

;