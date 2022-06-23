class OrdersController < ApplicationController
    def index
        render json: Order.all
    end

    

    def create
        order = Order.create(order_params)
        render json: order, status: :created
    end

    def show
        a = Order.find_by(id: params[:id])
       render json: a
    end


    def update
        order = Order.find_by(id:params[:id])
         
            order.update(order_params)
            render json: order
      
    end

     private
  
     def order_params
        params.permit(:sneaker_id)
     end


end
