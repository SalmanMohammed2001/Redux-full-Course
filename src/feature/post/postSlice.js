import {createSlice} from "@reduxjs/toolkit";


const initialState=[
    {
        id:'1',
        title:'Learning Redux Toolkit',
        content:"It's easy"
    },
    {
        id:'2',
        title:'Learning Java',
        content:"It's hard"
    }
]

export const postSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded:(state,action)=>{
            state.push(action.payload)
        }

    }
})



export  const  selectAllPost=(state)=>state.posts

export const {postAdded}=postSlice.actions
export  default  postSlice.reducer