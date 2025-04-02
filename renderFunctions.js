




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

// ###################################### génération des flèches ####################################################

function drawArrows(fluxData, chosenYear, getOrSend) {
    const svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgContainer.setAttribute("class", "arrow-svg");
    document.body.appendChild(svgContainer);

    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgContainer.appendChild(defs); // Conteneur pour les marqueurs de flèche

    const year = fluxData.years.find(y => y.year == chosenYear);
    if (!year) return;

    year.productionSteps.forEach((step, index) => {
        const stepElement = document.querySelectorAll(".step")[index];
        if (!stepElement) return;

        const stepRect = stepElement.getBoundingClientRect();
        // parcours selon ensemble cherché get ou send 
        const keys = getOrSend == "get" ? Object.keys(step.get) : Object.keys(step.send);
        // const keys = Object.keys(step.get);
        const stepWidth = stepRect.width;
        // const stepSegment = stepWidth / (keys.length + 1); // Espacement horizontal des flèches
        const stepSegment = stepWidth / ((keys.length+2)*0.6); // Espacement horizontal des flèches
        keys.forEach((fluxKey, i) => {
            const bandElement = document.querySelector(`.flow-band-${fluxKey}`);
            if (!bandElement) return;

            const bandRect = bandElement.getBoundingClientRect();
            // const value = step.get[fluxKey];
            const value = getOrSend == "get" ? step.get[fluxKey] : step.send[fluxKey];
            if (value === 0) return; // Si la valeur est 0, ne pas dessiner la flèche

            let x1 = stepRect.left + stepSegment * (i + 1); // Position horizontale décalée
            let x2 = x1; // Garde une flèche verticale
            let y1, y2;

            if (bandRect.top < stepRect.top) {
                // Flow-band au-dessus du step → flèche descendante
                y1 = bandRect.bottom;
                y2 = stepRect.top;
            } else {
                // Flow-band en dessous du step → flèche montante
                y1 = bandRect.top;
                y2 = stepRect.bottom;
            }

            const color = getFlowColor(fluxKey);
            const strokeWidth = Math.max(2, value / 10); // Largeur de la flèche
            const arrowId = `arrowhead-${fluxKey}`;
            
            // Vérifie si le marqueur existe déjà, sinon on le crée
            if (!document.getElementById(arrowId)) {
                const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
                marker.setAttribute("id", arrowId);
                marker.setAttribute("viewBox", "0 0 10 10");  // Définir la vue pour le marqueur
            
                // Fixer la taille du marqueur à une taille fixe (par exemple 10x10 pixels)
                marker.setAttribute("markerWidth", "3");
                marker.setAttribute("markerHeight", "3");
            
                // Positionner le marqueur à la fin de la ligne
                marker.setAttribute("refX", "5");  // Centrer la pointe du triangle (X)
                marker.setAttribute("refY", "5");  // Centrer la pointe du triangle (Y)
            
                // Garder la rotation automatique pour pointer la flèche vers la fin de la ligne
                if(getOrSend == "get") {
                    marker.setAttribute("orient", "auto");
                } else {
                    marker.setAttribute("orient", "auto-start-reverse");
                }
                
            
                const arrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                // Garder un triangle de taille fixe (par exemple 6x6 pixels)
                arrowPath.setAttribute("d", "M 0 0 L 10 5 L 0 10 Z"); // Triangle
                arrowPath.setAttribute("fill", color); // Appliquer la couleur du flux
            
                marker.appendChild(arrowPath);
                defs.appendChild(marker);
            }
            
            // Création de la ligne avec un strokeWidth variable
            const arrow = document.createElementNS("http://www.w3.org/2000/svg", "line");
            arrow.setAttribute("x1", x1);
            arrow.setAttribute("y1", y1);
            arrow.setAttribute("x2", x2);
            arrow.setAttribute("y2", y2);
            arrow.setAttribute("stroke", color);
            arrow.setAttribute("stroke-width", strokeWidth);  // Largeur de la ligne (affecte uniquement la ligne)
            if(getOrSend == "get") {
                arrow.setAttribute("marker-end", `url(#${arrowId})`); // Utilise le marqueur pour la pointe de la flèche
            } else {
                arrow.setAttribute("marker-start", `url(#${arrowId})`); // Utilise le marqueur pour la pointe de la flèche
            }
            
            
            svgContainer.appendChild(arrow);
            
        });
    });
}







function getFlowColor(fluxKey) {
    const colors = {
        "eau": "#4F36CF",
        "minerai": "#cf5c36",
        "gaz": "#efc88b",
        "petrole": "#050517",
        "energie_fossile": "#d3d5d7",
        "energie_renouvelable": "#3e5622",
        "recyclage": "#f4e3b2",
        "reemploi": "#846c5b",
        "atmosphere": "#846c5b"
    };
    return colors[fluxKey] || "black";
}

