class Movie {
  constructor(title, year, duration) {
    this.title = title;
    this.year = year;
    this.duration = duration;
  }
  play() {
    return "Play " + this.title;
  }
  pause() {
    return "Pause " + this.title;
  }
  resume() {
    return "Resume " + this.title;
  }
}

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

    this.events[eventName] = this.events[eventName].filter(
      cback => cback !== callback
    );
  }
}
