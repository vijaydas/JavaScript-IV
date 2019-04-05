// CODE here for your Lambda Classes
class Person {
  constructor(PersonAttributes) {
    this.name = PersonAttributes.name;
    this.age = PersonAttributes.age;
    this.location = PersonAttributes.location;
    this.gender = PersonAttributes.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(InstructorAttributes) {
    super(InstructorAttributes);
    this.specialty = InstructorAttributes.specialty;
    this.favLanguage = InstructorAttributes.favLanguage;
    this.catchPhrase = InstructorAttributes.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${this.subject}.`;
  }
  grade(student, subject) {
    return `${this.student} receives a perfect score on ${this.subject}`;
  }
}

class Student extends Person {
  constructor(StudentAttributes) {
    super(StudentAttributes);
    this.previousBackground = StudentAttributes.previousBackground;
    this.className = StudentAttributes.className;
    this.faveSubjects = StudentAttributes.faveSubjects;
  }

  listsSubjects() {
    this.faveSubjects.forEach(function(subject) {
      console.log(`${subject}`);
    });
  }

  PRAssignment(subject) {
    return `${this.name} receives a perfect score on ${subject}`;
  }

  sprintChallenge() {
    return `${this.name} has begun a ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(PMAttributes) {
    super(PMAttributes);
    this.gradClassName = PMAttributes.gradClassName;
    this.favInstructor = PMAttributes.favInstructor;
    this.standUp = PMAttributes.standUp;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }

  standup(channel) {
    return `${this.name} announces to ${channel}, @channel standup time!.`;
  }
}

// make some data:
// instructors:

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const barney = new Instructor({
    name: 'Barney',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JQuarry',
    specialty: 'Back-end',
    catchPhrase: `What's for dinner?`
  });

const gazoo = new Instructor({
    name: 'Gazoo',
    location: 'Outer Space',
    age: 33023,
    gender: 'both',
    favLanguage: 'Superstring',
    specialty: 'Everything',
    catchPhrase: `Stupid humans`
  });



// testing
console.log(fred);