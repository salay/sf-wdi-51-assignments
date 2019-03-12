students = ["Minnie", "Mickey", "Donald", "Squidward"]
print(students[1])
print(students[-1])

# Create a tuple named foods containing the same number of foods (strings) as there are names in the students list.
# Use a for loop to print out the string "food goes here is a good food"

foods = ("watermelon", "bluberries", "eggs", "beans")

for food in foods:
    print(food + " is a good food")

# Using a for loop, print just the last two food strings from foods.

for i in range(2, len(foods)):
    print(foods[i])

for i in range(-2, 0):
    print(foods[i])
 
home_town = {
	'city': 'Nowhere',
	'state': "Nonexistent",
	'population' : 0
}

print("I was born in " + home_town['city'] + ", " + home_town['state'] + " - population of " + str(home_town['population']))

for key in home_town:
    print(key + ": " + str(home_town[key]))

cohort = []

for i in range(len(students)):
    cohort.append({'student': students[i], 'fav-food': foods[i]})
    print(cohort[i])

awesome_students = []

for i in range(len(students)):
    awesome_students.append(students[i] + " is awesome!")
    print(awesome_students[i])

for i in range(len(foods)):
    if 'a' in foods[i]:
        print(foods[i])