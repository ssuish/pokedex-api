import { State } from "./state.js";

export async function commandMapb(state: State) {
    const PokeAPI = state.pokeAPI;

    if (!PokeAPI) return;

    let locations;

    try {
        if (!state.prevLocationsURL) {
            console.log("you're on the first page")
            return
        } else {
            locations = await PokeAPI.fetchLocations(state.prevLocationsURL);
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        return;
    }

    state.nextLocationsURL = state.prevLocationsURL;
    state.prevLocationsURL = locations.previous;

    for (const location of locations.results) {
        const name = location.name;
        console.log(name);
    }
}
