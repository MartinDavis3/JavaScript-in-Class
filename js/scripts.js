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
//  function numberOfDecimalPlaces(numStr) {
    //  return (numStr.length - numStr.indexOf(".") - 1);
//  }

// var x = numStr.length - numStr.indexOf(".") - 1;
// console.log(numberOfDecimalPlaces(4.723));

/*
var hotel = {
    name: "The Quay",
    totalRooms: 40,
    roomsBooked: 25,
    roomTypes: ["twin", "double", "suite"],
    checkAvailability: function() {
        var numRoomsAvailable = this.totalRooms - this.roomsBooked
        if (numRoomsAvailable > 0) {
            return "Number of rooms available: " + numRoomsAvailable;
        } else {
            return "Sorry, no more rooms available"
        }
        
    }
}

for ( i = 0; i < hotel.roomTypes.length; i++ ) {
    console.log(hotel.roomTypes[i]);
}

hotel.roomsBooked = 30;

console.log(hotel.checkAvailability());

hotel.roomsBooked = 40;

console.log(hotel.checkAvailability());

// An anlernative way to loop over the room types

hotel.roomTypes.forEach( element => { console.log(element);
                                   } );
*/

// end 3 Mar

// edabit challenges
// Traiangular dots
// Number of dots that form a triangle of n rows
// Start of series: 1, 3, 6, 10, 15
// Create function triangle(n) that returns number of dots for n rows

var result = triangle(8);
console.log(result)

function triangle(n) {
    if( n === 1 ) {
        return 1;
    } else {
        return n + triangle(n-1);
    }
}

//finished for  5 Mar

var dum = 5
