class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
  end

  def search
  end

  def barcode
    @url = set_url
  end

  def query
    @url = set_url
  end

  def logsedit
    @url = set_url
    @books = Book.where(user: current_user, status: 0).order(:updated_at).paginate(page: params[:page], per_page: 10)
  end

  def bookmarks
    @url = set_url
    @books = Book.where(user: current_user, status: 1).order(:updated_at).paginate(page: params[:page], per_page: 10)
  end

  private

  def set_url
    if Rails.env.production?
      return url = "https://library-passbook.herokuapp.com"
    elsif Rails.env.development?
      return url = "http://localhost:3000"
    end
  end


end
