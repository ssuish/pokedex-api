import { cleanInput } from "./repl.js";
import { initState } from "./state.js";

const state = await initState();
const rl = state.rl;
const commands = state.commands;  

function main() {
  rl.prompt();
  rl.on("line", async (input: string) => {
      const words = cleanInput(input);
      if (words.length === 0){
          rl.prompt();
          return
      }

      const commandName = words[0];
      const command = commands[commandName];

      try {
          if (command) {
              await command.callback(state, ...words.slice(1));
          } else {
              console.log(`Unknown command: ${commandName}`);
          }
          rl.prompt();
      } catch (error) {
          console.error(error);
          rl.prompt();
      }
  });
}

main();
