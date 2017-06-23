class TodoTasksController < ApplicationController
  before_action :set_todo_task, only: [:show, :edit, :update, :destroy]

  # GET /todo_tasks
  # GET /todo_tasks.json
  def index
    @todo_tasks = TodoTask.all
    render json: @todo_tasks, status: :ok
  end

  # GET /todo_tasks/1
  # GET /todo_tasks/1.json
  def show
  end

  # GET /todo_tasks/new
  def new
    @todo_task = TodoTask.new
  end

  # GET /todo_tasks/1/edit
  def edit
  end

  # POST /todo_tasks
  # POST /todo_tasks.json
  def create
    params = JSON.parse(todo_task_params)
    @todo_task = TodoTask.new(params)
    if @todo_task.save
      render json: @todo_task, status: :created
    else
      render json: @todo_task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todo_tasks/1
  # PATCH/PUT /todo_tasks/1.json
  def update
    respond_to do |format|
      if @todo_task.update(todo_task_params)
        format.html { redirect_to @todo_task, notice: 'Todo task was successfully updated.' }
        format.json { render :show, status: :ok, location: @todo_task }
      else
        format.html { render :edit }
        format.json { render json: @todo_task.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /todo_tasks/1
  # DELETE /todo_tasks/1.json
  def destroy
    @todo_task.destroy
    @todo_tasks = TodoTask.all
    render json: @todo_tasks, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo_task
      @todo_task = TodoTask.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def todo_task_params
      params.fetch(:todo_task, {})
    end
end
