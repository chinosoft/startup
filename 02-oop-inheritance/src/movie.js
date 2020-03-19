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