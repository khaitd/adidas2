Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :sneakers, only: [:index, :show]

  resources :orders, only: [:index, :show, :create, :update]
  


end
