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
