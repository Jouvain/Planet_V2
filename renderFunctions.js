




// ########################################## génération de la chaine de production #################################
function populateProductionChain(fluxData, chosenYear) {
    const year = fluxData.years.find((element) => element.year == chosenYear);
    year.productionSteps.forEach(productionStep => {
        let element = createStepCard(productionStep);
        productionChain.appendChild(element);
    });
}

function createStepCard(productionStep) {
    // création des nodes
    const stepCard = document.createElement("div");
    const stepIcon = document.createElement("div");
    const stepText = document.createElement("p");
    // contenu 
    stepIcon.innerText = productionStep.icon;
    stepText.innerText = productionStep.step;
    // style 
    stepCard.classList.add("step");
    stepIcon.classList.add("icon");
    // injection
    stepCard.appendChild(stepIcon);
    stepCard.appendChild(stepText);
    return stepCard;
}

// ##################################################### génération des flux / strates ###################################################
function populateBands(productionStep) {
    let i = 1;
    for(let key in productionStep.get) {
        let element = createBand(key);
        if(i >= 5) {
            main.prepend(element);
        } else {
            main.append(element);
        }
        i++
    }
}

function createBand(flowKey) {
    const band = document.createElement("div");
    band.classList.add("flow-band", `flow-band-${flowKey}`);
    band.style.visibility = "hidden";
    const bandLabel = document.createElement("div");
    bandLabel.classList.add("band-label");
    bandLabel.innerText = flowKey;
    const bandContent = document.createElement("div");
    bandContent.classList.add("band-content");
    band.appendChild(bandLabel);
    band.appendChild(bandContent);
    return band;
}


// ####################################### alimentation dynamique du menu #########################################

function populateMenu(productionStep) {
    for(let key in productionStep.get) {
        let element = createMenuItem(key);
        element.addEventListener("click", (e)=> {
            displayBand(e.target.innerText);
            console.log(e.target.innerText);
        })
        menu.append(element);
    }
    let element = createMenuItem("TOUS");
    element.addEventListener("click", ()=> {
        displayAllBands();
    })
    menu.append(element);
}

function createMenuItem(flowKey) {
    const menuItem = document.createElement("li");
    menuItem.classList.add("menuItem");
    menuItem.innerText = flowKey;
    return menuItem;
}


