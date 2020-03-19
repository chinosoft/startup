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
}
