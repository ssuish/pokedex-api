# Pokedex CLI

A TypeScript command-line Pokedex that uses the [PokeAPI](https://pokeapi.co/) to explore locations, discover Pokémon, catch them, and inspect caught Pokémon.

The project focuses on a small, readable architecture with typed API responses, command-based interaction, in-memory state, and automated tests.

## Features

- Browse PokeAPI location pages with `map` and `mapb`
- Explore a location and list the Pokémon found there
- Catch Pokémon with a probability based on their base experience
- Inspect caught Pokémon, including stats and types
- List caught Pokémon with `pokedex`
- In-memory application state for the current session
- Generic expiring cache utility with unit tests
- Strict TypeScript configuration

## Tech stack

- TypeScript
- Node.js
- Native `fetch`
- Vitest
- PokeAPI

## Getting started

### Requirements

- Node.js 20 or newer
- npm

### Install

```bash
npm install
```

### Run

```bash
npm start
```

For development, compile and launch the CLI with:

```bash
npm run dev
```

The prompt will appear as:

```text
pokedex >
```

## Commands

| Command | Description |
| --- | --- |
| `help` | Display help information |
| `map` | Show the next page of locations |
| `mapb` | Show the previous page of locations |
| `explore <location>` | List Pokémon found in a location area |
| `catch <pokemon>` | Attempt to catch a Pokémon |
| `inspect <pokemon>` | Inspect a caught Pokémon's details |
| `pokedex` | List caught Pokémon |
| `exit` | Close the application |

Example session:

```text
pokedex > map
pokedex > explore viridian-forest-area
pokedex > catch pikachu
pokedex > inspect pikachu
pokedex > pokedex
```

## Project structure

```text
src/
├── main.ts                 # CLI entry point
├── repl.ts                 # Input normalization
├── state.ts                # Shared application state
├── command.ts              # Command registry
├── command_*.ts            # Individual CLI commands
├── pokeapi.ts              # PokeAPI client
├── pokeapi_types.ts        # API response types
├── pokecache.ts            # Expiring cache utility
└── *.test.ts               # Vitest tests
```

## Testing and type checking

Run the test suite:

```bash
npm test
```

Run the TypeScript compiler without emitting files:

```bash
npx tsc --noEmit
```

## Design notes

- Commands receive the shared `State` object, keeping command behavior easy to test and extend.
- API response models are kept separate from the HTTP client in `pokeapi_types.ts`.
- The caught-Pokémon collection is session-only and is not persisted between runs.
- Network requests require an active internet connection because data comes directly from PokeAPI.

## Possible next steps

- Persist the caught-Pokémon collection to disk
- Add command-level tests for API failures and formatted output
- Improve help output so it lists every registered command
- Add stronger runtime validation for external API responses

## License

This project is available for personal and educational use.
