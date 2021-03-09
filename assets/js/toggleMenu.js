function toggleMenu() {
  var nav = document.getElementById("main-navbar");
  if (nav.className === "navbar") {
    nav.classList.add('responsive');
  } else {
    nav.classList.remove('responsive');
  }
}