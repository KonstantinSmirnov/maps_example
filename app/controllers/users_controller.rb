class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    respond_to do |format|
      if @user.save
        format.html { redirect_to root_path, notice: "User was successfully created." }
      else
        format.html { redirect_to root_path, notice: "User not created." }
      end
    end
  end


  private

    def user_params
      params.require(:user).permit(:name, :city, :latitude, :longitude)
    end
end
