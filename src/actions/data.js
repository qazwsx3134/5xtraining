
//Action

//ADD_DATA

export const addData = (data
)=>({
    type: 'ADD_DATA',
    data
});
//REMOVE_DATA

export const removeData = ( //argu只需要提供ID 故
    {id} = {}
)=>({
    type: 'REMOVE_DATA',
    id
});
//EDIT_DATA
export const editData = (id, updates)=>({
    type: 'EDIT_DATA' ,
    id,
    updates
})
