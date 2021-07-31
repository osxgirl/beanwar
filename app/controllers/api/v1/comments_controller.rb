class Api::V1::CommentsController < Api::V1::BaseController
     before_action :set_comment, only: [:show, :edit, :update, :destroy]

        def index
           comments = Comment.all
           render json: comments
        end

        def create
          respond_with :api, :v1, Comment.create(comment_params)
        end

        def destroy
          respond_with Comment.destroy(params[:id])
        end

        def update
          comment = Comment.find(params["id"])
          comment.update_attributes(comment_params)
          respond_with comment, json: comment
        end

        private

        def comment_params
          params.require(:comment)
        end
      end
