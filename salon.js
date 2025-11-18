// Mannequin Images
const kidsStyles = ["images/woman2.png", "images/t2.jpeg", "images/mercy1.png"];
const adultStyles = ["images/THEMAN.png", "images/adult2.jpg", "images/kd1.jpeg"];

let kidsIndex = 0;
let adultIndex = 0;

const kidsImg = document.getElementById("kids-img");
const adultImg = document.getElementById("adult-img");

function rotateKids() {
    kidsIndex = (kidsIndex + 1) % kidsStyles.length;
    kidsImg.src = kidsStyles[kidsIndex];
}

function rotateAdult() {
    adultIndex = (adultIndex + 1) % adultStyles.length;
    adultImg.src = adultStyles[adultIndex];
}

setInterval(rotateKids, 5000);
setInterval(rotateAdult, 5000);

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
});

// Booking Panel Toggle
const bookBtn = document.getElementById("book-btn");
const bookingPanel = document.getElementById("booking-panel");
const closeBooking = document.getElementById("close-booking");

bookBtn.addEventListener("click", () => {
    bookingPanel.classList.add("active");
});
closeBooking.addEventListener("click", () => {
    bookingPanel.classList.remove("active");
});

// Optional: Confirm Booking Alert
const confirmBooking = document.getElementById("confirm-booking");
confirmBooking.addEventListener("click", () => {
    alert("Your session has been booked successfully!");
    bookingPanel.classList.remove("active");
});
