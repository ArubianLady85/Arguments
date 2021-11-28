const lovePainting = function (color) {
    console.log("The wall has been painted " + color);
};

// Single Argument + extra color - got 2 lines
lovePainting("green");
lovePainting("Purple");

// multiple arguments

function whichWall(a, b) {

    console.log("Which wall is being painted:" + b + a);

}

whichWall("The North wall is being painted orange", "The South-East wall is being painted grey");

/* step 6
yes the order does matter when calling the function, what is first will be called first: whichWall("The South-East wall is being painted grey", "The North wall is being painted orange");
*/

/* step 7
The outcome will switch automatically too: function whichWall(b, a) {
*/

/* step 8
The outcome will still switch: console.log("Which wall is being painted:" + b + a);
*/

