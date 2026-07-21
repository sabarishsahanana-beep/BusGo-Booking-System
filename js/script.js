// =============================
// BusGo Main Script
// =============================

const form = document.getElementById("searchForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const from = document.getElementById("from").value;
const to = document.getElementById("to").value;
const date = document.getElementById("date").value;

if(from==="" || to==="" || date===""){

alert("Please fill all fields.");
return;

}

if(from===to){

alert("From and To cannot be same.");
return;

}

// Save Data
localStorage.setItem("from",from);
localStorage.setItem("to",to);
localStorage.setItem("date",date);

// Go to Bus List
window.location.href="search.html";

});

}

// Navbar Shadow

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>50){

nav.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

}else{

nav.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

}

});

// Welcome

console.log("Welcome to BusGo 🚍");