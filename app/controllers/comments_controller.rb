class CommentsController < ApplicationController

  def index
    comments = Comment.all
    render json: CommentSerializer.new(comments)
  end

  def create
    comment = Comment.new(comment_params)
         if comment.save
             render json: CommentSerializer.new(comment)
         else
             render json: {error: "could not save"}
         end
     end

  def show
    comment = Comment.find(params[:id])
    render json: comment.to_json(except: [:created_at, :updated_at])
  end

  def update
      comment = Comment.find(params[:id])
      if comment.update(comment_params)
          render json: CommentSerializer.new(comment)
      else
          render json: {error: "could not save"}
      end
  end

  def destroy
      comment = Comment.find(params[:id])
      comment.destroy
      render json: {comment: "successfully deleted #{comment.detail}"}
  end

  private
  def comment_params
      params.require(:comment)
  end
  
end
