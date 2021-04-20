const hamburgerIcon = document.querySelector("svg");
const hamburgerDrop = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

function handleMenuClick() {
    hamburgerDrop.style.width = "250px";

}

function handleSideNavClose() {
    hamburgerDrop.style.width = "0px";

}

hamburgerIcon.addEventListener("click", handleMenuClick);
closeBtn.addEventListener("click", handleSideNavClose);
hamburgerDrop.addEventListener("mouseleave", handleSideNavClose);


//does using scrollIntoView for nav benefit this project?

//add the sticky nav bar when scrolling past circle section?
//change text in header to SJ at media query break point 600 and smaller
// if window.innerWidth < 420 {
// document.querySelector(".header-text").textContent = "SJ";
// }

// let originalContent = document.querySelector(".header-text").textContent = "SARAH'S PORTFOLIO";

// $(window).resize(function() {
// if (window.innerWidth < 420) {

//     document.querySelector(".header-text").textContent = "SJ";


// } else if (window.innerWidth > 420) {
//   document.querySelector(".header-text").textContent = "Sarah's Portfolio";
   
// }
// }).resize();

//add onmouseleave to close side bar
//add dark overlay when side bar is open


 //try moving hrs on scroll- maybe with css
//onmousemove looks fun


  
