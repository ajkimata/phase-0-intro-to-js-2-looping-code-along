// // Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {    
//      console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     //  debugger;
//     }
//     return gifts;  
// }
// wrapGifts(gifts);
// wrapGift(gifts[0]);
// wrapGift(gifts[1]);
// wrapGift(gifts[2]);

// for (let age = 30; age <40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     // debugger;
// }

//takes an array of names as input
const names = ["Guadalupe", "Ollie", "Ali"];

function writeCards (names) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        // debugger;
    }
   //returns an array of thank you messages for each name provided to the function
    return messages;
}
console.log(writeCards(names));

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   let i = 0; // the initialization moves OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }

//   return gifts;
// }

// wrapGifts(gifts);
// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"]

function countDown () {
   //initialize countDown to 10 so that output is 11
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown);
       //decrement the countDown
        countDown--;
    }
}
countDown(); // Invoke the function to test it