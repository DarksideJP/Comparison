require 'test_helper'

class ComparesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get compares_index_url
    assert_response :success
  end

  test "should get show" do
    get compares_show_url
    assert_response :success
  end

  test "should get new" do
    get compares_new_url
    assert_response :success
  end

  test "should get edit" do
    get compares_edit_url
    assert_response :success
  end

end
