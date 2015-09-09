var phone = ""
var birthday = ""
var zip = ""
var state = ""
var married = ""

do{phone=prompt("What is your phone number?\nEnter it in this format:\n000-000-0000")}while( ( phone.length!== 12 ) || ( phone.charAt( 3 ) !== "-" ) || (phone.charAt ( 7 ) !== "-" ) || ( isNaN(phone.substring(0,3)) ) || ( isNaN(phone.substring(4,7)) ) || ( isNaN(phone.substring(8,12)) ) )

do{birthday=prompt("When were you born?\nUse the format:\n00/00/00")}while( ( birthday.length !== 8) || ( birthday.charAt(2) !== "/") || (birthday.charAt(5) !== "/") ||  ( isNaN(birthday.substring(0,2)) ) ||  ( isNaN(birthday.substring(3,5)) ) ||  ( isNaN(birthday.substring(6,8)) ) )

do{zip=prompt("What is your zip code?\nUse one of the following formats:\n00000 or 00000-0000")}while(((zip.length!==10)&&(zip.length!==5))||((zip.length===5)&&(isNaN(zip)))||((zip.length===10)&&((isNaN(zip.substring(0,5))||(isNaN(zip.substring(6,10))||(zip.charAt(5)!=="-"))))))

do{state = prompt("Where do you live?\nGive me your two-letter state abbreviation.");var letters = (/^[0-9a-zA-Z]+$/)}while((state.length!==2)||(!isNaN(state))||(!isNaN(state.substring(0,1))||!(state.match(letters))||(!isNaN(state.substring(1,2)))))

do{married=prompt("Are you married?\nEnter yes or no.");married=married.toUpperCase();}while((married!=="YES")&&(married!=="NO"));