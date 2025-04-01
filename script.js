async function init() {
    populateProductionChain(fluxData, 2025);
    populateBands(fluxData.years[0].productionSteps[0])
}

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", ()=> {
    menu.style.display === "none" ? menu.style.display = "unset" : menu.style.display = "none";
})

init();