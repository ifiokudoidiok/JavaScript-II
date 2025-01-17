// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'Notebook', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we will use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  firstItem(items, item => console.log(`I love my ${item}!`));
  // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    console.log(`this ${article} is worth a million dollars!`);
  };

  firstItem(items, logExorbitantPrice);
  // "this Pencil is worth a million dollars!"
*/
// function firstItem(arr, cb) {
//   return cb(arr[0]);
// }

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
// let cb = (itemsLength) =>  { return itemsLength};
// console.log(getLength(items, cb ));
console.log(getLength(items, itemsLength => console.log(`The length is ${itemsLength}!`)));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[(arr.length - 1)]);
}
console.log(last(items, lastItem => console.log(`The last item is ${lastItem}!`)));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}
console.log(sumNums(12, 7, sum => console.log(`The sum is ${sum}!`)));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb (x*y);
}
console.log(multiplyNums(3, 8, product => console.log(`The product is ${product}!`)));

let cb = (item, list) => {
  if(list.includes(item)){

    return true;
  }
  return false;
}
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  return cb(item, list);
  // Pass true to the callback if it is, otherwise pass false.
}
console.log(contains('Pencil', items, cb));

/* STRETCH PROBLEM */
 
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  cb = removeDuplicates => removeDuplicates.filter((item, index) => removeDuplicates.indexOf(item) != index);
  return cb(array);
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}



console.log(removeDuplicates(items)) // All duplicates
