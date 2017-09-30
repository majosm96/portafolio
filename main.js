var container = document.querySelector(".container"),
  blendMode = document.getElementById("blend"),
  color = document.getElementById("color");

blendMode.addEventListener("click", function(e) {
  if (e.target != e.currentTarget) {
    var value = e.target.textContent;
    container.style.backgroundBlendMode = value;
    removeCurrentClasses(blendMode);
    e.target.classList.add("is--active");
  }
});

var removeCurrentClasses = function(parent) {
  for (var i = 0; i < parent.children.length; i++) {
    parent.children[i].className = "";
  }
};

color.addEventListener("click", function(e) {
  if (e.target != e.currentTarget) {
    var colorValue = e.target.textContent;
    removeCurrentClasses(color);
    e.target.className = "is--active";
    container.id = "c-" + colorValue;
  }
});
