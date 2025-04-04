




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

    stepCard.addEventListener("click", function() {
        createModal(productionStep);
    });

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
    band.addEventListener("click", (event)=> {
        event.stopPropagation();
        activateBand(flowKey);
        if(band.classList.contains("active")) {
            displayArrowsBand(flowKey);
        } else {
            hideArrowsBand(flowKey);
        }
        
    })
    return band;
}


// ####################################### alimentation dynamique du menu #########################################

function populateMenu(productionStep) {
    for(let key in productionStep.get) {
        let element = createMenuItem(key);
        element.addEventListener("click", (e)=> {
            displayBand(e.target.innerText);
        })
        menu.append(element);
    }
    let globalItemName = "TOUS";
    let element = createMenuItem(globalItemName, globalItemName);
    element.addEventListener("click", ()=> {
        displayAllBands();
    })
    menu.append(element);
}

function createMenuItem(flowKey, globalItemName) {
    const menuItem = document.createElement("li");
    menuItem.classList.add("menuItem");

    const colorDot = document.createElement("span");
    colorDot.classList.add("colorDot");
    colorDot.style.backgroundColor = getFlowColor(flowKey);

    if(flowKey != globalItemName) {
        menuItem.append(colorDot);
    }

    menuItem.append(document.createTextNode(flowKey));
    return menuItem;
}

// ###################################### génération des flèches ####################################################


