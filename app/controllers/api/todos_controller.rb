class Api::TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  def show
    render json: Todo.find(params[:id])
  end

  def create

    render json: Todo.create!(todo_params)
  end

  def update
    todo = Todo.find(params[:id])

    render json: todo.update!(todo_params)
  end

  def destroy
    todo = Todo.find(params[:id])
    render json: todo.destroy!
  end

  private

  def todo_params
    temp_params = params.permit(:title, :body, :done, :id)
    if temp_params['done'] == 'false'
      temp_params['done'] = false
    elsif temp_params['done']
      temp_params['done'] = true
    end
    temp_params
  end

end
