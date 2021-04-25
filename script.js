const hamburgerIcon = document.querySelector("svg");
const hamburgerDrop = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const darkOverlay = document.querySelector(".overlay");

function handleMenuClick() {
    hamburgerDrop.style.width = "250px";
    darkOverlay.style.display = "block";
}

function handleSideNavClose() {
    hamburgerDrop.style.width = "0px";
    darkOverlay.style.display = "none";
}

hamburgerIcon.addEventListener("click", handleMenuClick);
closeBtn.addEventListener("click", handleSideNavClose);
hamburgerDrop.addEventListener("mouseleave", handleSideNavClose);

//stop listening for mouse leave at screen size 990 and up
const mediaQueryList = window.matchMedia("(min-width: 990px)");

 mediaQueryList.removeEventListener("mouseleave", handleSideNavClose);

   if (mediaQueryList.matches) {
     mediaQueryList.removeEventListener("mouseleave", handleSideNavClose);
  }
//above may not work right, still working out kinks



//does using scrollIntoView for nav benefit this project?

//add the sticky nav bar when scrolling past circle section?

 //try moving hrs on scroll- maybe with css
//onmousemove looks fun


const cardsPopup = document.querySelector(".cards");
const project = document.querySelectorAll(".project");
const projectArr = Array.from(project);
//querySelectorAll is treating .project as a NodeList which should function like and array in the for loop. But I had to convert it to an array for it to work.
function hideCard(e) {
  console.log("see ya");
  cardsPopup.style.display = "none";
}

for (let i = 0; i < projectArr.length; i++) {
  projectArr[i].addEventListener('mouseenter', showCard);
  projectArr[i].addEventListener('mouseleave', hideCard);
}
function showCard(e) {
  console.log("howdy");
  
  if (e.target === projectArr[0]) {
    cardsPopup.style.display = "block";
    cardsPopup.innerText = "Does this work yet 1?";
    console.log("Does this work yet? a");
  
  } else if (e.target === projectArr[1]) {
    cardsPopup.innerText = "Does the second one work yet 2?";
  cardsPopup.style.display = "block";
  console.log("Does this work yet? b");
    
  }  else if (e.target === projectArr[2]) {
    cardsPopup.innerText = "Does the third one work yet 3?";
  cardsPopup.style.display = "block";
  console.log("Does this work yet? c");
    
  }  else if (e.target === projectArr[3]) {
    cardsPopup.innerText = "Does the fourth one work yet 4?";
  cardsPopup.style.display = "block";
  console.log("Does this work yet? d");
    
  }  else if (e.target === projectArr[4]) {
    cardsPopup.innerText = "Does the fifth one work yet 5?";
  cardsPopup.style.display = "block";
  console.log("Does this work yet? e");
    
  }  else if (e.target === projectArr[5]) {
    cardsPopup.innerText = "Does the sixth one work yet 6?";
  cardsPopup.style.display = "block";
  console.log("Does this work yet? f");
  }

}




  
// (function() {
//   var elements;
//   var windowHeight;

//   function init() {
//     elements = document.querySelectorAll('.hidden');
//     windowHeight = window.innerHeight;
//   }

//   function checkPosition() {
//     for (var i = 0; i < elements.length; i++) {
//       var element = elements[i];
//       var positionFromTop = elements[i].getBoundingClientRect().top;

//       if (positionFromTop - windowHeight <= 0) {
//         element.classList.add('titles');
//         element.classList.remove('hidden');
//       }
//     }
//   }

//   window.addEventListener('scroll', checkPosition);
//   window.addEventListener('resize', init);

//   init();
//   checkPosition();
// })();