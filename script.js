async function init() {
    populateProductionChain(fluxData, 2025);
    populateBands(fluxData.years[0].productionSteps[0]);
    populateMenu(fluxData.years[0].productionSteps[0]);
    drawArrows(fluxData, 2025, "send");
    drawArrows(fluxData, 2025, "get");
}


// ##################################### éléments du DOM et variables globales ############################################
const productionChain = document.querySelector(".productionChain");
const main = document.querySelector(".main");
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
menu.style.display = "none";





menuToggle.addEventListener("click", ()=> {
    menu.style.display === "none" ? menu.style.display = "unset" : menu.style.display = "none";
})




init();