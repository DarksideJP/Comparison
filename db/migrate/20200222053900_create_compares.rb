class CreateCompares < ActiveRecord::Migration[5.2]
  def change
    create_table :compares do |t|
      t.string :title
      t.string :item1
      t.string :item2
      t.string :item3
      t.string :item4
      t.string :item5
      t.string :item6
      t.string :subject1
      t.integer :sub1_data1
      t.integer :sub1_data2
      t.integer :sub1_data3
      t.integer :sub1_data4
      t.integer :sub1_data5
      t.integer :sub1_data6
      t.string :subject2
      t.integer :sub2_data1
      t.integer :sub2_data2
      t.integer :sub2_data3
      t.integer :sub2_data4
      t.integer :sub2_data5
      t.integer :sub2_data6
      t.integer :user_id
      t.timestamps
    end
  end
end
