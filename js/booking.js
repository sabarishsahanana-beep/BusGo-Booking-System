// ============================
// BusGo Booking Script
// ============================

// Show Booking Details
document.getElementById("bus").innerText =
localStorage.getItem("busName");

document.getElementById("seat").innerText =
localStorage.getItem("seatNumber");

document.getElementById("price").innerText =
localStorage.getItem("price");

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){

e.preventDefault();

// Get User Input

const name = document.getElementById("name").value.trim();

const age = document.getElementById("age").value;

const gender = document.getElementById("gender").value;

const phone = document.getElementById("phone").value.trim();

// Validation

if(name=="" || age=="" || gender=="" || phone==""){

alert("Please fill all details.");

return;

}

if(phone.length!=10){

alert("Enter a valid 10 digit phone number.");

return;

}

// Save Passenger Details

localStorage.setItem("passengerName",name);

localStorage.setItem("age",age);

localStorage.setItem("gender",gender);

localStorage.setItem("phone",phone);

// Redirect

window.location.href="success.html";

});