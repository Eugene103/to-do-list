import { createSlice } from "@reduxjs/toolkit";
import { addTasks, changeTask, delTask, fetchAlllists } from "./operations";

const tasksSlice = createSlice({
    name: 'tasks', 
    initialState: {
        tasks: [],
        isLoad: false,
      error: null,
  },
    extraReducers: (builder) => {
        builder.addCase(fetchAlllists.pending, (state, action) => {
        state.isLoad = true
    })
      .addCase(fetchAlllists.fulfilled, (state, action) => {
        state.error = null
        state.isLoad = false
        state.tasks = action.payload
      })
      .addCase(fetchAlllists.rejected, (state, action) => {
        state.isLoad = false
        state.error = action.payload
        alert(state.error)
      })
          .addCase(addTasks.pending, (state, action) => {
        state.isLoad = true
    })
          .addCase(addTasks.fulfilled, (state, action) => {
            state.isLoad = false
        state.tasks.push(action.payload)
      })
      .addCase(addTasks.rejected, (state,action) => {
        state.isLoad = false
        state.error = action.payload
        alert(state.error)
      })
          .addCase(delTask.pending, (state, action) => {
        state.isLoad = true
    })
          .addCase(delTask.fulfilled, (state, action) => {
      const index = state.tasks.findIndex(tasks => tasks._id === action.payload);
            state.tasks.splice(index, 1);
            state.isLoad = false
    })
          .addCase(delTask.rejected, (state, action) => {
        state.isLoad = false  
        state.error = action.payload
        alert(state.error)
          })
          .addCase(changeTask.pending, state => {
				state.isLoad = true;
				state.error = null;
			})
			.addCase(changeTask.fulfilled, (state, action) => {
				state.isLoad = false;
				state.tasks = state.tasks.map(task => {
					if (task._id === action.payload._id) return action.payload;
					return task;
				});
			})
			.addCase(changeTask.rejected, (state, action) => {
				state.isLoad = false;
				state.error = action.payload;
			})
    }
})

export const tasksReducer = tasksSlice.reducer;