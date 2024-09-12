function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

function Employee(name, age, jobTitle) {
	Person.call(this, name, age); // Call the Person constructor
	this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype); // Inherit from Person
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;


let person = new Person("Alice", 25);
person.greet(); // Should print "Hello, my name is Alice, I am 25 years old."

let employee = new Employee("Bob", 30, "Manager");
employee.greet(); // Should print "Hello, my name is Bob, I am 30 years old."
employee.jobGreet(); // Should print "Hello, my name is Bob, I am 30 years old, and my job title is Manager."