export class InvalidParameterException extends Error {
  constructor(message, parameterName, expectedType) {
    super(message)

    this.name = 'InvalidParameterException'
    this.details = `Provided Parameter is not valid, Parameter: ${parameterName} is of wrong type expected type: ${expectedType}.`
  }
}
