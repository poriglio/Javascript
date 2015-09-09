var victimNameArray = [];
var victimPhoneArray = [];
var victimStreetArray = [];

do{var numVictims=prompt("How many disaster victims do you wish to enter?")}while(isNaN(numVictims));

for(var counter=0; counter<=(numVictims-1); counter++){
	var victimName=prompt("Enter victim name.");
	var victimPhone=prompt("Enter victim phone number.");
	var victimStreet=prompt("Enter victim street.");

	victimNameArray.push(victimName);
	victimPhoneArray.push(victimPhone);
	victimStreetArray.push(victimStreet);
}

// console.log(victimNameArray);
// console.log(victimPhoneArray);
// console.log(victimStreetArray);

var volNameArray = [];
var volPhoneArray = [];
var volStreetArray = [];

do{var numVol=prompt("How many disaster volunteers do you wish to enter?")}while(isNaN(numVol));

for(var counter=0; counter<=(numVol-1); counter++){
	var volName=prompt("Enter volunteer name.");
	var volPhone=prompt("Enter volunteer phone number.");
	var volStreet=prompt("Enter volunteer street.");

	volNameArray.push(volName);
	volPhoneArray.push(volPhone);
	volStreetArray.push(volStreet);
}

// console.log(volNameArray);
// console.log(volPhoneArray);
// console.log(volStreetArray);

alert("There are " + numVictims + " in need and " + numVol + " people willing to help.\nThe people needing help are " + victimNameArray.slice(0,victimNameArray.length-1) + " and " + victimNameArray[victimNameArray.length-1] + " and the people willing to help are " + volNameArray.slice(0,volNameArray.length-1) + " and " + volNameArray[volNameArray.length-1] + ".");