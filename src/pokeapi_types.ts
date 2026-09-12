export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
};

export type Location = {
    id: number;
    name: string;
    game_index: number;
    encounter_method_rates: EncounterMethodRate[];
    location: LocationReference;
    names: Name[];
    pokemon_encounters: PokemonEncounter[];
};

export interface EncounterMethodRate {
    encounter_method: EncounterMethod;
    version_details: VersionDetail[];
}

export interface EncounterMethod {
    name: string;
    url: string;
}

export interface VersionDetail {
    rate: number;
    version: Version;
}

export interface Version {
    name: string;
    url: string;
}

export interface LocationReference {
    name: string;
    url: string;
}

export interface Name {
    name: string;
    language: Language;
}

export interface Language {
    name: string;
    url: string;
}

export interface PokemonEncounter {
    pokemon: PokemonReference;
    version_details: VersionDetail2[];
}

export interface PokemonReference {
    name: string;
    url: string;
}

export interface VersionDetail2 {
    version: Version2;
    max_chance: number;
    encounter_details: EncounterDetail[];
}

export interface Version2 {
    name: string;
    url: string;
}

export interface EncounterDetail {
    min_level: number;
    max_level: number;
    chance: number;
    method: Method;
    condition_values: any[];
    pokemon_details: any;
}

export interface Method {
    name: string;
    url: string;
}

export type Pokemon = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: PokemonForm[];
    game_indices: PokemonGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    species: PokemonReference;
    sprites: PokemonSprites;
    cries: PokemonCries;
    stats: PokemonStat[];
    types: PokemonType[];
    past_types: PokemonPastType[];
    past_abilities: PokemonPastAbility[];
};

export interface PokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: PokemonReference;
}

export interface PokemonForm {
    name: string;
    url: string;
}

export interface PokemonGameIndex {
    game_index: number;
    version: PokemonReference;
}

export interface PokemonHeldItem {
    item: PokemonReference;
    version_details: PokemonHeldItemVersionDetail[];
}

export interface PokemonHeldItemVersionDetail {
    rarity: number;
    version: PokemonReference;
}

export interface PokemonMove {
    move: PokemonReference;
    version_group_details: PokemonMoveVersionGroupDetail[];
}

export interface PokemonMoveVersionGroupDetail {
    level_learned_at: number;
    version_group: PokemonReference;
    move_learn_method: PokemonReference;
    order: number | null;
}

export interface PokemonSprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: PokemonOtherSprites;
    versions: Record<string, Record<string, PokemonSpriteSet>>;
}

export interface PokemonOtherSprites {
    dream_world: PokemonSpriteSet;
    home: PokemonSpriteSet;
    "official-artwork": PokemonSpriteSet;
    showdown: PokemonSpriteSet;
}

export interface PokemonSpriteSet {
    back_default?: string | null;
    back_female?: string | null;
    back_shiny?: string | null;
    back_shiny_female?: string | null;
    front_default?: string | null;
    front_female?: string | null;
    front_shiny?: string | null;
    front_shiny_female?: string | null;
    animated?: PokemonSpriteSet;
}

export interface PokemonCries {
    latest: string;
    legacy: string;
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: PokemonReference;
}

export interface PokemonType {
    slot: number;
    type: PokemonReference;
}

export interface PokemonPastType {
    generation: PokemonReference;
    types: PokemonType[];
}

export interface PokemonPastAbility {
    generation: PokemonReference;
    abilities: PokemonPastAbilitySlot[];
}

export interface PokemonPastAbilitySlot {
    ability: PokemonReference | null;
    is_hidden: boolean;
    slot: number;
}
