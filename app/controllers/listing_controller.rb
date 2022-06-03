class ListingController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    def index
        listings = Listing.all
        render json: listings
    end

    def show
        listing = find_listing
        render json: listing
    end

    def create
        listing = Listing.create!(listing_params)
        render json: listing, status: :created 
    end

    def update
        listing = find_listing
        listing.update!(listing_params)
        render json: listing
    end

    def destroy
        listing = find_listing
        listing.destroy
        head :no_content
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
    
    def find_listing
        Listing.find(params[:id])
    end

    def listing_params
        params.permit(:name, :image, :address, :price, :description)
    end

    def render_not_found_response
        render json: {error: "Listing not found"}, status: :not_found
    end
    
    def render_unprocessable_entity_response
        render json: {errors: "Invalid Listing entity"}, status: :unprocessable_entity
    end
end
