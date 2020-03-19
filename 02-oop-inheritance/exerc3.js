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

    this.events[eventName] = this.events[eventName].filter(
      cback => cback !== callback
    );
  }
}

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

class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Logger {
  constructor() {}
  log(info) {
    console.log(`The ${info} event has been emitted`);
  }
}

const terminator = new Movie("Terminator I", 1985, 60);
const arnold = new Actor("Arnold Schwarzenegger", 50);
const actors = [
  new Actor("Paul Winfield", 50),
  new Actor("Michael Biehn", 50),
  new Actor("Linda Hamilton", 50)
];

terminator.addCast(arnold);
terminator.addCast(actors[1]);
const logger = new Logger();
const callbackPlay = () => logger.log("Play");
const callbackPause = () => logger.log("Pause");
const callbackResume = () => logger.log("Resume");

terminator.on("Play", callbackPlay);
terminator.play();
