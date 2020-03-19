class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return;
    }

    for (let callback of this.events[eventName]) {
      callback(...args);
    }
  }

  off(eventName, callback) {
    if (!this.events[eventName]) {
      return;
    }

    this.events[eventName] = this.events[eventName].filter(cback => cback !== callback);
  }

}
class Logger {
  constructor() {}

  log(info) {
    console.log(`The ${info} event has been emitted`);
  }

}
let Social = {
  shared(friendName) {
    return friendName + " Shared " + this.name;
  },

  like(friendName) {
    return friendName + "Like " + this.name;
  }

};
class Movie extends EventEmitter {
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }

  play() {
    this.emit("Play");
  }

  pause() {
    this.emit("Pause");
  }

  resume() {
    this.emit("Resume");
  }

  addCast(cast) {
    if (cast.length !== undefined) {
      cast.forEach(element => this.cast.push(element));
    } else this.cast.push(cast);
  }

}
