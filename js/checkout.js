// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	const hasNumber = /\d/
	const hasLetter = /[a-zA-Z]/g

	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || fName.value.length < 3 || hasNumber.test(fName.value) == true){
		document.getElementById("errorName").innerHTML= `This field is required and must have, at least, 3 characters, all letters`
		errorName.style.color = "red"
		error++;
	}

	if(fLastN.value == "" || fLastN.value.length < 3 || hasNumber.test(fLastN.value) == true){
		document.getElementById("errorLastN").innerHTML= `This field is required and must have, at least, 3 characters, all letters`
		errorLastN.style.color = "red"
		error++;
	}

	if(fEmail.value == "" || fEmail.value.match(validEmail) == false || fEmail.value.length < 3){
		document.getElementById("errorEmail").innerHTML= `This field must contain a valid email address`
		errorEmail.style.color = "red"
		error++
	}

	if(fPhone.value == "" || fPhone.value.length < 9){
		document.getElementById("errorPhone").innerHTML= `Invalid phone number!! Must be 9 digits with no letters`
		errorPhone.style.color = "red"
		error++;
	}

	if(fPassword.value == "" || fPassword.value.length < 3 || hasNumber.test(fPassword.value) == false || hasLetter.test(fPassword.value) == false){
		document.getElementById("errorPassword").innerHTML= `Enter a correct password. It must contain, at least, 3 characters, including both letters and numbers`
		errorPassword.style.color = "red"
		error++;
	}

	if(fAddress.value == "" || fAddress.value.length < 3){
		document.getElementById("errorAddress").innerHTML= `This field is required and must have, at least, 3 characters`
		errorAddress.style.color = "red"
		error++;
	}

	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
