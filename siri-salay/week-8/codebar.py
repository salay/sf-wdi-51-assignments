
class Member():
    def __init__(self, name=''):
        self.full_name = name
    def say_hello(self):
        print('Hello, I\'m', self.full_name)
    
class Student(Member):
    def __init__(self, name, reason):
        Member.__init__(self)
        self.full_name = name
        self.reason = reason

class Instructor(Member):
    def __init__(self, name, bio):
        Member.__init__(self)
        self.full_name = name
        self.bio = bio
        self.skills = []
    def add_skill(self, skill):
        self.skills.append(skill)
       
class Workshop():
    def __init__(self, date ='', subject=''):
        self.date = date
        self.subject = subject
        self.instructors = []
        self.students = []
    def add_participant(self, participant):
        if isinstance(participant, Student) == True:
            self.students.append(participant)
        else:
            self.instructors.append(participant)
    def print_details(self):
        print("the date of the workshop is", self.date)
        print("the subject of the workshop is", self.subject)
        print("the students in the workshop are: ")
        for i in range(len(self.students)):
            print(self.students[i].full_name, " : ", self.students[i].reason)
        print("the instructors in the workshop are: ")
        for i in range(len(self.instructors)):
            print(self.instructors[i].full_name, "whose skills are: ", ", ".join(self.instructors[i].skills))
            print("     ", self.instructors[i].bio)

workshop = Workshop("12/03/2014", "Shutl")

jane = Student("Jane Doe", "I am trying to learn programming and need some help")
lena = Student("Lena Smith", "I am really excited about learning to program!")
vicky = Instructor("Vicky Python", "I want to help people learn coding.")
vicky.add_skill("HTML")
vicky.add_skill("JavaScript")
nicole = Instructor("Nicole McMillan", "I have been programming for 5 years in Python and want to spread the love")
nicole.add_skill("Python")

workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)

workshop.print_details()