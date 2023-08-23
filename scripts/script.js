function switchNavbar() {
  if (switchStatus == 0) {
    flexNavbarVer.style.display = "none";

    flexNavbarVerCompact.style.display = "flex";
    overallGridContainer.classList.add("compact");

    switchStatus = 1;
  } else if (switchStatus == 1) {
    flexNavbarVer.style.display = "flex";

    flexNavbarVerCompact.style.display = "none";
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
