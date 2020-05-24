class Api::V1::UsersController < ApplicationController

  def create
     user = User.new(user_params)
    if user.save
      render json: user.as_json
　　 else
      render json: { message: user.errors.full_messages.join(", ") }
　　 end
  end


  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
