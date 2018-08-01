const meow = require('meow');
const next = require('.');

const cli = meow(`
    Usage
      $ next <input>

    Options
      --help, -h        Show this screen
      --contribute, -c  Show how you can help make this project better
      --show, -s        Show all tasks
`, {
  flags: {
    help: {
      type: 'boolean',
      alias: 'h'
    },
    contribute: {
      type: 'boolean',
      alias: 'c'
    },
    show: {
      type: 'boolean',
      alias: 's'
    }
  }
});

next(cli.input[0], cli.flags);