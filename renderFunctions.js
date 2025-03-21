const productionChain = document.querySelector(".productionChain");

function populateProductionChain(data) {
    data.forEach(step => {
        createStepCard(step);
    });
}

function createStepCard(dataStep) {
    // création des nodes
    const stepCard = document.createElement("div");
    const stepIcon = document.createElement("div");
    const stepText = document.createElement("p");
    // contenu 
    stepIcon.innerText = dataStep.icon;
    stepText.innerText = dataStep.step;
    // style 
    stepCard.classList.add("step");
    stepIcon.classList.add("icon");
    // injection
    stepCard.appendChild(stepIcon);
    stepCard.appendChild(stepText);
    productionChain.appendChild(stepCard);
}

