var userWord = prompt("Give me a word, any word!");

var length = userWord.length;

var third = userWord.charAt(2); 

var lower = userWord.toLowerCase();

var upper = userWord.toUpperCase();

var subString = userWord.substring(1,4);

var type = prompt("What part of speech is your word?", "noun, verb, adjective, something else");

if ( type === "noun"){
	alert("Your word, " + userWord + ", contains " + length + " characters.\nThe third character in the word is " + third + "\n Lowercase: " + lower + "\n Uppercase: " + upper + "\n Subword: " + subString + " \n The " + userWord + " loved to eat socks.");
}
else if ( type === "verb"){
	alert("Your word, " + userWord + ", contains " + length + " characters.\nThe third character in the word is " + third + "\n Lowercase: " + lower + "\n Uppercase: " + upper + "\n Subword: " + subString + " \n The chicken loved to " + userWord + " with his friend the elephant.");
}
else if ( type === "adjective"){
alert("Your word, " + userWord + ", contains " + length + " characters.\nThe third character in the word is " + third + "\n Lowercase: " + lower + "\n Uppercase: " + upper + "\n Subword: " + subString + " \n His best friend was an incredibly attractive and " + userWord + " horse named Cheesehooves.");}
else{
	alert("Your word, " + userWord + ", contains " + length + " characters.\nThe third character in the word is " + third + "\n Lowercase: " + lower + "\n Uppercase: " + upper + "\n Subword: " + subString + "\n Sorry to disappoint, but I'm a stupid computer. \n I don't know how to use that in a sentence.");
};