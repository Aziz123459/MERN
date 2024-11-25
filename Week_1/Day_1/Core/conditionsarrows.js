// problem 1:
const older=age=>age>18?"You are good to go":"Sorry! You must be 18 or older!"
console.log(older('4'))

// problem 2:
const raining=rain=>rain==true?"Get your rain jacket!":"No rain on today's forecast!"
console.log(raining(true))

// problem 3:
const even=number=> number%2==0?"Even number":"Odd number"
console.log(even(5))

// problem 4:
const greater=(a,b)=> a>b?`${a} is greater than ${b}`:`${a} is less than ${b}`
console.log(greater(5,3))
