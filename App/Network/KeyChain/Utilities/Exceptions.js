export class InvalidUsernameException extends Error {
  constructor(message) {
    super(message)

    this.name = 'InvalidUsernameException'
    this.details = `Provided username is not valid, ${message}`
  }
}
