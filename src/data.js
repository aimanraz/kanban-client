const board_data = {
    tasks: {
        task1: {id: 'task1', content: 'create video'},
        task2: {id: 'task2', content: 'edit video'},
        task3: {id: 'task3', content: 'publish video'},
    },
    columns: {
        column1: {
            id: 'column1',
            title: 'To do',
            taskIds: ['task2', 'task3']
        },
        column2: {
            id: 'column2',
            title: 'Done',
            taskIds: ['task1']
        }
    },
    columnOrder: ['column1', 'column2']
}

export default board_data;