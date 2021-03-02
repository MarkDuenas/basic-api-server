'use strict';

class Animal {
  constructor() {
    this.id = 0;
    this.db = [];
  }

  get(id) {
    if(id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  create(obj) {
    let record = {
      id: ++ this.id,
      record: obj
    }

    this.db.push(record);
    return record;
  }

  update(id, obj) {
    if(id) {
      this.db.map(record => {
        if (record.id === id) {
          record.record = obj;
        }
        return record;
      })
     return this.db.find(record => record.id === id); 
    }
  }

  delete(id) {
    if(id) {
      this.db = this.db.filter(record => record.id !== id);
      return this.db.find(record => record.id === id);
    }
    return undefined;
  }

}

module.exports = Animal;