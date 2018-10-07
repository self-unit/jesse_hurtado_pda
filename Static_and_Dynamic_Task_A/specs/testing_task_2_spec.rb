require('minitest/autorun')
require('minitest/rg')
require_relative('../testing_task_2.rb')
require_relative('../card.rb')

class TestingTask2Test < Minitest::Test

  def setup
    @ace_of_spades = Card.new("Spades", 1)
    @scabby_queen = Card.new("Clubs", 12)
    @eight_of_diamonds = Card.new("Diamonds", 8)
    @cards = [@ace_of_spades, @scabby_queen, @eight_of_diamonds]

    @card_game = CardGame.new
  end

  def test_check_for_ace
    assert_equal(true, @card_game.check_for_ace(@ace_of_spades))
  end

  def test_check_for_no_ace
    assert_equal(false, @card_game.check_for_ace(@scabby_queen))
  end

  def test_highest_card
    assert_equal(@scabby_queen, @card_game.highest_card(@scabby_queen, @eight_of_diamonds))
  end

  def test_cards_total
    assert_equal('You have a total of 21', CardGame.cards_total(@cards))
  end

end
