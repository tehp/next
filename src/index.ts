import chalk from "chalk";
import * as gradient from "gradient-string";
import "./actions/show";
import { List } from "./List";
import { Item } from "./Item";

export default function nextCLI(input:any, flags:any) {

  // Load file into object for modifying
  var list:List = new List();

  // -c, --contribute
  if (flags.contribute) {
    console.log('Contributions are welcome here: https://github.com/tehp/next');
    return;
  }

  // -s, --show
  if (flags.show) {
    console.log('\n   ' + chalk.magenta('TASKS:') + ' \n');
    console.log(list.getTodo());
    return;
  }

  // -a, --add
  if (flags.add) {
    let name = input[0];
    list.addItem(new Item(name));
    return;
  }

  // -r, --remove
  if (flags.remove) {
    let index = input[0];
    list.removeItem(index);
    return;
  }

  return console.log(chalk.red('Error: ') + 'command not recognized.\nType next --help for usage information.');

};
