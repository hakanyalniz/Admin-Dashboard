function switchNavbar() {
  if (switchStatus == 0) {
    flexNavbarVer.style.zIndex = -1;
    flexNavbarVer.style.opacity = 0;

    flexNavbarVerCompact.style.zIndex = 0;
    flexNavbarVerCompact.style.opacity = 1;
    overallGridContainer.classList.add("compact");

    switchStatus = 1;
  } else if (switchStatus == 1) {
    flexNavbarVer.style.zIndex = 0;
    flexNavbarVer.style.opacity = 1;

    flexNavbarVerCompact.style.zIndex = -1;
    flexNavbarVerCompact.style.opacity = 0;
    overallGridContainer.classList.remove("compact");

    switchStatus = 0;
  }
}

let hamburgerButton = document.getElementById("hamburger-menu");
let overallGridContainer = document.querySelector(".overall-grid-container");
let flexNavbarVer = document.querySelector(".flex-navbar-ver");
// The below one is the compact version
let flexNavbarVerCompact = document.querySelector(".flex-navbar-ver-compact");
// 0 means default, 1 means compact
let switchStatus = 0;

hamburgerButton.addEventListener("click", switchNavbar);
