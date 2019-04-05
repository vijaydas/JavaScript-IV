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
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}.`;
  }
}

class Student extends Person {
  constructor(StudentAttributes) {
    super(StudentAttributes);
    this.previousBackground = StudentAttributes.previousBackground;
    this.className = StudentAttributes.className;
    this.favSubjects = StudentAttributes.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach(function(subject) {
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
    return `${this.name} debugs ${student}'s code on ${subject}.`;
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

// make some data:
// students:

const albert = new Student({
    name: 'Einstein',
    location: 'Princeton',
    age: 52,
    gender: 'male',
    previousBackground: 'patent reviewer',
    className: 'web2015',
    favSubjects: ['unified theories', 'combs', 'sweaters'],
  
  });

  const neils = new Student({
    name: 'Bohr',
    location: 'Princeton',
    age: 53,
    gender: 'male',
    previousBackground: 'car mechanic',
    className: 'web2',
    favSubjects: ['America', 'Germany', 'dogs'],
    });
 
  const  robert = new Student({
    name: 'Oppenheimer',
    location: 'Arizona',
    age: 54,
    gender: 'male',
    previousBackground: 'patent reviewer',
    className: 'web2015',
    favSubjects: ['world peace', 'REACT(ors)', 'baghvad gita'],
    });

// make some data:
// project managers:

const martin = new ProjectManager({
    name: 'Scorcese',
    location: 'New York',
    age: 64,
    gender: 'male',
    gradClassName: 'Data34',
    favInstructor: 'Ford',
  
  });

  const woody = new ProjectManager({
    name: 'Allen',
    location: 'New York',
    age: 53,
    gender: 'male',
    gradClassName: 'iOS75',
    favInstructor: 'Rockefeller',
    });
 
  const  erica = new ProjectManager({
    name: 'Shade',
    location: 'Utah',
    age: 54,
    gender: 'female',
    gradClassName: 'Med5',
    favInstructor: 'Gupta',
    });



// testing
console.log(fred);
console.log(barney);
console.log(gazoo);

console.log(albert);
console.log(neils);
console.log(robert);

console.log(martin);
console.log(woody);
console.log(erica);


console.log(gazoo.demo('dental implants'));
console.log(barney.grade("Albert", "finger painting"));

console.log(neils.listsSubjects());
console.log(albert.PRAssignment('punking'));

console.log(martin.standup('web19-martin'));
console.log((martin.debugsCode('albert', 'constructors')))

