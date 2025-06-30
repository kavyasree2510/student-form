let form = document.getElementById('app');
let heading = document.createElement('h1');
heading.textContent = "Student Details";
form.appendChild(heading);

let nameLabel = document.createElement('label');
nameLabel.textContent = "Enter your Full Name:";
form.appendChild(nameLabel);

let nameInput = document.createElement('input');
nameInput.type = "text";
nameInput.name = "name";
nameInput.required = true;
form.appendChild(nameInput);


let rollnoLabel = document.createElement("label");
rollnoLabel.textContent = "Enter your Roll No:";
form.appendChild(rollnoLabel);

let rollnoInput = document.createElement("input");
rollnoInput.type = "text";
rollnoInput.name = "rollno";
rollnoInput.required = true;
form.appendChild(rollnoInput);


let emailLabel = document.createElement("label");
emailLabel.textContent = "Enter your Email:";
form.appendChild(emailLabel);

let emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.name = "email";
emailInput.required = true;
form.appendChild(emailInput);



let phoneLabel = document.createElement("label");
phoneLabel.textContent = "Enter your Phone Number:";
form.appendChild(phoneLabel);

let phoneInput = document.createElement("input");
phoneInput.type = "text";
phoneInput.name = "phone";
phoneInput.required = true;
form.appendChild(phoneInput);


let addressLabel = document.createElement("label");
addressLabel.textContent = "Enter your Address:";
form.appendChild(addressLabel);

let addressInput = document.createElement("textarea");
addressInput.name = "address";
addressInput.required = true;
form.appendChild(addressInput);


let courseLabel = document.createElement("label");
courseLabel.textContent = "Year:";
form.appendChild(courseLabel);

let courseInput = document.createElement("select");
courseInput.name = "year";

let option1 = document.createElement("option");
option1.value = "I";
option1.text = "I";
courseInput.appendChild(option1);

let option2 = document.createElement("option");
option2.value = "II";
option2.text = "II";
courseInput.appendChild(option2);

let option3 = document.createElement("option");
option3.value = "III";
option3.text = "III";
courseInput.appendChild(option3);

let option4 = document.createElement("option");
option4.value = "IV";
option4.text = "Iv";
courseInput.appendChild(option4);

form.appendChild(courseInput);

let submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";
form.appendChild(submitButton);
alert("submited succesful");