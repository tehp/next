export class Item {
  name: string;
  date: Date;
  isDone: boolean;

  constructor(name: string) {
    this.name = name;
    this.date = new Date();
    this.isDone = false;
  }
}
