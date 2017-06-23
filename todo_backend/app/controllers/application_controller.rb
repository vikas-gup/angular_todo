class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  # before_filter :cors_before_filter, :only => methods
  # Rails recommends to use :null_session for APIs
  protect_from_forgery with: :null_session, :only => methods
end
