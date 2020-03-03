/*
for( i=1; i<=100; i++) {
    if (i % 3 === 0 ) {
        console.log("Fizz");
    }
    else {
        if ( i % 5 === 0 ) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }  
}
*/
/*
var outLine
for( i=1; i<=100; i++) {
    outLine="" 
    if (i % 3 === 0 ) {
        outLine = "Fizz";
    }
    if ( i % 5 === 0 ) {
        outLine += "Buzz";
    }
    if (!outLine) {
        outLine = i;
    }
    console.log(outLine)
}
*/
/* 
function animals(chickens, cows, pigs) {
    return chickens * 2 + cows * 4 + pigs * 4
};

console.log(animals(1,1,1));
*/

// var numStr = "4.723"
 function numberOfDecimalPlaces(numStr) {
     return (numStr.length - numStr.indexOf(".") - 1);
 }

// var x = numStr.length - numStr.indexOf(".") - 1;
console.log(numberOfDecimalPlaces(4.723));
