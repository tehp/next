import chalk from "chalk";
import "./actions/show";
import { List } from "./lib/List";

export default function nextCLI(input:any, flags:any) {

  var list:List = new List();

  if (flags.contribute) {
    return console.log('Contributions are welcome here: https://github.com/tehp/next');
  }

  if (flags.show) {
    console.log('show');
  }

  return console.log(chalk.red('Error: ') + 'command not recognized.\nType next --help for usage information.');

};
