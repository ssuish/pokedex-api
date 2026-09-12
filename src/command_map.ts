import { State } from "./state.js";

export async function commandMap(state: State) {
    const PokeAPI = state.pokeAPI;

    if (!PokeAPI) return;

    let locations;
    
    try {
      if (!state.nextLocationsURL) {
          locations = await PokeAPI.fetchLocations();
      } else {
          locations = await PokeAPI.fetchLocations(state.nextLocationsURL);
      }
    } catch (error) {
        console.log(`Error: ${error}`);
        return;
    }

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

    for (const location of locations.results) {
        const name = location.name;
        console.log(name);
    }
}
