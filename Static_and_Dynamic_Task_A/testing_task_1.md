### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end
# The method has been written in an inconsistent camel case instead of snake case. The correct definition would be: check_for_ace(card). card.value should have a double equals sign after it.


  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end
# the definition for this method has been misspelt and there is a missing comma between the first and second parameters. It should be def hightest_card(card1, card2). The final end is incorrect as it closes the class. The method .name does not exist in the card class, therefore it won't return anything.

def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end
# the variable 'total' has not been defined before being called in the for loop, meaning that there may be a string / integer issue present. It should be set to 0. The return statement has incorrect syntax and the variable 'total' has not been put inside a string interpolation marker, therefore the result will be only the words within quotes. The correct syntax would be "You have a total of #{total}". The return should be called outside of the loop in order for the actual total of all cards to be displayed.

```
