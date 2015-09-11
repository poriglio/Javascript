// EXERCISE 1

// var tripleFive = function(){
// 	for(var i = 0; i < 3; i++){
// 		console.log("Five!")
// 	}
// }

// tripleFive();

// EXERCISE 2

// var lastLetter = function(x){
// 	return x.substring(x.length-1,x.length);
// };

// var string = prompt("Give me a string, any string!");

// console.log(lastLetter(string));

// EXERCISE 3

// var square = function(x){
// 	return x*x;
// };

// do{var x = prompt("Give me a number, any number!")}while(isNaN(x));

// console.log(square(x));

// EXERCISE 4

// var negate = function(i){
// 	return i * -1;
// }

// do{var x = prompt("Give me a number, any number!")}while(isNaN(x));

// console.log(negate(x));

// EXERCISE 5

// var newArray = [];

// var toArray = function (x,y,z){
//     newArray.push(x,y,z);
//     return newArray;
// };

// toArray(prompt("Say a thing!"),prompt("Say a thing!"),prompt("Say a thing!"));

// console.log(newArray);

// EXERCISE 6

// var startsWithA = function (string){
// 	if((string.substring(0,1)==="a")||(string.substring(0,1)==="A")){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// };

// console.log(startsWithA(prompt("Give me a word!")));

// EXERCISE 7

// var excite = function(x){
//     return x + "!!!";
// };

// console.log(excite(prompt("Give me something!","Word, number, whatever!")));

// EXERCISE 8

// var sun = function ( x ) {
// 	if( (x.indexOf("sun")!==-1) ){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// };

// console.log(sun(prompt("Give me a word, any word!\nI'll tell you if it contains the word 'sun'!")));

// EXERCISE 9

// var tiny = function(i){
// 	if( i < 1 && i > 0 ){
// 		return true;
// 	} 
// 	else{
// 		return false;
// 	}
// };

// console.log(tiny(prompt("Give me a number.\nMaybe one that's between zero and one? ;)")));

// EXERCISE 10

// var getSeconds = function( timely ) {
// 	var x = Number(timely.substring(0,2));
// 	var y = Number(timely.substring(3,5));
// 	var totalSeconds = x * 60 + y;
// 	return totalSeconds;
// };

// alert("The total time elapsed is " + getSeconds(prompt("Give me the time elapsed!\nThis will only work if you enter it as MM:SS")) + " seconds!");
