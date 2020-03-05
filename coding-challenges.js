// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

const something = (array) => {
	let newArray = []
	array.slice(0,1);
	return newArray
	
}

console.log(something(collections))



// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const sumAllNumbers = (array) => {
	let sum = 0;
	for(let i = 0; i < array.length; i++){
		sum += Math.pow(array[i], 3); 
	}
	return sum;
}

console.log(sumAllNumbers(cubeAndSum1));
console.log(sumAllNumbers(cubeAndSum2));



// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.





var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]


minAndMax = (array) => {
    let newArray = [];
    let minimum= Math.min(...array);
    let maximum = Math.max(...array);
    newArray.push(minimum, maximum);
    return newArray;
}

console.log(minAndMax(nums1));
console.log(minAndMax(nums2));




// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.





var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"


const letterCapitalize = (string) => {
	let newArray = []
	for(let i = 0; i < string.length; i++){
		if(i%2 != 0)
			newArray.push(string[i].toUpperCase())
		else
			newArray.push(string[i])

	}
	return newArray.join("")
}
console.log(letterCapitalize(testString1))
console.log(letterCapitalize(testString2))


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.





var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
