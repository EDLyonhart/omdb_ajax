Rails.application.routes.draw do
resources :movies

  root 'movies#index'

  get 'movies/search'

  get 'movies/create'

end