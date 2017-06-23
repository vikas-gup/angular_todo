class CreateTodoTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :todo_tasks do |t|
    	t.string :title
    	t.text :description
    	t.string :status
    	t.timestamps
    end
  end
end
