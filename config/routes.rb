Rails.application.routes.draw do
  get 'users/show'
  get 'users/edit'
	resources :compares
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
