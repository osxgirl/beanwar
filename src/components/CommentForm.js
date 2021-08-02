import React from 'react'
import uuid from 'uuid';
import {connect} from 'react-redux'
import {createComment} from '../actions/commentActions'


class CommentForm extends React.Component{

    state = {
        id: uuid(),
        post: [],
    }

    handleInputChange = (event) => {
        const post = event.target.post
        const value = event.target.value

        this.setState({
            [post]: value
        }, () => console.log(this.state))
    }

    handleSubmit = (event) => {
        event.preventDefault()
       
        const comment = {...this.state}
        
        this.props.createComment(comment)
        this.setState({post: "", id: uuid()})
    }
    updatePost(event) {
       this.setState({
         post: event.target.value
       });
     }
    render(){
        return(
           <div>
            <form onSubmit={this.handleSubmit}>
                <label>
               <input post='post' type="text" placeholder=":)" value={this.state.post}  onChange={this.updatePost.bind(this)} />
               </label>
               <input type="submit" value="Add Post" />
            </form>
          </div>
        )
    }
}

export default connect(null, {createComment})(CommentForm)
