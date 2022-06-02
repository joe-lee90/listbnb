class Review < ApplicationRecord
    belongs_to :user
    belongs_to :listing

    validates :description, presence: true
end
