class ReviewController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = find_review
        render json: review
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created 
    end

    def update
        review = find_review
        review.update!(review_params)
        render json: review
    end

    def destroy
        review = find_review
        review.destroy
        head :no_content
    end

    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:description, :user_id, :listing_id)
    end

    def render_not_found_response
        render json: {error: "Review not found"}, status: :not_found
    end
    
    def render_unprocessable_entity_response
        render json: {errors: "Invalid Review entity"}, status: :unprocessable_entity
    end
end
