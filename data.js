const fluxData = [
    {
        step: "Production et distribution d’énergies",
        icon: "🌱",
        get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0 },
        send: { energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 50 }
    },
    {
        step: "Fabrication des matières premières, des composants et des emballages",
        icon: "⚡",
        get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0 },
        send: { energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0 }
    },
    {
        step: "Transport des composants et des emballages",
        icon: "🚚",
        get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0 },
        send: {}
    },
    {
        step: "Fabrication des menuiseries et préparation de leur transport",
        icon: "🏭",
        get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0 },
        send: {}
    },
    {
        step: "Transport des menuiseries",
        icon: "🚚",
        get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0 },
        send: {}
    },
    {
        step: "Installation des menuiseries",
        icon: "🏗️",
        get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0 },
        send: {}
    },
    {
        step: "Utilisation",
        icon: "🏠",
        get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0 },
        send: {}
    },
    {
        step: "Fin de vie",
        icon: "♻️",
        get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0 },
        send: {}
    }
];