const initialData = {
    cards: {
        "arc1": { id: "arc1", content: "Bateleur", design: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg' },
        "arc2": { id: "arc2", content: "Pretresse", design: 'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg' },
        "arc3": { id: "arc3", content: "Imperatrice", design: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg' },
        "arc4": { id: "arc4", content: "Empereur", design: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg' },
        "arc5": { id: "arc5", content: "Pape", design: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg' },
        "arc6": { id: "arc6", content: "Amoureux", design: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg' },
        "arc7": { id: "arc7", content: "Chariot", design: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg' },
        "arc8": { id: "arc8", content: "Force", design: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg' },
        "arc9": { id: "arc9", content: "Hermite", design: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg' },
        "arc10": { id: "arc10", content: "Roue de fortune", design: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg' },
        "arc11": { id: "arc11", content: 'Justice', design: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg' },
        "arc12": { id: "arc12", content: 'Pendu', design: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg' },
        "arc13": { id: "arc13", content: 'Arcane sans Nom', design: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg' },
        "arc14": { id: "arc14", content: 'Temperance', design: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg' },
        "arc15": { id: "arc15", content: 'Diable', design: 'https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg' },
        "arc16": { id: "arc16", content: 'Tour', design: 'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg' },
        "arc17": { id: "arc17", content: 'Etoile', design: 'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg' },
        "arc18": { id: "arc18", content: 'Lune', design: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg' },
        "arc19": { id: "arc19", content: 'Soleil', design: 'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg' },
        "arc20": { id: "arc20", content: 'Jugement', design: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg' },
        "arc21": { id: "arc21", content: 'Monde', design: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg' },
        "arc22": { id: "arc22", content: 'Fou', design: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg' },
    },

    columns: {
        "initialDeck": {
            id: "initialDeck",
            title: "Les Arcanes",
            taskIds: ["arc1", "arc2", "arc3", "arc4", "arc5", "arc6", "arc7", "arc8", "arc9", "arc10", "arc11", "arc12", "arc13", "arc14", "arc15", "arc16", "arc17", "arc18", "arc19", "arc20", "arc21", "arc22"]
        },
        "pos1": {
            id: "pos1",
            title: "Situation initiale",
            taskIds: []
        },
        "pos2": {
            id: "pos2",
            title: "En opposition",
            taskIds: []
        },
        "pos3": {
            id: "pos3",
            title: "En atout",
            taskIds: []
        },
        "pos4": {
            id: "pos4",
            title: "En résultante",
            taskIds: []
        },
    },

    // columnOrder: ["initialDeck"],
    columnOrder: ["initialDeck", "pos1", "pos2", "pos3", "pos4"],
}

export default initialData;