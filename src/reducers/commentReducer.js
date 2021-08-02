const commentReducer = (state = { comments: [], loading: false }, action) => {
    switch(action.type){
        case "GOT_COMMENTS":
            console.log("E")
            return {...state, comments: action.payload, loading: true}
        case "ADDED_COMMENTS":
            return { ...state, comments: [...state.comments, action.payload] }
        case "REMOVE_COMMENT":
            return { ...state, comments: [...state.comments, action.payload] }
        case "LOADING":
            return  {...state, loading: false }
        default:
            return state
    }
}

export default commentReducer
