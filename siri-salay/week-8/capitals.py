states = [
{
    "name": "Alabama",
    "capital": "Montgomery"
}, {
    "name": "Alaska",
    "capital": "Juneau"
}, {
    "name": "Arizona",
    "capital": "Phoenix"
}, {
    "name": "Arkansas",
    "capital": "Little Rock"
}, {
    "name": "California",
    "capital": "Sacramento"
# }, {
#     "name": "Colorado",
#     "capital": "Denver"
# }, {
#     "name": "Connecticut",
#     "capital": "Hartford"
# }, {
#     "name": "Delaware",
#     "capital": "Dover"
# }, {
#     "name": "Florida",
#     "capital": "Tallahassee"
# }, {
#     "name": "Georgia",
#     "capital": "Atlanta"
# }, {
#     "name": "Hawaii",
#     "capital": "Honolulu"
# }, {
#     "name": "Idaho",
#     "capital": "Boise"
# }, {
#     "name": "Illinois",
#     "capital": "Springfield"
# }, {
#     "name": "Indiana",
#     "capital": "Indianapolis"
# }, {
#     "name": "Iowa",
#     "capital": "Des Moines"
# }, {
#     "name": "Kansas",
#     "capital": "Topeka"
# }, {
#     "name": "Kentucky",
#     "capital": "Frankfort"
# }, {
#     "name": "Louisiana",
#     "capital": "Baton Rouge"
# }, {
#     "name": "Maine",
#     "capital": "Augusta"
# }, {
#     "name": "Maryland",
#     "capital": "Annapolis"
# }, {
#     "name": "Massachusetts",
#     "capital": "Boston"
# }, {
#     "name": "Michigan",
#     "capital": "Lansing"
# }, {
#     "name": "Minnesota",
#     "capital": "St. Paul"
# }, {
#     "name": "Mississippi",
#     "capital": "Jackson"
# }, {
#     "name": "Missouri",
#     "capital": "Jefferson City"
# }, {
#     "name": "Montana",
#     "capital": "Helena"
# }, {
#     "name": "Nebraska",
#     "capital": "Lincoln"
# }, {
#     "name": "Nevada",
#     "capital": "Carson City"
# }, {
#     "name": "New Hampshire",
#     "capital": "Concord"
# }, {
#     "name": "New Jersey",
#     "capital": "Trenton"
# }, {
#     "name": "New Mexico",
#     "capital": "Santa Fe"
# }, {
#     "name": "New York",
#     "capital": "Albany"
# }, {
#     "name": "North Carolina",
#     "capital": "Raleigh"
# }, {
#     "name": "North Dakota",
#     "capital": "Bismarck"
# }, {
#     "name": "Ohio",
#     "capital": "Columbus"
# }, {
#     "name": "Oklahoma",
#     "capital": "Oklahoma City"
# }, {
#     "name": "Oregon",
#     "capital": "Salem"
# }, {
#     "name": "Pennsylvania",
#     "capital": "Harrisburg"
# }, {
#     "name": "Rhode Island",
#     "capital": "Providence"
# }, {
#     "name": "South Carolina",
#     "capital": "Columbia"
# }, {
#     "name": "South Dakota",
#     "capital": "Pierre"
# }, {
#     "name": "Tennessee",
#     "capital": "Nashville"
# }, {
#     "name": "Texas",
#     "capital": "Austin"
# }, {
#     "name": "Utah",
#     "capital": "Salt Lake City"
# }, {
#     "name": "Vermont",
#     "capital": "Montpelier"
# }, {
#     "name": "Virginia",
#     "capital": "Richmond"
# }, {
#     "name": "Washington",
#     "capital": "Olympia"
# }, {
#     "name": "West Virginia",
#     "capital": "Charleston"
# }, {
#     "name": "Wisconsin",
#     "capital": "Madison"
# }, {
#     "name": "Wyoming",
#     "capital": "Cheyenne"
}]

# add the correct and incorrect keys to each capital


for i in range(0, len(states)):
    states[i]['correct'] = 0
    states[i]['incorrect'] = 0




# randomize the array 
import random


print("welcome to the state capitals game! The game will provide the name of a state and you will type in the capital. By the end you will have gone through all " + str(len(states)) + " states.")



def rerun():
    answer = input("Would you like to play again? Answer with y or n: ")
    if answer == 'y':
        stateCapitals()


def stateCapitals():
    random.shuffle(states)
    totalCorrect = 0 
    totalIncorrect = 0
    # loop through the array to ask "what is the capital of [name of state here]
    # if the user answers correctly. print correct. correct ++
    # for now the capitals also seem to have to be correclty cased....
    for i in range(len(states)):
        print('The state is: ' + states[i]['name'])
        capital = input("What is the capital? ")
        if capital == states[i]["capital"]:
            print(capital + " is correct!")
            states[i]['correct'] = states[i]['correct'] + 1
            totalCorrect += 1
            print("the number of correct answers is " + str(totalCorrect) + " and the number of incorrect answers is " + str(totalIncorrect))

        else:
            print(capital + " is incorrect!")
            states[i]['incorrect'] = states[i]['incorrect'] + 1
            totalIncorrect += 1
            print("the number of correct answers is " + str(totalCorrect) + " and the number of incorrect answers is " + str(totalIncorrect))
    rerun()

stateCapitals()

#print(states)


def total():
    cor = 0 
    wrong = 0
    for i in range(len(states)):
        #this is 0 + the value for the key correct at the present index is 
        cor = cor + states[i]["correct"] 
        wrong = wrong + states[i]["incorrect"] 
    print("total correct: " + str(cor) + " total incorrect: " + str(wrong))

total()

