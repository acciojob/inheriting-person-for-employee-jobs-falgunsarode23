// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}

greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

function Employee(name, age, jobTitle) {
	this.name = name;
	this.age = age;
	this.jobTitle = jobTitle;
}

jobGreet (){
	console.log("Hello,My name is ${this.name}, I am ${this.age} year old , and my job title is ${this.jobTitle}")
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  // Method specific to Employee for job greeting
  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
