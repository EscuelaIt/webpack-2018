export class Task {
  constructor(name) {
    this.id = new Date().getTime()
    this.name = name
    this.isComplete = false
    return this
  }
}
