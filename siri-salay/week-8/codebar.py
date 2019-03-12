
class Member():
    def __init__(self, name='', isStudent = bool, reason='', bio=''):
        self.fullName = name
        self.isStudent = isStudent
        self.reason = reason
        self.bio = bio
        self.skills = []
    def say_hello(self):
        print('Hello, I\'m', self.fullName)
    def add_skill(self, skill):
        if self.isStudent == False:
            self.skills.append(skill)
        else:
            print("cannot add skill to", self.fullName, "because this member is not an instructor")


class Workshop():
    def __init__(self, date ='', subject=''):
        self.date = date
        self.subject = subject
        self.instructors = []
        self.students = []
    def add_participant(self, Member):
        if Member.isStudent == True:
            self.students.append(Member.fullName)
        else:
            self.instructors.append(Member.fullName)


jane = Member("Jane Doe", True, "I am trying to learn programming and need some help")
lena = Member("Lena Smith", True,  "I am really excited about learning to program!")
vicky = Member("Vicky Python", False, "I want to help people learn coding.", "I am actually a reptile.")

vicky.add_skill("HTML")
vicky.add_skill("JavaScript")
jane.add_skill("things")

print(lena.skills)
print(vicky.skills)
print(vicky.bio)
print(lena.bio)

workshop1 = Workshop("12/03/2014", "Shutl")

workshop1.add_participant(jane)
workshop1.add_participant(lena)
workshop1.add_participant(vicky)

print(workshop1.instructors)
print(workshop1.students)