class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.boolean :display_on_map, :default => true
      t.with_options :precision => 15, :scale => 10 do |c|
        c.decimal :latitude
        c.decimal :longitude
      end

      t.timestamps null: false
    end
  end
end
