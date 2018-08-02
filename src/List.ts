import fs = require('file-system');
import os = require('os');
import { Item } from './Item';

// Main list class. Contains an array of Items.
// Is loaded from ~/.next.json when a command is run.

export class List {

  path:string = os.homedir() + '/.next.json';
  items:Item[];

  constructor() {
    if (!fs.existsSync(this.path)) {
      this.items = new Array<Item>();
      fs.closeSync(fs.openSync(this.path, 'w'));
      this.applyChanges();
    }
    this.items = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
  }

  // Save the current object state to JSON file
  private applyChanges() {
    fs.writeFileSync(this.path, JSON.stringify(this.items, null, 2), 'utf-8');
  }

  // Add a new item to the list
  public addItem(item:Item) {
    this.items.push(item);
    this.applyChanges();
  }

  // Removes an item, requires an index from the show command
  public removeItem(index:number) {
    let index_search = 0;
    this.items.forEach((value) => {
      if (index == index_search) {
        this.items.splice(index_search, 1);
        this.applyChanges();
        return;
      }
      if (!value.isDone) {
        index_search++;
      }
    });
  }

  // Gets all items
  public getItems() {
    return this.items;
  }

  // Prints all non-done items, prints an index for each item that can be used with remove
  public printTodo() {
    let index = 0;
    this.items.forEach((value) => {
      if (!value.isDone) {
        console.log(index++ + ' ' + value.name);
      }
    });
  }

}
