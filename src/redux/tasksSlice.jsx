import {createSlice} from "@reduxjs/toolkit";

export const tasksSlice = createSlice({

    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            let randomId = (Math.random() + 1).toString(36).substring(7);
            const newTask = {
                id: randomId,
                name: action.payload.task
            }
            console.log(newTask);
            state.push(newTask);
        },
        deleteTask: (state, action)=> {
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
});


export const {addTask, deleteTask} = tasksSlice.actions;
export default tasksSlice.reducer;