var menuOpen = document.getElementById("menu");
var menuClose = document.getElementById("hideMenu");

function toggleMenu() {
  var menuBox = document.getElementById('navigation');

  if (menuBox.style.display == "block") {
    // if is menuBox displayed, hide it
    menuBox.style.display = "none";
  } else {
    // if is menuBox hidden, display it
    menuBox.style.display = "block";
  }
}

menuOpen.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);