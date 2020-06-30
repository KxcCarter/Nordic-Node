// Not only can we pass numbers, strings, or objects
// You can pass anything you want in a module export
// Here we want to export a function

// it takes 2 dogs to pull the sleigh when it is empty
// each additional dog may pull 2 additional boxes

// divide the number of boxes by 2, then add 2
// if the input number was 2, the result should be 3

module.exports = function(numberOfBoxes) {
    // YOUR CODE HERE
    return (numberOfBoxes / 2) + 2;

}

// now run `node test.js` in the terminal, to see what happens

// After these are complete, you should be able to run `node test.js` and see `Passed!` for each of the tests.

// Take a look at `test.js` and think about what is happening here.
// What do the first few lines do? How do `module.exports` and `require` relate to each other?

// STRETCH: You may not have half of a dog
// If 3.5 dogs are required, the response should be 4