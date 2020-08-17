class CreateLessons < ActiveRecord::Migration[6.0]
  def change
    create_table :lessons do |t|
      t.string "name"
      t.boolean "completed"
    end
  end
end
