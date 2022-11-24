import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: localStorage.getItem('task')?JSON.parse(localStorage.getItem('task')):[],
    reducers: {
        addTask: (state, action) => {
            const task = {
                id: uuidv4(),
                title: action.payload.title,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate,
                hours: action.payload.hours,
                isCompleted: false
            };

            let tasks = [...state, task]

            localStorage.setItem('task', JSON.stringify(tasks));

            return tasks;
        },
        updateTask: (state, action) => {
            const { id, title, startDate, endDate, hours, isCompleted } = action.payload;

            let task = state.find((task) => task.id === id);
            task.title = title;
            task.startDate = startDate;
            task.endDate = endDate;
            task.hours = hours;
            task.isCompleted = isCompleted;
        },
        markComplete: (state, action) => {
            const { taskId } = action.payload;
            console.log()
            let tasks = state.map((task) => {
                if (task.id === taskId) {
                    return {...task, isCompleted: true};
                }
                return task;
            });

            console.log(tasks);
            console.log(taskId);

            localStorage.setItem('task', JSON.stringify(tasks));

            return tasks;
        },
        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload.taskId);
        },
    }
});

// this is for dispatch
export const { addTask, updateTask, markComplete, deleteTask } = taskSlice.actions;

// this is for configureStore
export default taskSlice.reducer;