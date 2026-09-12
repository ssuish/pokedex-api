import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";
import { CLICommand } from "./state.js";

export async function getCommands(): Promise<Record<string, CLICommand>> {
    return {
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays the current locations",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays the previous locations",
            callback: commandMapb,
        },
        explore: {
            name: "explore",
            description: "Explores the current location",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Attempts to catch a Pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Inspects a Pokemon",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Displays the Pokedex",
            callback: commandPokedex,
        },
    };
}
