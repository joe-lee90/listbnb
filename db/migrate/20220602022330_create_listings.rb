class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :name
      t.string :image
      t.string :address
      t.integer :price
      t.string :description

      t.timestamps
    end
  end
end
