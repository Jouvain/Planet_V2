async function init() {
    populateProductionChain(fluxData, 2025);
    createTimeline(fluxData);
    populateBands(fluxData.years[0].productionSteps[0]);
    populateMenu(fluxData.years[0].productionSteps[0]);
    drawGetArrows(fluxData, 2025);
    drawSendArrows(fluxData, 2025);
}

function renderYear(chosenYear, fluxData) {


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