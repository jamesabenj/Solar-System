class QuestionsController < ApplicationController
    def index
        @lesson = Lesson.find(params[:lesson_id])
        render json: @lesson.questions
    end 

    def show
        @question = Question.find(params[:id])
        render json: @question
    end 
end 