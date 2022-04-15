var dateEvent = new Date("Dec 28, 2022 19:00:00").getTime();

var containerDays = document.getElementById('days-left');
var containerHours = document.getElementById('hours-left');
var containerMinutes = document.getElementById('minutes-left');
var containerSeconds = document.getElementById('seconds-left');

setInterval(function () {
    var now = new Date().getTime();
    var daysLeft = dateEvent - now;
    
    var days = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((daysLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((daysLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((daysLeft % (1000 * 60)) / 1000);

    containerDays.innerHTML = days;
    containerHours.innerHTML = hours;
    containerMinutes.innerHTML = minutes;
    containerSeconds.innerHTML = seconds;
}, 1000)

function sendEmail() {
    // Add email Local Storage
    /*let emailUsuario = document.getElementById('input-email').value;
    window.localStorage.setItem('emailUsuario', JSON.stringify(emailUsuario));

    console.log(JSON.parse(window.localStorage.getItem('emailUsuario')));

    document.getElementById('input-email').value = "";*/
}

// Menu Hamburger
let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelector(".menu-toggle");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial";
    menuSection.classList.toggle("on", show);
    header.classList.toggle("on",);
    nav.classList.toggle("on",);
    show = !show;
})