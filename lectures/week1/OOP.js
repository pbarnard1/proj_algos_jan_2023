class Pokemon {
    constructor(name, height, weight, description, nature, types) { // Equivalent to "__init__" in Python and className() in Java
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.description = description;
        this.nature = nature;
        this.types = types;
        this.moves = [];
        this.trainer = null;
    }
}

class Trainer {
    constructor(name, status) {
        this.name = name;
        this.status = status; // "Ace Trainer", "Camper", "Pokemon Trainer", "Gym Leader"
        this.badges = [];
        this.pokemon = []; // Start off with no Pokemon
    }

    // Add methods here!  For example, catching a Pokemon, battling a trainer
    catchPokemon(newPokemon) {
        this.pokemon.push(newPokemon);
    }
}
let pikachu = new Pokemon("Pikachu",16,13.2,"It's an electric Pokemon that's adorable!","Timid",["Electric"]);
let charmander = new Pokemon("Charmander",14,20.5,"Fire-type lizard Pokemon","Serious",["Fire"]);
console.log(pikachu.nature); // Grabbing an attribute

// Making a new trainer
let adrian = new Trainer("Adrian","Camper");
adrian.catchPokemon(charmander);
adrian.catchPokemon(new Pokemon("Rattata",12,15,"Rat-type normal Pokemon","Shy",["Normal"]));

// Looping through all the Pokemon caught by Adrian
for (let k = 0; k < adrian.pokemon.length; k++) {
    console.log(adrian.pokemon[k].name);
}