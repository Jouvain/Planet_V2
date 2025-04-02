const fluxData = {
    "years": [
        {
            "year": 2025,
            "productionSteps": [
                {
                    step: "Production et distribution d’énergies",
                    icon: "🌱",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 100, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 60 }
                },
                {
                    step: "Fabrication des matières premières, des composants et des emballages",
                    icon: "⚡",
                    get: { eau: 10, minerai: 50, gaz: 20, petrole: 30, energie_fossile: 50, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Transport des composants et des emballages",
                    icon: "🚚",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 60, energie_fossile: 60, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Fabrication des menuiseries et préparation de leur transport",
                    icon: "🏭",
                    get: { eau: 0, minerai: 0, gaz: 40, petrole: 0, energie_fossile: 40, energie_renouvelable: 20, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Transport des menuiseries",
                    icon: "🚚",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 40, energie_fossile: 40, energie_renouvelable: 0, recyclage: 0, reemploi: 30, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Installation des menuiseries",
                    icon: "🏗️",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Utilisation",
                    icon: "🏠",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 10, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Fin de vie",
                    icon: "♻️",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                }
            ]
        },
        {
            "year": 2026,
            "productionSteps": [
                {
                    step: "Production et distribution d’énergies",
                    icon: "🌱",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 90, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 50 }
                },
                {
                    step: "Fabrication des matières premières, des composants et des emballages",
                    icon: "⚡",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Transport des composants et des emballages",
                    icon: "🚚",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Fabrication des menuiseries et préparation de leur transport",
                    icon: "🏭",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Transport des menuiseries",
                    icon: "🚚",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Installation des menuiseries",
                    icon: "🏗️",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Utilisation",
                    icon: "🏠",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Fin de vie",
                    icon: "♻️",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                }
            ]
        },
        {
            "year": 2027,
            "productionSteps": [
                {
                    step: "Production et distribution d’énergies",
                    icon: "🌱",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 80, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 40 }
                },
                {
                    step: "Fabrication des matières premières, des composants et des emballages",
                    icon: "⚡",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Transport des composants et des emballages",
                    icon: "🚚",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Fabrication des menuiseries et préparation de leur transport",
                    icon: "🏭",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Transport des menuiseries",
                    icon: "🚚",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Installation des menuiseries",
                    icon: "🏗️",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Utilisation",
                    icon: "🏠",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Fin de vie",
                    icon: "♻️",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                }
            ]
        },
        {
            "year": 2028,
            "productionSteps": [
                {
                    step: "Production et distribution d’énergies",
                    icon: "🌱",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 70, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 30 }
                },
                {
                    step: "Fabrication des matières premières, des composants et des emballages",
                    icon: "⚡",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Transport des composants et des emballages",
                    icon: "🚚",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Fabrication des menuiseries et préparation de leur transport",
                    icon: "🏭",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Transport des menuiseries",
                    icon: "🚚",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Installation des menuiseries",
                    icon: "🏗️",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Utilisation",
                    icon: "🏠",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Fin de vie",
                    icon: "♻️",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                }
            ]
        },
        {
            "year": 2029,
            "productionSteps": [
                {
                    step: "Production et distribution d’énergies",
                    icon: "🌱",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 60, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 20 }
                },
                {
                    step: "Fabrication des matières premières, des composants et des emballages",
                    icon: "⚡",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Transport des composants et des emballages",
                    icon: "🚚",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Fabrication des menuiseries et préparation de leur transport",
                    icon: "🏭",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Transport des menuiseries",
                    icon: "🚚",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Installation des menuiseries",
                    icon: "🏗️",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Utilisation",
                    icon: "🏠",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Fin de vie",
                    icon: "♻️",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                }
            ]
        },
        {
            "year": 2029,
            "productionSteps": [
                {
                    step: "Production et distribution d’énergies",
                    icon: "🌱",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 50, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 10 }
                },
                {
                    step: "Fabrication des matières premières, des composants et des emballages",
                    icon: "⚡",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Transport des composants et des emballages",
                    icon: "🚚",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Fabrication des menuiseries et préparation de leur transport",
                    icon: "🏭",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Transport des menuiseries",
                    icon: "🚚",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Installation des menuiseries",
                    icon: "🏗️",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Utilisation",
                    icon: "🏠",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                },
                {
                    step: "Fin de vie",
                    icon: "♻️",
                    get: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 0, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 },
                    send: { eau: 0, minerai: 0, gaz: 0, petrole: 0, energie_fossile: 10, energie_renouvelable: 0, recyclage: 0, reemploi: 0, atmosphere: 0 }
                }
            ]
        }
    ]
}

