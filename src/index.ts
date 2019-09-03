import chalk from "chalk";
import "./actions/show";
import { List } from "./List";
import { Item } from "./Item";

export default function nextCLI(input: any, flags: any) {

  // Load file into object for modifying
  var list: List = new List();

  if (flags.show) {
    console.log('\n' + chalk.magenta('     TASKS:') + ' \n');
    let index = 0;
    list.getTodo().forEach((value) => {
      console.log(' [' + index++ + '] ' + value.name);
    });
    return;
  }

  if (flags.contribute) {
    console.log('Contributions are welcome here: https://github.com/tehp/next');
    return;
  }

  if (flags.add) {
    let name = input[0];
    list.addItem(new Item(name));
    return;
  }

  if (flags.remove) {
    let index = input[0];
    list.removeItem(index);
    return;
  }

  return console.log(chalk.red('Error: ') + 'command not recognized.\nType next --help for usage information.');

};
