var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function toggleMore(id, button) {
  const content = document.getElementById(id);
  const isVisible = content.style.display === "block";
  content.style.display = isVisible ? "none" : "block";
  button.textContent = isVisible ? "Voir plus" : "Voir moins";
}
var sidemenu = document.getElementById("sidemenu");

function openMenu() {
  sidemenu.style.right = "0";
}
function closeMenu() {
  sidemenu.style.right = "-200px";
}
