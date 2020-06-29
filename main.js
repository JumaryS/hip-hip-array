/* This assignment will give you some practice with creating arrays and using their methods. */

/* Please note that his is NOT a function-based challenge (aside from your challenge banner function). Everything should be in the global scope--this means you will benefit from using `for` loops instead of `while`. */


// Challenge 0


function callChallengeBanner(num){
  let hashTag= ""
  num=num+1
  hashTag= hashTag +'#########'
  console.log(hashTag + " " + "challenge" + num + " " + hashTag)
}
callChallengeBanner()

//
// Challenge banner time! Write a function that console.logs "####### Challenge n #######", where n is the number passed into the function.
//
// Call this function before each of the below challenges, passing in the number of the current challenge.
// 
//

callChallengeBanner(0)
// Loop through the following array, console.logging out each value.
const students = [
  'Crystal',
  'Carlos',
  'Daniel',
  'Chase',
  'Jumary',
  'Marc',
  'Deaundre',
  'LaToddra',
  'Ruben',
  'Prim',
  'Sharod',
  'Dallas',
  'Miley',
];
//  function loop(){
   for(let i=0; i<=students.length -1; i++){
     console.log(students[i])
   }
//  }

callChallengeBanner(1)
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];
for(let i=grades.length-1; i>=0; i--){
  console.log(grades[i])
}
// OR console.log(grades.reverse()) works
callChallengeBanner(2)
// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

for(let i=0; i< positiveNumbers.length; i++){
  if (positiveNumbers[i] % 2 === 0){
    console.log(positiveNumbers[i])
  }
}
callChallengeBanner(3)
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four of them!
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
for(let i=0; i< mixedSignNumbers.length; i++){
  if (mixedSignNumbers[i] % 2 === 0){
    console.log(mixedSignNumbers[i])
  }
}

callChallengeBanner(4)
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
console.log(symmetricalCapitals.shift())
console.log(symmetricalCapitals.shift())
console.log(symmetricalCapitals.pop())

console.log(symmetricalCapitals)
// for(let i =0; i < symmetricalCapitals.length; i++){
//   console.log(symmetricalCapitals.pop())
// } why doesnt my forloop work



callChallengeBanner(5)
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
console.log(fibonacciNumbers.push(9010))
console.log(fibonacciNumbers.push(1020))
console.log(fibonacciNumbers.unshift(9010))
console.log(fibonacciNumbers.unshift(1020))
console.log(fibonacciNumbers)


callChallengeBanner(6)
// Make a NEW array with 5 values of your choice, using the same syntax as the arrays from the previous 6 challenges, that is, every value should be placed within the square brackets.  Now console.log out each value individually.

const newArray= ["Sir Charles", "Sunset", "Comet","Pluto","Nova"]

for(let i=0; i<=newArray.length -1; i++){
  console.log(newArray[i])
}

callChallengeBanner(7)
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
const newEmptyArray= []
// for(let i=0; i< newEmptyArray.length; i++){
newArray.push("item1")
newArray.push("item2")
newArray.unshift("item3")
newArray.unshift("item4")
console.log(newArray)
// }
callChallengeBanner(8)
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
for(let i=3;i<=10;i++){
  console.log(students[i])
}

callChallengeBanner(9)
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally.

for(let i=0;i< students.length;i++){
  const studentsCopy= [...students]
  console.log(studentsCopy[i])
  console.log(students[i])
}
// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the two arrays are the same, because `slice` does NOT modify the original array.


// Challenge 12
// Pull the items at the 4th-6th indices (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']


// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.


// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.


// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
