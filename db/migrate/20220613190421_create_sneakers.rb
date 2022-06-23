class CreateSneakers < ActiveRecord::Migration[6.1]
  def change
    create_table :sneakers do |t|
      t.string :name
      t.integer :price
      t.float :size
      t.string :category
      t.string :color
      t.integer :order_id
      t.string :img

      t.timestamps
    end
  end
end
