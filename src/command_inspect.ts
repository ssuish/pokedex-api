import { State } from "./state.js";
import type { Pokemon } from "./pokeapi_types.js";

export async function commandInspect(state: State, ...args: string[]) {
    const [pokemonName] = args;

    const pokemon: Pokemon | undefined = pokemonName
        ? state.pokedex[pokemonName]
        : undefined;

    if (!pokemon) {
        console.log(`No such pokemon: ${pokemonName}`);
        return;
    }

    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    console.log("Stats:");

    for (const stat of pokemon.stats) {
        console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
    }

    console.log("Types:");

    for (const type of pokemon.types) {
        console.log(`  - ${type.type.name}`);
    }
}
