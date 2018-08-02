import chalk from "chalk";
import "./actions/show";
import { List } from "./List";
import { Item } from "./Item";

export default function nextCLI(input:any, flags:any) {

  // Load file into object for modifying
  var list:List = new List();

  if (flags.contribute) {
    console.log('Contributions are welcome here: https://github.com/tehp/next');
    return;
  }

  if (flags.show) {
    list.printTodo();
    return;
  }

  if (flags.add) {
    list.addItem(new Item(input));
    list.applyChanges();
    return;
  }

  if (flags.remove) {
    list.removeItem(input);
    list.applyChanges();
    return;
  }

  return console.log(chalk.red('Error: ') + 'command not recognized.\nType next --help for usage information.');

};
