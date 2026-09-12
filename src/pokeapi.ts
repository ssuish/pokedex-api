import { Cache } from "./pokecache.js";
import type { Location, Pokemon, ShallowLocations } from "./pokeapi_types.js";

export type * from "./pokeapi_types.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() { }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        // implement this

        const cache = new Cache(10 * 60 * 1000);
        const cachedData = cache.get(pageURL ?? `${PokeAPI.baseURL}/location-area`);
        if (cachedData) return cachedData as ShallowLocations;
        
        const response = await fetch(pageURL ?? `${PokeAPI.baseURL}/location-area`);

        if (!response.ok) {
            throw new Error(
                `Failed to fetch locations: ${response.status} ${response.statusText}`,
            );
        }

        let data: unknown;

        try {
            data = await response.json();
        } catch {
            throw new Error("Failed to parse location response as JSON");
        }

        return data as ShallowLocations;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const cache = new Cache(10 * 60 * 1000);
        const cachedData = cache.get(`${PokeAPI.baseURL}/location-area/${locationName}`);
        if (cachedData) return cachedData as Location;
        
        const response = await fetch(
            `${PokeAPI.baseURL}/location-area/${locationName}`,
        );

        if (!response.ok) {
            throw new Error(
                `Failed to fetch location: ${response.status} ${response.statusText}`,
            );
        }

        let data: unknown;

        try {
            data = await response.json();
        } catch {
            throw new Error("Failed to parse location response as JSON");
        }

        return data as Location;                        
    }

    async fetchPokemon(pokemonName: string): Promise<Pokemon> {
        const response = await fetch(
            `${PokeAPI.baseURL}/pokemon/${pokemonName}`,
        );

        if (!response.ok) {
            throw new Error(
                `Failed to fetch pokemon: ${response.status} ${response.statusText}`,
            );
        }

        let data: unknown;

        try {
            data = await response.json();
        } catch {
            throw new Error("Failed to parse pokemon response as JSON");
        }

        return data as Pokemon;
    }
}
