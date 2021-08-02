import React from 'react'

function CommentCard(props){

    return(
        <div className="card" id={`comment-${props.id}`}>
           <ul>
            <li>{props.comment.post}</li>
          </ul>
            
        </div>
    )
}

export default CommentCard
