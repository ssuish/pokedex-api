import { createInterface, type Interface } from "readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./command.js";
import { PokeAPI } from "./pokeapi.js";
import { Pokemon } from "./pokeapi_types.js";


export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    pokedex: Record<string, Pokemon>;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
};

export async function initState(): Promise<State> {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "pokedex > ",
    });

    const commands = await getCommands();
    const pokeAPI = new PokeAPI();

    return {
        rl,
        commands,
        pokeAPI: pokeAPI,
        pokedex: {},
        nextLocationsURL: null,
        prevLocationsURL: null,
    };
}
