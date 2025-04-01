// #################################### affichage conditionnel des flux via le menu ###########################################
function displayBand(bandName) {
    const band = document.querySelector(`.flow-band-${bandName}`);
    band.style.visibility = band.style.visibility == "hidden" ? "visible" : "hidden";
}

function displayAllBands() {
   const bands = document.querySelectorAll(".flow-band");
   let displayMode = "hidden";
   bands.forEach(band => {
        if(band.style.visibility === "hidden") {
            displayMode = "visible";
        }
   })
   bands.forEach(band => {
       band.style.visibility = displayMode;
   })
}