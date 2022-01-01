const hamburgerIcon = document.querySelector("svg");
const hamburgerDrop = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const darkOverlay = document.querySelector(".overlay");
const hamburgerLnk = document.querySelectorAll(".hamburger ul li");
const hamburgerLnkArr = Array.from(hamburgerLnk);


function handleMenuClick() {
    hamburgerDrop.style.width = "250px";
    darkOverlay.style.display = "block";
}

function handleSideNavClose() {
    hamburgerDrop.style.width = "0px";
    darkOverlay.style.display = "none";
}

hamburgerIcon.addEventListener("mouseover", handleMenuClick);
closeBtn.addEventListener("click", handleSideNavClose);
darkOverlay.addEventListener("mouseenter", handleSideNavClose);
darkOverlay.addEventListener("click", handleSideNavClose);

for (let x of hamburgerLnkArr) {
  addEventListener("click", handleSideNavClose);
}

// ----------slick slider jQuery-------------
$('#slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    swipe: true,
    centerPadding: 40,
    centerMode: true,
    // fade: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          fade: true,
        }
      },
    ]
})
