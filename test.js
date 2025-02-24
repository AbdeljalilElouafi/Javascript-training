// function reverseString(str) {
//     return str.split('').reverse().join('');
// }


// console.log(reverseString("hello")); 




// let arr=[10, 20, 5, 100, 50];

// let result2=Math.max(arr);
// // console.log(result2);

// function findLargest(arr) {
//     return Math.max(...arr);
// }


// console.log(findLargest([51, 50, 50, 50, 50])); 

// function countVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     let count = 0;
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }


// console.log(countVowels("abdeljalilelouafi")); 

// const atrr = [0,1,2,7,22,12,36,99,44,16,76];
// console.log(Math.random(atrr));





const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]



//   - Declare an empty array
// - Declare an array with more than 5 number of elements
// - Find the length of your array
// - Get the first item, the middle item and the last item of the array
// - Declare an array called `mixedDataTypes`, put different data types in the array and find the length of the array. The array size should be greater than 5
// - Declare an array variable name `itCompanies` and assign initial values `Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle` and `Amazon`
// - Print the array using `console.log()`
// - Print the number of companies in the array
// - Print the first company, middle and last company
// - Print out each company
// - Change each company name to uppercase one by one and print them out
// - Print the array like a sentence: `Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.`
// - Check if a certain company exists in the `itCompanies` array. If it exists, return the company else return "Company is not found"
// - Filter out companies which have more than one 'o' without the `filter` method
// - Sort the array using `sort()` method
// - Reverse the array using `reverse()` method
// - Slice out the first 3 companies from the array
// - Slice out the last 3 companies from the array
// - Slice out the middle IT company or companies from the array
// - Remove the first IT company from the array
// - Remove the middle IT company or companies from the array
// - Remove the last IT company from the array
// - Remove all IT companies



let array =[];

let newArray = [3,2,1,11,5,4];

let Length = newArray.length;

console.log(Length);

let firstItem= newArray[newArray.length - (Length)];

console.log(firstItem);

let middleItem = newArray[newArray.length - (Length/2)];

console.log(middleItem);

let lastItem = newArray[Length-1];

console.log(lastItem);



let mixedDataTypes = [1, 'pizza', 2, 'lmlejjj', 4,9,3];

let anotherLength = mixedDataTypes.length;
console.log(anotherLength);


let itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle` ,`Amazon`]

console.log(itCompanies);

let i=0;
for(i=0;i<itCompanies.length; i++){
console.log(itCompanies[i]);
}

for(i=0; i<itCompanies.length;i++){
    itCompanies[i].toUpperCase();
    console.log(itCompanies[i]);
    
}

    



