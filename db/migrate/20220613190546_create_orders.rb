class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :total_price
      t.integer :user_id
      t.boolean :complete

      t.timestamps
    end
  end
end
