class CreateCompares < ActiveRecord::Migration[5.2]
  def change
    create_table :compares do |t|
      t.string :title
      t.string :subject1
      t.integer :subject1_date
      t.string :subject2
      t.string :subject2_date
      t.string :integer
      t.integer :user_id

      t.timestamps
    end
  end
end
