// var  person = {
// 	name: 'Andrew',
// 	age: 21
// };

// function updatePerson (obj) {
// 	// obj = {
// 	// 	name: 'Andrew',
// 	// 	age: 24
// 	// };
// 	obj.age = 24;
// }

// updatePerson(person);
// console.log(person);

// Array Example

var grades = [15, 37];
function addGrades (grades) {
	grades.push (55);
	return grades;
}

// addGrades(grades);
// console.log(grades);

grades[1] = 99;

addGrades(grades);
console.log(grades);
