//Variables
var menuOpen = document.getElementById("menu");
var menuClose = document.getElementById("hideMenu");
var menuBox = document.getElementById("navigation");


//Function toogle Menu

function toggleMenu() {

  if (menuBox.style.display == "block") {
    // if is menuBox displayed, hide it
    menuBox.style.display = "none";
  } else {
    // if is menuBox hidden, display it
    menuBox.style.display = "block";
  }
}

function closeToggleMenu() {
  menuBox.style.display == "block";
}


function menuItemsClose() {
  var menuItems = [].slice.call(document.getElementsByClassName("menuItem"));

  menuItems.forEach(function(element, index) {
    element.addEventListener("click", function() {
      menuBox.style.display = "none";
      console.log("adesd");
    });
  });
}

var project= document.getElementById("projectInfo");

function mouseOver() {  
  document.getElementById("project-img").style.opacity = "0.0";
}

function mouseOut() {  
  document.getElementById("project-img").style.opacity = "0.8";
}

//Calls Menu
menuOpen.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);
menuItemsClose();

project.addEventListener("mouseover", mouseOver);
project.addEventListener("mouseout", mouseOut);

// function hoverBg(img) {

//   var projectItems = [].slice.call(document.getElementsByClassName("project"));

//   projectItems.forEach(function(element, index) {

//     element.addEventListener("mouseover", function() {
//       img.style.opacity = "0.0";
//     });

//     element.addEventListener("mouseout", function() {
//       img.style.opacity = "0.8";
//     });

//   });
// }

// var img01 = document.getElementById("project-img01");
// var img02 = document.getElementById("project-img02");
// // var img01 = document.getElementById("project-img");
// // var img01 = document.getElementById("project-img");
// // var img01 = document.getElementById("project-img");

// hoverBg(img01);
// hoverBg(img02);