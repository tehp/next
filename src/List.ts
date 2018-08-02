import fs = require('file-system');
import os = require('os');
import util = require('util');
import { Item } from './Item';

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

  public applyChanges() {
    fs.writeFileSync(this.path, JSON.stringify(this.items, null, 2), 'utf-8');
  }

  public addItem(item:Item) {
    this.items.push(item);
  }

  public removeItem(index:number) {
    let index_search = 0;
    this.items.forEach((value) => {
      if (index == index_search) {
        this.items.splice(index_search, 1);
        return;
      }
      if (!value.isDone) {
        index_search++;
      }
    });
  }

  public getItems() {
    return this.items;
  }

  public printTodo() {
    let index = 0;
    this.items.forEach((value) => {
      if (!value.isDone) {
        console.log(index++ + ' ' + value.name);
      }
    });
  }

}
