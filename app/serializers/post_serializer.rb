class PostsSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :experience_id, :comment
  has_one :user, serializer: UserSerializer
  has_one :experience

  # def find_user
  #   user = User.find_by(params[:user_id])
    
  # end
end
