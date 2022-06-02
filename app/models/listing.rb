class Listing < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :address, presence: true
    validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
end