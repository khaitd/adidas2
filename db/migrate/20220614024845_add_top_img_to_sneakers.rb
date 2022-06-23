class AddTopImgToSneakers < ActiveRecord::Migration[6.1]
  def change
    add_column :sneakers, :top_img, :string
  end
end
