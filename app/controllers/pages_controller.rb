class PagesController < ApplicationController
  def index
    @users = User.all
    @user = User.new
  end

  def about
  end
end
