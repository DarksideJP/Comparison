class ComparesController < ApplicationController
  def index
  end

  def show
  end

  def new
  	@compare = Compare.new
  end

  def create
  	@compare =Compare.new(compare_params)
  	@compare.save
  	redirect_to compares_path
  end

  def edit
  end

  private

def compare_params
	params.require(:compare).permit(:title, :item1, :item2, :item3, :item4, :item5, :item6, :subject1, :sub1_date1, :sub1_date2, :sub1_date3, :sub1_date4, :sub1_date5, :sub1_date6, :subject2, :sub2_date1, :sub2_date2, :sub2_date3, :sub2_date4, :sub2_date5, :sub2_date6, :user_id)
end
end
