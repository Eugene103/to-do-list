import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = `http://localhost:3000/api/`

export const fetchAlllists = createAsyncThunk('tasks/fetchAll', async (_, thunkAPI) => {
    try {
         const res = await axios.get(`tasks/`)
    return res.data
    } catch ({res}) {
            return thunkAPI.rejectWithValue(res?.data.message);
    }
})
export const addTasks = createAsyncThunk('tasks/add', async (text, thunkAPI) => {
    try {
        const res = await axios.post('tasks/', { text, date: Date.now() })
        return res.data
    } catch ({res}) {
         return thunkAPI.rejectWithValue(res?.data.message);
    }
})
export const delTask = createAsyncThunk('tasks/remove', async (_id, thunkAPI) => {
    try {
       await axios.delete(`tasks/${_id}`)
        return _id
    } catch ({res}) {
        return thunkAPI.rejectWithValue(res?.data.message);
    }
})
export const changeTask = createAsyncThunk(
	'tasks/change',
	async ({ text, id }, thunkAPI) => {
		try {
			const res = await axios.put(`tasks/${id}`, { text });
			return res.data
		} catch ({res}) {
			return thunkAPI.rejectWithValue(res?.data.message);
		}
	}
)