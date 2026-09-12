import { State } from "./state.js";
import { Pokemon } from "./pokeapi_types.js";

export async function commandCatch(state: State, ...args: string[]) {
    const [pokemonName] = args;

    console.log(`Throwing a Pokeball at ${pokemonName}...`);

    let pokemon: Pokemon | undefined;
    try {
        pokemon = await state.pokeAPI?.fetchPokemon(pokemonName);
    } catch (error) {
        console.error(error);
    }

    if (!pokemon) {
        console.log(`No pokemon found with name ${pokemonName}.`);
        return;
    }

    const baseExperience = pokemon.base_experience;
    const isCatched = Math.random() < baseExperience / 100;

    if (isCatched) {
        console.log(`Caught ${pokemon.name}!`);
        state.pokedex[pokemon.name] = pokemon;
    } else {
        console.log(`Failed to catch ${pokemon.name}.`);
    }
}
