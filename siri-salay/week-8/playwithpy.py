from random import shuffle

# a list of state dictionaries
states = [
{
    "name": "Washington",
    "capital": "Olympia"
}, {
    "name": "West Virginia",
    "capital": "Charleston"
}, {
    "name": "Wisconsin",
    "capital": "Madison"
}, {
    "name": "Wyoming",
    "capital": "Cheyenne"
}]

print("Hey friend! Welcome to the state capitals game!")

for state in states:
    state["correct"] = 0
    state["wrong"] = 0

def play_game():
    shuffle(states)

    for state in states:
        capital_guess = input("What is the capital of " + state["name"] + "? ")

        if capital_guess == state["capital"]:
            print("Congrats! That was correct")
            state["correct"] += 1
        else:
            print("Oops that wasn't right...")
            state["wrong"] += 1
        print("Your score for {} is...".format(state["name"]))
        print("Correct: {}".format(state["correct"]))
        print("Wrong: {}".format(state["wrong"]))

    play_again = input("Would you like to play again? (y/n)")
    if play_again == "y":
        return play_game()
    else:
        print("See you next time")
        return

play_game()

print(states)

print(states[0][])

