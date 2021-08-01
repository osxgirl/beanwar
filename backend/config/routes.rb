Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :comments, only: [:index, :create, :destroy, :update]
      
      get 'comments', to: 'comments#index'
    end
  end
end
