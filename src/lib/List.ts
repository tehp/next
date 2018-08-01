import fs = require('file-system');
import os = require('os');
import util = require('util');

export class List {

  path:string = os.homedir() + '/.next.json';

  format:object = {
    ex: "test",
    ex2: "test2"
  };

  // Loads or creates a list in memory for modifying
  constructor() {
    if (fs.existsSync(this.path)) {
      var data = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
      console.log(data);
    } else {
      fs.closeSync(fs.openSync(this.path, 'w'));
      fs.writeFileSync(this.path, JSON.stringify(this.format, null, 2), 'utf-8');
    }
  }

  // method to serialize list object to json and save to file
}
