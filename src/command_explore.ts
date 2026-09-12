import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
    const [locationName] = args;
    const PokeAPI = state.pokeAPI;

    let locations;
    try {
        locations = await PokeAPI?.fetchLocation(locationName);
    } catch (error) {
        console.log(`Error fetching location: ${error}`);
        return;
    }

    if (!locations) {
        console.log(`Location not found: ${locationName}...`);
        return;
    }

    console.log(`Exploring location: ${locations.name}`);

    const pokemons = locations.pokemon_encounters;

    if (!pokemons) {
        console.log(`No pokemons found in location: ${locations.name}`);
        return;
    }

    console.log("Found Pokemon:");

    for (const pokemon of pokemons) {
        console.log(" - " + pokemon.pokemon.name);
    }
}
