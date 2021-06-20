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


//playing line animation under titles of each section
// const lines = document.querySelectorAll(".titles");
// const linesArr = Array.from(lines);

// function showLines() { 
//   linesArr[i].style.display = "block";
//   console.log("showLines function works");
// }

// function isInViewport(element) {
//   var rect = element.getBoundingClientRect();
//   var html = document.documentElement;
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || html.clientHeight) &&
//     rect.right <= (window.innerWidth || html.clientWidth)
//   );
// }

// const doIt = isInViewport(showLines);
// for (i=0; i < linesArr.length; i++) {
//   linesArr[i].addEventListener("scroll", isInViewport); 
//   console.log("listening for scroll");  
//   showLines();
// }

// function isInViewport(linesArr) {
//   var rect = linesArr.getBoundingClientRect();
//   var html = document.documentElement;
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || html.clientHeight) &&
//     rect.right <= (window.innerWidth || html.clientWidth)
//   );
//   showLines();
// }

// function isInViewport(e) {
//   console.log("isInViewport function works");
//   if (e.target === linesArr[i]) {
//     console.log("i see first title");
//    showLines();
//   }
// }
  // else if (e.target === linesArr[1]) {
  //   console.log("i see second title");
  //   showLines();
  // }




  // grab all the headings
 // loop over them 
 // for each one, check if they isInViewport is true for the element
 // if it's true, trigger animation
 

//the below JS works, I just didn't like the way it looked!
// const cardsPopup = document.querySelector(".cards");
// const project = document.querySelectorAll(".project");
// const projectArr = Array.from(project);
//querySelectorAll is treating .project as a NodeList which should function like and array in the for loop. But I had to convert it to an array for it to work.
// function hideCard(e) {
//   console.log("see ya");
//   cardsPopup.style.display = "none";
// }

// for (let i = 0; i < projectArr.length; i++) {
//   projectArr[i].addEventListener('mouseenter', showCard);
//   projectArr[i].addEventListener('mouseleave', hideCard);
// }
// function showCard(e) {
//   console.log("howdy");
  
//   if (e.target === projectArr[0]) {
//     cardsPopup.style.display = "block";
//     cardsPopup.innerText = "Does this work yet 1?";
//     console.log("Does this work yet? a");
  
//   } else if (e.target === projectArr[1]) {
//     cardsPopup.innerText = "Does the second one work yet 2?";
//   cardsPopup.style.display = "block";
//   console.log("Does this work yet? b");
    
//   }  else if (e.target === projectArr[2]) {
//     cardsPopup.innerText = "Does the third one work yet 3?";
//   cardsPopup.style.display = "block";
//   console.log("Does this work yet? c");
    
//   }  else if (e.target === projectArr[3]) {
//     cardsPopup.innerText = "Does the fourth one work yet 4?";
//   cardsPopup.style.display = "block";
//   console.log("Does this work yet? d");
    
//   }  else if (e.target === projectArr[4]) {
//     cardsPopup.innerText = "Does the fifth one work yet 5?";
//   cardsPopup.style.display = "block";
//   console.log("Does this work yet? e");
    
//   }  else if (e.target === projectArr[5]) {
//     cardsPopup.innerText = "Does the sixth one work yet 6?";
//   cardsPopup.style.display = "block";
//   console.log("Does this work yet? f");
//   }

// }




  
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


