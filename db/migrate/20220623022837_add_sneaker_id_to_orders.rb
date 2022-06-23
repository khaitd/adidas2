class AddSneakerIdToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :sneaker_id, :integer
  end
end
