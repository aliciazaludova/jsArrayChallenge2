console.log("here is a string");

// Write some code that takes an array of numbers and outputs an array that changes any 3s to 7s and any 7s to 3s.

// var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];  
// should look like this afterwards: [1,2,7,4,5,6,3,8,9];

var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];
    for (var i = 0; i < challengeTwoInputA.length; i++);
        var threeTo7 = challengeTwoInputA.splice(2, 1, 7);
        console.log(challengeTwoInputA); // [1, 2, 7, 4, 5, 6, 7, 8, 9]
        var sevenTo3 = challengeTwoInputA.splice(6, 1, 3);
        console.log(challengeTwoInputA); // [1, 2, 7, 4, 5, 6, 3, 8, 9]
        // successkid!
        var challenge2A = document.getElementById(challengeTwoA);
        challengeTwoA.innerHTML = challengeTwoInputA;


        // scrappy busy work beforehand
        // var delete3 = challengeTwoInputA.splice(2, 5);
        //     console.log(delete3);  // only the 3 goes into this var
        //     //i want to log challengeTwoInputA instead, + see 3 deleted
        //     console.log(challengeTwoInputA);  // logs [1, 2, 8, 9]
        //     //now insert 7, 4, 5, 6, 3
        //     var delete3 = challengeTwoInputA.splice(2, 0, 7, 4, 5, 6, 3);  // start @ index 2, 0 means don't remove anything
        //     console.log(challengeTwoInputA);
        //     //outputs [1, 2, 7, 4, 5, 6, 3, 8, 9]


// var challengeTwoInputB = [12,13,14];  //[12,17,14];
// converting to strings seems unneccessary so i modeled this after what i googled:
var challengeTwoInputB = [12,13,14];
var concat = Number(challengeTwoInputB.join('')); 
    //for (var i = 0; i < challengeTwoInputB.length; i++);
    console.log(concat); //outputs 121314
    var digits = []; // make an array to throw it into
    while (concat > 0) {
        digits[digits.length] = concat % 10;
        concat = parseInt(concat / 10);
    }
    digits.reverse();
        console.log(digits); // outputs [1, 2, 1, 3, 1, 4]
    // now make the 3 a 7
    var with7 = digits.splice(3, 1, 7); // with7 now contains the 3
        console.log(digits); // outputs [1, 2, 1, 7, 1, 4]
    var rejoinedDigits = Number(digits.join(''));
        console.log(rejoinedDigits);  //outputs 121714
    // hmmm... 


var challengeTwoInputC = [9,2,4,7,3];  //[9,2,4,3,7];
var popOff3 = challengeTwoInputC.pop();
    console.log(challengeTwoInputC);
challengeTwoInputC.splice(3, 0, 3);
    console.log(challengeTwoInputC);
var challenge2B = document.getElementById(challengeTwoB);
challengeTwoB.innerHTML = challengeTwoInputC;
// successkid!



        
       