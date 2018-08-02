import * as meow from "meow";
import next from "./index";

const cli = meow(`
    Usage
      $ next <input>

    Options
      --help, -h             Show this screen
      --version, -v          Show the application version
      --contribute, -c       Show how you can help make this project better
      --show, -s             Show all tasks with indexes
      --add, -a [name]       Add a new item to the list
      --remove, -r [index]   Remove a task by its shown index
`, {
  flags: {
    help: {
      type: 'boolean',
      alias: 'h'
    },
    version: {
      type: 'boolean',
      alias: 'v'
    },
    contribute: {
      type: 'boolean',
      alias: 'c'
    },
    show: {
      type: 'boolean',
      alias: 's'
    },
    add: {
      type: 'boolean',
      alias: 'a'
    },
    remove: {
      type: 'boolean',
      alias: 'r'
    }
  }
});

next(cli.input, cli.flags);
