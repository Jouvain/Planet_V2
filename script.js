async function init() {
    populateProductionChain(fluxData);
}

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", ()=> {
    menu.style.display === "none" ? menu.style.display = "unset" : menu.style.display = "none";
})

init();