function drawGetArrows(fluxData, chosenYear) {
    let previousContainer = document.querySelector(".getArrows");
    if(previousContainer) {
        previousContainer.remove();
    }
    const svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgContainer.setAttribute("class", "arrow-svg");
    svgContainer.classList.add("getArrows");

    document.body.appendChild(svgContainer);

    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.classList.add("arrowheads");
    defs.style.visibility = "hidden";
    svgContainer.appendChild(defs); // Conteneur pour les marqueurs de flèche

    const year = fluxData.years.find(y => y.year == chosenYear);
    if (!year) return;

    year.productionSteps.forEach((step, index) => {
        const stepElement = document.querySelectorAll(".step")[index];
        if (!stepElement) return;

        const stepRect = stepElement.getBoundingClientRect();
        // parcours selon ensemble cherché get ou send 
        const keys = Object.keys(step.get);
        // const keys = Object.keys(step.get);
        const stepWidth = stepRect.width;
        const stepSegment = stepWidth / ((keys.length)); // Espacement horizontal des flèches
        keys.forEach((fluxKey, i) => {
            const bandElement = document.querySelector(`.flow-band-${fluxKey}`);
            if (!bandElement) return;

            const bandRect = bandElement.getBoundingClientRect();
            const value = step.get[fluxKey];
            if (value === 0) return; // Si la valeur est 0, ne pas dessiner la flèche

            let x1 = stepRect.left + stepSegment * (i + 1) + stepSegment/2; // Position horizontale décalée
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
            const arrowId = `getArrowhead-${fluxKey}`;
            
            // Vérifie si le marqueur existe déjà, sinon on le crée
            if (!document.getElementById(arrowId)) {
                const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
                marker.setAttribute("id", arrowId);
                marker.classList.add(`arrow-${fluxKey}`);
                marker.classList.add("arrowhead");
                marker.style.visibility = "hidden";
                marker.setAttribute("viewBox", "0 0 10 10");  // Définir la vue pour le marqueur
            
                // Fixer la taille du marqueur à une taille fixe (par exemple 10x10 pixels)
                marker.setAttribute("markerWidth", "3");
                marker.setAttribute("markerHeight", "3");
            
                // Positionner le marqueur à la fin de la ligne
                marker.setAttribute("refX", "5");  // Centrer la pointe du triangle (X)
                marker.setAttribute("refY", "5");  // Centrer la pointe du triangle (Y)
            
                // Garder la rotation automatique pour pointer la flèche vers la fin de la ligne
               
                marker.setAttribute("orient", "auto");

                
            
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
            arrow.classList.add("arrow");
            arrow.classList.add(`arrow-${fluxKey}`);
            arrow.style.visibility = "hidden";
            arrow.setAttribute("marker-end", `url(#${arrowId})`); // Utilise le marqueur pour la pointe de la flèche
            arrow.setAttribute("pointer-events", "stroke");
            svgContainer.appendChild(arrow);

            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.classList.add(`tooltip-${fluxKey}`);
            tooltip.innerText = `${value}`;
            // mettre positionnement en place vis-ç-vis flèche
            tooltip.style.position = "absolute";
            tooltip.style.left = `${x1}px`;
            tooltip.style.top = `${bandRect.top}px`;
            main.append(tooltip);

            arrow.addEventListener("mouseenter", ()=> {
                if(arrow.style.visibility == "visible" && !tooltip.classList.contains("tooltip-activate")) {
                    tooltip.classList.toggle("tooltip-visible");
                }
            })
            arrow.addEventListener("mouseleave", ()=> {
                if(arrow.style.visibility == "visible" && !tooltip.classList.contains("tooltip-activate")) {
                    tooltip.classList.toggle("tooltip-visible");
                }
            })
            
        });
    });
}


function drawSendArrows(fluxData, chosenYear) {
    let previousContainer = document.querySelector(".sendArrows");
    if(previousContainer) {
        previousContainer.remove();
    }
    let svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgContainer.setAttribute("class", "arrow-svg");
    svgContainer.classList.add("sendArrows");

    document.body.appendChild(svgContainer);

    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.classList.add("arrowheads");
    defs.style.visibility = "hidden";
    svgContainer.appendChild(defs); // Conteneur pour les marqueurs de flèche

    const year = fluxData.years.find(y => y.year == chosenYear);
    if (!year) return;

    year.productionSteps.forEach((step, index) => {
        const stepElement = document.querySelectorAll(".step")[index];
        if (!stepElement) return;

        const stepRect = stepElement.getBoundingClientRect();
        // parcours selon ensemble cherché get ou send 
        const keys = Object.keys(step.send);
        // const keys = Object.keys(step.get);
        const stepWidth = stepRect.width;
        const stepSegment = stepWidth / ((keys.length)); // Espacement horizontal des flèches
        keys.forEach((fluxKey, i) => {
            const bandElement = document.querySelector(`.flow-band-${fluxKey}`);
            if (!bandElement) return;

            const bandRect = bandElement.getBoundingClientRect();
            const value = step.send[fluxKey];
            if (value === 0) return; // Si la valeur est 0, ne pas dessiner la flèche

            let x1 = stepRect.left + stepSegment * (i); // Position horizontale décalée
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
            const arrowId = `sendArrowhead-${fluxKey}`;
            
            // Vérifie si le marqueur existe déjà, sinon on le crée
            
                const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
                marker.setAttribute("id", arrowId);
                marker.classList.add(`arrow-${fluxKey}`);
                marker.classList.add("arrowhead");
                marker.style.visibility = "hidden";
                marker.setAttribute("viewBox", "0 0 10 10");  // Définir la vue pour le marqueur
            
                // Fixer la taille du marqueur à une taille fixe (par exemple 10x10 pixels)
                marker.setAttribute("markerWidth", "3");
                marker.setAttribute("markerHeight", "3");
            
                // Positionner le marqueur à la fin de la ligne
                marker.setAttribute("refX", "5");  // Centrer la pointe du triangle (X)
                marker.setAttribute("refY", "5");  // Centrer la pointe du triangle (Y)
            
                // Garder la rotation automatique pour pointer la flèche vers la fin de la ligne
               
                marker.setAttribute("orient", "auto-start-reverse");

                
            
                const arrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                // Garder un triangle de taille fixe (par exemple 6x6 pixels)
                arrowPath.setAttribute("d", "M 0 0 L 10 5 L 0 10 Z"); // Triangle
                arrowPath.setAttribute("fill", color); // Appliquer la couleur du flux
            
                marker.appendChild(arrowPath);
                defs.appendChild(marker);
            
            
            // Création de la ligne avec un strokeWidth variable
            const arrow = document.createElementNS("http://www.w3.org/2000/svg", "line");
            arrow.setAttribute("x1", x1);
            arrow.setAttribute("y1", y1);
            arrow.setAttribute("x2", x2);
            arrow.setAttribute("y2", y2);
            arrow.setAttribute("stroke", color);
            arrow.setAttribute("stroke-width", strokeWidth);  // Largeur de la ligne (affecte uniquement la ligne)
            arrow.classList.add("arrow");
            arrow.classList.add(`arrow-${fluxKey}`);
            arrow.style.visibility = "hidden";
            arrow.setAttribute("marker-start", `url(#${arrowId})`); // Utilise le marqueur pour la pointe de la flèche
            arrow.setAttribute("pointer-events", "stroke");
            svgContainer.appendChild(arrow);

            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.classList.add(`tooltip-${fluxKey}`);
            tooltip.innerText = `${value}`;
            // mettre positionnement en place vis-ç-vis flèche
            tooltip.style.position = "absolute";
            tooltip.style.left = `${x1}px`;
            tooltip.style.top = `${bandRect.top}px`;
            main.append(tooltip);

            arrow.addEventListener("mouseenter", ()=> {
                if(arrow.style.visibility == "visible" && !tooltip.classList.contains("tooltip-activate")) {
                    tooltip.classList.toggle("tooltip-visible");
                }
            })
            arrow.addEventListener("mouseleave", ()=> {
                if(arrow.style.visibility == "visible" && !tooltip.classList.contains("tooltip-activate")) {
                    tooltip.classList.toggle("tooltip-visible");
                }
            })

        });
    });
}


function getFlowColor(fluxKey) {
    const colors = {
        "eau": getComputedStyle(document.documentElement).getPropertyValue("--color-eau").trim(),
        "minerai": getComputedStyle(document.documentElement).getPropertyValue("--color-minerai").trim(),
        "gaz": getComputedStyle(document.documentElement).getPropertyValue("--color-gaz").trim(),
        "petrole": getComputedStyle(document.documentElement).getPropertyValue("--color-petrole").trim(),
        "energie_fossile": getComputedStyle(document.documentElement).getPropertyValue("--color-energie_fossile").trim(),
        "energie_renouvelable": getComputedStyle(document.documentElement).getPropertyValue("--color-energie_renouvelable").trim(),
        "recyclage": getComputedStyle(document.documentElement).getPropertyValue("--color-recyclage").trim(),
        "reemploi": getComputedStyle(document.documentElement).getPropertyValue("--color-reemploi").trim(),
        "atmosphere": getComputedStyle(document.documentElement).getPropertyValue("--color-atmosphere").trim()
    };
    return colors[fluxKey] || "black";
}


// functionRemoveArrows(){

// }


//############################################# génération timeline ######################################################

// ########### timeline :
function createTimeline(data) {
    const timeline = document.getElementById("timeline");
    const timelineBar = document.getElementById("timeline__bar");
    const timelineProgress = document.getElementById("timeline__progress");
    timeline.querySelectorAll(".year-point, .year-label").forEach(e => e.remove());

    const years = data.years.map(y => y.year);
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);

    years.forEach((year, index) => {
        const point = document.createElement("div");
        point.classList.add("year-point");
        point.dataset.year = year;
        const percentage = ((year - minYear) / (maxYear - minYear)) * 100;
        point.style.left = `calc(${percentage}% - 7.5px)`;
        const label = document.createElement("div");
        label.classList.add("year-label");
        label.innerText = year;
        label.style.left = `calc(${percentage}%)`;
        point.addEventListener("click", () => {
            document.querySelectorAll(".year-point").forEach(p => p.classList.remove("active"));
            point.classList.add("active");
            timelineProgress.style.width = `${percentage}%`;
            drawGetArrows(fluxData,year);
            drawSendArrows(fluxData,year);
            displayArrows(fluxData.years[0].productionSteps[0]);
        });
        timeline.appendChild(point);
        timeline.appendChild(label);
    });
    document.querySelector(`.year-point[data-year="2025"]`).classList.add("active");
    const defaultPercentage = ((years[0] - minYear) / (maxYear - minYear)) * 100;
    timelineProgress.style.width = `${defaultPercentage}%`;
}


