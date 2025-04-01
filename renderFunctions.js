const productionChain = document.querySelector(".productionChain");
const main = document.querySelector(".main");

function populateProductionChain(fluxData, chosenYear) {
    const year = fluxData.years.find((element) => element.year == chosenYear);
    console.log(year.productionSteps[0].get)
    year.productionSteps.forEach(productionStep => {
        createStepCard(productionStep);
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
    productionChain.appendChild(stepCard);
}

function populateBands(productionStep) {
    let i = 1;
    for(let key in productionStep.get) {
        createBand(key, i);
        i++
    }
}

function createBand(flowKey, i) {
    console.log(flowKey)
    const band = document.createElement("div");
    band.classList.add("flow-band", `flow-band-${flowKey}`);
    const bandLabel = document.createElement("div");
    bandLabel.classList.add("band-label");
    bandLabel.innerText = flowKey;
    const bandContent = document.createElement("div");
    bandContent.classList.add("band-content");
    band.appendChild(bandLabel);
    band.appendChild(bandContent);
    if(i >= 5) {
        main.prepend(band);
    } else {
        main.append(band);
    }
}
