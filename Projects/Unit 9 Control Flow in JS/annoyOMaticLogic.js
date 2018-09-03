//Continue to ask the user if we are there yet and don't stop until they answer 'yes' or 'yeah'
var nag = "Are we there yet?";
var response = prompt(nag);

// //start loop and check what the user's responces are.
// while (response !== "yes" && response !== "Yes" && response !== "yeah" && response !== "Yeah") {
// 	response = prompt(nag);
// }

// if (response == "yes" || response == "Yes" || response == "yeah" || response == "Yeah") {
// 	alert("Woo! We're here!");
// }

//more robust because of indexof function
while (response.indexOf("yes") === -1 && response.indexOf("Yes") === -1 && response.indexOf("yeah") === -1 && response.indexOf("Yeah") === -1) {
	response = prompt(nag);
}

if (response.indexOf("yes") !== -1 || response.indexOf("Yes") !== -1 || response.indexOf("yeah") !== -1 || response.indexOf("Yeah") !== -1) {
	alert("Woo! We're here!");
}