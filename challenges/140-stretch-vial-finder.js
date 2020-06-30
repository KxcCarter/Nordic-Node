// The dogs have successfully carried the cure to Nome
// The vials are in boxes inside of boxes inside of boxes...
// We need to find the vials and count just how many there are

// each box is represented by an array
// you might get an empty box like: []
// or a box might have things in it like: ['vial', 'sandwich', 'dog food']
// or a box might have boxes in it like [['vial', ['dog food', 'dog food'], 'taco'], 'vial', ['vial', vial, ['vial']]]

// Regardless of where they are burried in our luggage, you must count up all of the vials
// in all of the boxes.
// For example, a box list like this:
// [] should return 0

// a box might have things in it like this:
// ['vial', 'sandwich', 'dog food'] should return 1

// a box might have things in it like this:
// [['vial', ['dog food', 'dog food'], 'taco'], 'vial', ['vial', vial, ['vial']]] should return 5

// start small by handling the first two cases (only worry about an array of strings)
// then move on to boxes in boxes in boxes. Boxes in boxes will be a big stretch.
// You may want to research recursion if you get this far.



module.exports = function(box) {
    // YOUR CODE HERE
    let vialCount = 0;


    console.log('in checkBox');

    for (let each of box) {
        console.log('in for loop');

        // if (each == "vial") {
        //     vialCount++;
        //     console.log('in if string check');

        // } else if (typeof each === 'array') {
        //     console.log('in else if');

        //     checkBox(each);
        // }
        console.log(typeof each);








    }

    console.log(`end of checkBox ${vialCount}`);

    return vialCount;

}

// Don't forget to write tests!