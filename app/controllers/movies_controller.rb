class MoviesController < ApplicationController
  def index
    search_for_movie = params[:search_for_movie]
    @search_for_movie = search_for_movie
    @request = Typhoeus::Request.new(
      "http://www.omdbapi.com/",
      method: :get,
      params: {s: search_for_movie, title: "movie"}
    )
    @request.run
    @response = JSON.parse @request.response.body 
    puts @response
  end
end