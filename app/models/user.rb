class User < ActiveRecord::Base
  validates :name, presence: :true
  validates :city, presence: :true
  validates :latitude, presence: :true
  validates :longitude, presence: :true
end
