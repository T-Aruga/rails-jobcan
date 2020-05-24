Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :hello, only:[:index]
    end
  end

  post 'auth/login', to: 'users#login'
end
