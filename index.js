const chalk = require('chalk');
const show = require('./actions/show');

const nextCLI = (input, flags) => {

  if (flags.contribute) {
    return console.log('Contributions are welcome here: https://github.com/tehp/next');
  }

  if (flags.show) {
    return show();
  }

  return console.log(chalk.red('Error: ') + 'command not recognized.\nType next --help for usage information.');

};

module.exports = nextCLI;