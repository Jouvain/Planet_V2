// #################################### affichage conditionnel des flux via le menu ###########################################
function displayBand(bandName) {
    const band = document.querySelector(`.flow-band-${bandName}`);
    band.style.visibility = band.style.visibility == "hidden" ? "visible" : "hidden";
    if(band.style.visibility == "visible" && band.classList.contains("active")) {
        displayArrowsBand(bandName);
    } else {
        hideArrowsBand(bandName);
    }
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
   if(displayMode == "hidden") {
        hideArrows();
   } else {
        displayArrows(fluxData.years[0].productionSteps[0]);
   }
   
}


// ################################# affichage activable des échanges selon #######################################################

function switchDisplayArrows(productionStep) {
    const arrowheads = document.querySelectorAll(".arrowhead");
    // arrowheads.forEach(arrowhead => {
    //     arrowhead.style.visibility = arrowhead.style.visibility == "hidden" ? "visible" : "hidden";
    // })
    const arrows = document.querySelectorAll(".arrow");
    // arrows.forEach(arrow => {
    //     arrow.style.visibility = arrow.style.visibility == "hidden" ? "visible" : "hidden";
    // })
    for(let key in productionStep.get) {
        console.log(key)
        const band = document.querySelector(`.flow-band-${key}`);
        console.log(band);
        if(band.classList.contains("active")) {
            displayArrowsBand(key);
        }
   }
}
function displayArrows(productionStep) {
    for(let key in productionStep.get) {
        const band = document.querySelector(`.flow-band-${key}`);
        if(band.classList.contains("active") && band.style.visibility == "visible") {
            displayArrowsBand(key);
        }
   }
}
function hideArrows() {
    const arrowheads = document.querySelectorAll(".arrowhead");
    arrowheads.forEach(arrowhead => {
        arrowhead.style.visibility = "hidden";
        console.log(arrowhead)
    })
    const arrows = document.querySelectorAll(".arrow");
    arrows.forEach(arrow => {
        arrow.style.visibility = "hidden";
    })
}



function switchDisplayArrowsBand(fluxKey) {
    
    const arrowheads = document.querySelectorAll(".arrowhead");
    arrowheads.forEach(arrowhead => {
            if(arrowhead.classList.contains(`arrow-${fluxKey}`)) {
                arrowhead.style.visibility = arrowhead.style.visibility == "hidden" ? "visible" : "hidden";
            }
    })
    const arrows = document.querySelectorAll(".arrow");
    arrows.forEach(arrow => {
        if(arrow.classList.contains(`arrow-${fluxKey}`)){
            arrow.style.visibility = arrow.style.visibility == "hidden" ? "visible" : "hidden";
        }
    })
}
function displayArrowsBand(fluxKey) {
    const arrowheads = document.querySelectorAll(".arrowhead");
    arrowheads.forEach(arrowhead => {
            if(arrowhead.classList.contains(`arrow-${fluxKey}`)) {
                arrowhead.style.visibility = "visible";
            }
    })
    const arrows = document.querySelectorAll(".arrow");
    arrows.forEach(arrow => {
        if(arrow.classList.contains(`arrow-${fluxKey}`)){
            arrow.style.visibility = "visible";
        }
    })
}
function hideArrowsBand(fluxKey) {
    const arrowheads = document.querySelectorAll(".arrowhead");
    arrowheads.forEach(arrowhead => {
            if(arrowhead.classList.contains(`arrow-${fluxKey}`)) {
                arrowhead.style.visibility = "hidden";
            }
    })
    const arrows = document.querySelectorAll(".arrow");
    arrows.forEach(arrow => {
        if(arrow.classList.contains(`arrow-${fluxKey}`)){
            arrow.style.visibility = "hidden";
        }
    })
}


// ################################ activation des flux ###############################################################

/**
 * Active l'animation de remplissage pour une bande spécifique
 * @param {string} flowKey - La clé de la bande à activer (ex: 'eau', 'minerai')
 */
function activateBand(flowKey) {
    const band = document.querySelector(`.flow-band-${flowKey}`);
    if (band) {
      // Assurez-vous que la bande est visible
      band.style.visibility = 'visible';
      
      // Ajoutez la classe active pour déclencher l'animation
      
      if(band.classList.contains("active")) {
        band.classList.add("deactivated");
        // Optionnel: Retirer la classe après l'animation pour permettre de la rejouer
        setTimeout(() => {
            band.classList.remove('deactivated');
        }, 1000); // Durée correspondant à celle de l'animation
      }
      band.classList.toggle('active');

    }
}

function activateAllBands() {
    const bands = querySelectorAll(".flow-band");
    bands.forEach(band => {
        band.classList.add("active");
    })
}

function deactivateAllBands() {
    const bands = querySelectorAll(".flow-band");
    bands.forEach(band => {
        band.classList.remove("active");
    })
}

function switchActivationAllBands(onOff) {
    const bands = document.querySelectorAll(".flow-band");
    bands.forEach(band => {
        if(onOff) {
            band.classList.remove("active");
        } else {
            band.classList.add("active"); 
        }
    })
    if(onOff) {
        hideArrows(); 
    } else {
        displayArrows(fluxData.years[0].productionSteps[0]);
    }
}
