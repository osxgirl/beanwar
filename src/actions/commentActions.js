const url = "http://localhost:3000/api/v1/comments"

export const addComment = (comment) => ({ type: "ADDED_COMMENT", payload: comment });
export const setComments = (comments) => ({type: "GOT_COMMENTS", payload: comments});


export const fetchComments = () => {
    return (dispatch) => {
            dispatch({type: "LOADING"})
            fetch(url)
            .then(res => res.json())
            .then(json => {
                dispatch(setComments(json))
                console.log("F")
            })
            console.log("C")
        }
    }

export const createComment = (comment) => {
   return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(comment)
        }
        fetch(url, configObj)
        .then(res => res.json())
        .then(json => {
            dispatch(addComment(json))
        })
    }
}

