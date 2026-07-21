// ==========================
// BusGo Seat Selection
// ==========================

const seatLayout = document.getElementById("seatLayout");
const seatNumber = document.getElementById("seatNumber");

// Already booked seats
const bookedSeats = [3, 7, 12, 18, 24, 29, 35];

let selectedSeat = null;

// Create 40 Seats
for (let i = 1; i <= 40; i++) {

    const seat = document.createElement("div");

    seat.classList.add("seat");

    seat.innerText = i;

    if (bookedSeats.includes(i)) {

        seat.classList.add("booked");

    } else {

        seat.addEventListener("click", function () {

            // Remove old selection
            document.querySelectorAll(".seat.selected").forEach(s => {
                s.classList.remove("selected");
            });

            seat.classList.add("selected");

            selectedSeat = i;

            seatNumber.innerHTML = "Selected Seat : <b>" + i + "</b>";

        });

    }

    seatLayout.appendChild(seat);

}

// Continue Button

function continueBooking() {

    if (selectedSeat == null) {

        alert("Please Select a Seat");

        return;

    }

    localStorage.setItem("seatNumber", selectedSeat);

    window.location.href = "booking.html";

}