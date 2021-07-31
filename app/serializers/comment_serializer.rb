class CommentSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :post
end
