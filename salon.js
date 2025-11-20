// Mannequin Images
const kidsStyles = ["images/art1.png", "images/art2.png", "images/atr4.png"];
const adultStyles = ["images/w1.png", "images/w2.png", "images/w3.png"];

let kidsIndex = 0;
let adultIndex = 0;

const kidsImg = document.getElementById("kids-img");
const adultImg = document.getElementById("adult-img");
const kidsCard = document.getElementById("kids-card");
const adultCard = document.getElementById("adult-card");

function resizeCard(card, img) {
    const naturalHeight = img.naturalHeight;
    const naturalWidth = img.naturalWidth;
    const aspectRatio = naturalWidth / naturalHeight;
    card.style.width = `${Math.min(300, naturalWidth)}px`;
    card.style.height = `${Math.min(400, naturalHeight)}px`;
}

function rotateKids() {
    kidsIndex = (kidsIndex + 1) % kidsStyles.length;
    const newImg = new Image();
    newImg.src = kidsStyles[kidsIndex];
    newImg.onload = () => {
        kidsImg.src = newImg.src;
        resizeCard(kidsCard, newImg);
    }
}

function rotateAdult() {
    adultIndex = (adultIndex + 1) % adultStyles.length;
    const newImg = new Image();
    newImg.src = adultStyles[adultIndex];
    newImg.onload = () => {
        adultImg.src = newImg.src;
        resizeCard(adultCard, newImg);
    }
}

setInterval(rotateKids, 5000);
setInterval(rotateAdult, 5000);

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const closeMobileMenu = document.getElementById("close-mobile-menu");

// Open menu
hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

// Close menu via button
closeMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

// Close menu by clicking outside
document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.remove("active");
    }
});

/*const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
hamburger.addEventListener("click", () => {
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
});*/

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

// Confirm Booking
const confirmBooking = document.getElementById("confirm-booking");
confirmBooking.addEventListener("click", () => {
    const service = document.getElementById("service-select").value;
    const style = document.getElementById("style-select").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Check required fields
    if (!service) {
        alert("Please select a service.");
        return;
    }
    if (!style) {
        alert("Please select a style.");
        return;
    }
    if (!date) {
        alert("Please pick a date.");
        return;
    }

    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0,0,0,0); // compare only dates
    if (selectedDate < today) {
        alert("Please select a valid date.");
        return;
    }

    if (!time) {
        alert("Please select a time.");
        return;
    }

    // All good
    alert(`Your session for ${service} (${style}) on ${date} at ${time} has been booked successfully!`);
    bookingPanel.classList.remove("active");
});

/*setting up other services image rotator*/
const categoryImagess = {
    pedicure: [""],
     manicure: [""],
      hairstyle: [""],
       facial: [""],
};

// logic
document.querySelectorAll("").forEach(() => {
    let index = 0;
    const group = img.dataset.category;
    setInterval(() => {
        index = (index + 1) % categoryImagess[group].length;
        img.classList.add("zoom");
        setTimeout(() => {
            img.src = categoryImagess[group][index];
            img.classList.remove("zoom");
        }, 350);
    }, 2500);
});

// Testimonial Carousel
const testimonials = document.querySelectorAll(".testimonial-card");
let testimonialIndex = 0;
function rotateTestimonials() {
    testimonials.forEach((t, i) => {
        t.style.opacity = i === testimonialIndex ? "1" : "0";
        t.style.transition = "opacity 0.8s";
    });
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}
setInterval(rotateTestimonials, 5000);
rotateTestimonials(); // Initial call
