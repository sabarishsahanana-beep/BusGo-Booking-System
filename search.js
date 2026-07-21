const route=document.getElementById("route");

route.innerHTML=
localStorage.getItem("from")
+" ➜ "+
localStorage.getItem("to")
+" | "+
localStorage.getItem("date");

function bookBus(name,price){

localStorage.setItem("busName",name);

localStorage.setItem("price",price);

window.location.href="seat.html";

}