const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
//prediction :
//Tesla
//Mercedes
//actuale output:
//Tesla
//Mercedes
//problem 1:
//cause it  assigning the values of the array to the variables at the same time
// by using the camas
// ************************************************************************************************************************************************

const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
console.log(employeeName);
//prediction :
//Elon
//employeename is not defined
//actuale output:
//Elon
//employeeName is not defined
//problem 2:
//cause other Name is a new variable and employeeName is not defined 
//to solve this problem we can use the employee to declare like this console.log(employee.employeeName)
// ************************************************************************************************************************************************
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
//prediction
// 12345
// undefined
//actuale output
// 12345
// undefined
//problem 3:
//cause password is a variable and it is not defined in the object person
//to solve this problem we can declare password in the object person
// ************************************************************************************************************************************************

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
const[,,,,fourth]=numbers;
//Predict the output
console.log(first === second);
console.log(first === third);
console.log(fourth);
//prediction
//false
//true
//actuale output
//false
//true
//problem 4:
//cause first and second are not the same number
// ************************************************************************************************************************************************
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
const[, , , , ,lastvalue]=secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
console.log(lastvalue);
//prediction
//value
//[1,5,1,8,3,3]
//1
//5
//actuale output
//value
//[1,5,1,8,3,3]
//1
//5
//problem 5:
//cause willThisWork is declared as a variable and it is not defined in the object lastTest
//********************************************************************************************************************************************************************* */
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);
//prediction
//Paul was found at index 0
//George was found at index 1
//John was found at index 2
//Ringo was found at index 3
//name and index after loop is Ringoi:4
//actuale output:
//Paul was found at index 0
//George was found at index 1
//John was found at index 2
//Ringo was found at index 3
//name and index after loop is Ringoi:4
//problem 6:
//we have 3 scops 
//1. global scope
//2. function scope
//3. block scope

//*******************************************************************************************************************************************************************/
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }     
//prediction
//
//actual output
//
//problem 7:
// the variable 'names' which is not defined 
// *****************************************************************************************************************************************************************
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);
//prediction:
//Paul was found at index 0
//George was found at index 1
//John was found at index 2
//Ringo was found at index 3
//actual output:
//Paul was found at index 0
//George was found at index 1
//John was found at index 2
//Ringo was found at index 3
//problem 8:
// The output shows each name from the beatles array and where it is located (its index) in the array.
// variable keywords
// const:for beatles holds the array, and name is a temporary variable in the loop.
// function:  to define printNames and actuallyPrintingNames, allowing code reuse.
// let: for index in the loope
// **********************************************************************************************************************************************************************

const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)

// prediction:
// true
// true
//actual output:
// true
// false
// problem 9:
//The first elements of the composition arrays in both objects are the same string "gas"
//planet and planetCopy are two distinct objects in memory



// **********************************************************************************************************************************************************************






