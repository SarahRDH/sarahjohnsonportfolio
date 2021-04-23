const hamburgerIcon = document.querySelector("svg");
const hamburgerDrop = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

function handleMenuClick() {
    hamburgerDrop.style.width = "250px";

}

function handleSideNavClose() {
    hamburgerDrop.style.width = "0px";

}

hamburgerIcon.addEventListener("mouseover", handleMenuClick);
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


//hide and show project cards on hover
//grab each project html
//grab each project card html or as an array
//function .cards css and use .className
//function could enter text into html with this also...use innerText
//function change .cards to display: block
//event listener mouseover and toggle on/off .cards

const cardsPopup = document.querySelectorAll(".cards");
const project = document.querySelectorAll(".project");


for (let i = 0; i < project.length; i++) {
  project[i].addEventListener('mouseover', showCard);
}
function showCard(e) {
  console.log("howdy");
  
  if (e.target.class === "p1") {
    cardsPopup.style.display = "block";
    cardsPopup.p.innerText = "Does this work yet?";
    console.log("Does this work yet?");
  
  } else if (e.target.class === "p2") {
    cardsPopup.p.innerText = "Does the second one work yet?";
  cardsPopup.style.display = "block";
    
  }  else if (e.target.class === "p3") {
    cardsPopup.p.innerText = "Does the third one work yet?";
  cardsPopup.style.display = "block";
    
  }  else if (e.target.class === "p4") {
    cardsPopup.p.innerText = "Does the fourth one work yet?";
  cardsPopup.style.display = "block";
    
  }  else if (e.target.class === "p5") {
    cardsPopup.p.innerText = "Does the fifth one work yet?";
  cardsPopup.style.display = "block";
    
  }  else if (e.target.class === "p6") {
    cardsPopup.p.innerText = "Does the sixth one work yet?";
  cardsPopup.style.display = "block";
  }
    
}


// projectOne.addEventListener("mouseover", showCard);
// projectTwo.addEventListener("mouseover", showCard);
// projectThree.addEventListener("mouseover", showCard);
// projectFour.addEventListener("mouseover", showCard);
// projectFive.addEventListener("mouseover", showCard);
// projectSix.addEventListener("mouseover", showCard);
 
// const btns = document.querySelectorAll('.btn');
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', updateText);
// }
// function updateText(evt) {
//   console.log(evt.target);
//   if (evt.target.id === "one") {
//     document.querySelector('#btn-text').textContent = "First button clicked!";
//   } else if (evt.target.id === "two") {
//     document.querySelector('#btn-text').textContent = "Second button clicked!";
//   }
// }
  
