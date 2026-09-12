import { State } from "./state.js";
import type { Pokemon } from "./pokeapi_types.js";

export async function commandPokedex(state: State, ...args: string[]) {
    console.log("Pokedex:");

    for (const [name] of Object.entries(state.pokedex)) {
        console.log(`  - ${name}`);
    }
}
