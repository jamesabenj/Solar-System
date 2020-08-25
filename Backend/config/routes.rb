Rails.application.routes.draw do
  resources :users
  resources :lessons do
    resources :questions
  end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