// ##################################### gestion des modales ##########################################################

function createModal(productionStep) {
    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    const modalTitle = document.createElement("h2");
    modalTitle.innerText = productionStep.step;

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("close-modal");
    closeButton.addEventListener("click", function() {
        document.body.removeChild(modalOverlay);
    });
    
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
    
    // Corps de la modal
    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    
    // Ajouter l'icône
    const modalIcon = document.createElement("div");
    modalIcon.classList.add("modal-icon");
    modalIcon.innerText = productionStep.icon;
    
    // Ajouter la description
    const modalDescription = document.createElement("div");
    modalDescription.classList.add("modal-description");
    
    if (productionStep.description) {
        modalDescription.innerHTML = productionStep.description;
    } else {
        modalDescription.innerHTML = `Description détaillée pour l'étape "${productionStep.step}"`;
    }

    // Ajouter les informations sur les flux
    const modalFluxInfo = document.createElement("div");
    modalFluxInfo.classList.add("modal-flux-info");
    const fluxInfoTitle = document.createElement("h3");
    fluxInfoTitle.innerText = "Flux associés";
    

    const getFlux = document.createElement("div");
    getFlux.classList.add("modal-subFlux");
    const sendFlux = document.createElement("div");
    sendFlux.classList.add("modal-subFlux");
    
    // Générer une liste des flux d'entrée
    if (productionStep.get) {
        const fluxTitle = document.createElement("h4");
        fluxTitle.innerText = "Consommation :";
        getFlux.appendChild(fluxTitle);
        
        const fluxList = document.createElement("ul");
        fluxList.classList.add("flux-list");

        for(let key in productionStep.get) {
            const fluxItem = document.createElement("li");
            let fluxColor = "#7d5d4f"; // couleur par défaut (marron)
            
            switch(key) {
                case "eau":
                    fluxColor = "#5852c9"; // violet
                    break;
                case "mineral":
                    fluxColor = "#d45f3a"; // orange
                    break;
                case "gaz":
                    fluxColor = "#e9c678"; // beige
                    break;
                case "petrole":
                    fluxColor = "#0f0d1d"; // noir
                    break;
                case "energie_renouvelable":
                    fluxColor = "#3e6c2d"; // vert
                    break;
                case "energie_fossile":
                    fluxColor = "#c6c6c6"; // gris
                    break;
                case "recyclage":
                    fluxColor = "#f2dc87"; // jaune
                    break;
            }
            fluxItem.innerHTML = `<span class="flux-indicator" style="background-color: ${fluxColor}"></span> ${key}: ${productionStep.get[key]}`;
            fluxList.appendChild(fluxItem);
        }
        getFlux.appendChild(fluxList);
        modalFluxInfo.appendChild(getFlux);
    }

        // Générer une liste des flux de sortie
        if (productionStep.send) {
            const fluxTitle = document.createElement("h4");
            fluxTitle.innerText = "Émission :";
            sendFlux.appendChild(fluxTitle);
            
            const fluxList = document.createElement("ul");
            fluxList.classList.add("flux-list");
    
            for(let key in productionStep.send) {
                const fluxItem = document.createElement("li");
                let fluxColor = "#7d5d4f"; // couleur par défaut (marron)
                
                switch(key) {
                    case "eau":
                        fluxColor = "#5852c9"; // violet
                        break;
                    case "mineral":
                        fluxColor = "#d45f3a"; // orange
                        break;
                    case "gaz":
                        fluxColor = "#e9c678"; // beige
                        break;
                    case "petrole":
                        fluxColor = "#0f0d1d"; // noir
                        break;
                    case "energie_renouvelable":
                        fluxColor = "#3e6c2d"; // vert
                        break;
                    case "energie_fossile":
                        fluxColor = "#c6c6c6"; // gris
                        break;
                    case "recyclage":
                        fluxColor = "#f2dc87"; // jaune
                        break;
                }
                fluxItem.innerHTML = `<span class="flux-indicator" style="background-color: ${fluxColor}"></span> ${key}: ${productionStep.send[key]}`;
                fluxList.appendChild(fluxItem);
            }
            sendFlux.appendChild(fluxList);
            modalFluxInfo.appendChild(sendFlux);
        }

        // Assemblage du corps de la modal
        modalBody.appendChild(modalIcon);
        modalBody.appendChild(modalDescription);
        modalBody.append(fluxInfoTitle);
        modalBody.appendChild(modalFluxInfo);
        
        // Pied de la modal (boutons d'action si nécessaire)
        const modalFooter = document.createElement("div");
        modalFooter.classList.add("modal-footer");
        
        const okButton = document.createElement("button");
        okButton.innerText = "OK";
        okButton.classList.add("modal-button");
        okButton.addEventListener("click", function() {
            document.body.removeChild(modalOverlay);
        });
        
        modalFooter.appendChild(okButton);
        
        // Assemblage de la modal
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);
        
        modalOverlay.appendChild(modalContent);
        
        // Ajout de la modal au body
        document.body.appendChild(modalOverlay);
        
        // Fermeture en cliquant en dehors de la modal
        modalOverlay.addEventListener("click", function(event) {
            if (event.target === modalOverlay) {
                document.body.removeChild(modalOverlay);
            }
        });

}