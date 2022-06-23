class SneakersController < ApplicationController

    def index
        render json: Sneaker.all
    end

    def show
          a = Sneaker.find_by(id: params[:id])
        render json: a
    end
end
