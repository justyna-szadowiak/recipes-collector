const menu = document.getElementById("menu");
const toggle = document.getElementById("toggle");
const minWidth = 375;

function toggleMenu() {
    !menu.classList.contains("hidden") ? menu.classList.add("hidden") : menu.classList.remove("hidden");
}

toggle.addEventListener("click", toggleMenu);

function onResize() {
    (window.innerWidth <= minWidth) ? menu.classList.add("hidden") : menu.classList.remove("hidden");
}

window.addEventListener("resize", onResize, false);

onResize();