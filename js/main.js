
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

var menuToggle = document.getElementById('menu');
var menuToggle02 = document.getElementById('hideMenu');

menuToggle.addEventListener("click", toggleMenu);
menuToggle02.addEventListener("click", toggleMenu);