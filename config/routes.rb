Rails.application.routes.draw do
  
  resources :listing, :review, :user
  post "/login", to: "session#create"
  post "/signup", to: "user#create"
  delete "/logout", to: "session#destroy"
  get "/me", to: "user#show"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end

