import CommentCard from '../components/CommentCard'
import React from 'react'
import CommentForm from '../components/CommentForm'


const url ="http://localhost:3000/api/v1/comments"

class CommentsContainer extends React.Component{
   
    state = {
        comments: [],
        search: ""
    }

    addComment = (commentData) => {
        this.setState((prevState, prevProps ) => {
            return {
                comments: [...prevState.comments, commentData]
            }
        })
    }


    makeCommentCards(){
        let displayedComments = this.state.comments
        console.log(this.state.search)
       
        return displayedComments.map(comment => <CommentCard comment={comment} />)
       
    }

    componentDidMount(){
      
      fetch(url)
      .then(res => res.json())
      .then(json => {
          console.log(json)
         
         this.setState({
             comments: json
         })
      })
    }

    handleInputChange = (e) => {
        const search = e.target.value
        this.setState({search: search})
    }


    render(){
        return(
            <div id="comment-container">
        
                <div>
                    <CommentForm addComment={this.addComment}/>
                    <br></br>
                </div>
                
               {this.makeCommentCards()}
            </div>
        )
    }
}

export default CommentsContainer
